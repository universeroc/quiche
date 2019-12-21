// Copyright (C) 2019, Cloudflare, Inc.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
// IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
// LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
use std::time::Duration;
use std::time::Instant;

use crate::cc;
use crate::recovery::Sent;

const SIMPLE_LOST_THRESHOLD: u32 = 2;

// Reno Congestion Control
pub struct Reno {
    congestion_window: usize,

    bytes_in_flight: usize,

    congestion_recovery_start_time: Option<Instant>,

    ssthresh: usize,

    prev_cwnd: usize,

    prev_ssthresh: usize,
    /* TODO: ECN is not implemented.
     * ecn_ce_counters: [usize; packet::EPOCH_COUNT] */
}

impl cc::CongestionControl for Reno {
    fn new() -> Self
    where
        Self: Sized,
    {
        Reno {
            congestion_window: cc::INITIAL_WINDOW,

            bytes_in_flight: 0,

            congestion_recovery_start_time: None,

            ssthresh: std::usize::MAX,

            prev_cwnd: 0,

            prev_ssthresh: 0,
        }
    }

    fn cwnd(&self) -> usize {
        self.congestion_window
    }

    fn collapse_cwnd(&mut self) {
        self.congestion_window = cc::INITIAL_WINDOW;
    }

    fn bytes_in_flight(&self) -> usize {
        self.bytes_in_flight
    }

    fn decrease_bytes_in_flight(&mut self, bytes_in_flight: usize) {
        self.bytes_in_flight =
            self.bytes_in_flight.saturating_sub(bytes_in_flight);
    }

    fn congestion_recovery_start_time(&self) -> Option<Instant> {
        self.congestion_recovery_start_time
    }

    // Congestion Control hooks
    fn on_packet_sent_cc(&mut self, bytes_sent: usize, trace_id: &str) {
        self.bytes_in_flight += bytes_sent;

        trace!("{} OnPacketSentCC() {:?}", trace_id, &self);
    }

    fn on_packet_acked_cc(
        &mut self, packet: &Sent, _srtt: Duration, min_rtt: Duration,
        trace_id: &str,
    ) {
        self.bytes_in_flight -= packet.size;

        if let Some(congestion_recovery_start_time) =
            self.congestion_recovery_start_time
        {
            // Simple lost detection: when the recovery episode ends
            // and the duration of current recovery episode is
            // short than a given threshold, currently defined by
            // 2 x min_rtt. This means there was a small loss
            // recovered very quickly, indicating this has a
            // low probability of congestion and a simple packet lost.
            // In this case we restore previous cwnd/ssthresh
            // to resume faster after recovery.
            if packet.time > congestion_recovery_start_time &&
                congestion_recovery_start_time.elapsed() <
                    SIMPLE_LOST_THRESHOLD * min_rtt
            {
                // End of current recovery episode.
                self.congestion_recovery_start_time = None;

                self.congestion_window = self.prev_cwnd;
                self.ssthresh = self.prev_ssthresh;
            }
        }

        if self.in_congestion_recovery(packet.time) {
            return;
        }

        if self.is_app_limited() {
            return;
        }

        if self.congestion_window < self.ssthresh {
            // Slow start.
            self.congestion_window += packet.size;

            trace!("{} OnPacketAckedCC() SLOW_START {:?}", trace_id, &self);
        } else {
            // Congestion avoidance.
            self.congestion_window +=
                (cc::MAX_DATAGRAM_SIZE * packet.size) / self.congestion_window;

            trace!("{} OnPacketAckedCC() CONG_AVOIDANCE {:?}", trace_id, &self);
        }
    }

    fn congestion_event(
        &mut self, time_sent: Instant, now: Instant, trace_id: &str,
    ) {
        // Start a new congestion event if packet was sent after the
        // start of the previous congestion recovery period.
        if !self.in_congestion_recovery(time_sent) {
            self.congestion_recovery_start_time = Some(now);

            // Back up current cwnd/ssthresh
            self.prev_cwnd = self.congestion_window;
            self.prev_ssthresh = self.ssthresh;

            self.congestion_window = (self.congestion_window as f64 *
                cc::LOSS_REDUCTION_FACTOR)
                as usize;
            self.congestion_window =
                std::cmp::max(self.congestion_window, cc::MINIMUM_WINDOW);
            self.ssthresh = self.congestion_window;

            trace!("{} CongestionEvent() {:?}", trace_id, &self);
        }
    }
}

impl std::fmt::Debug for Reno {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(
            f,
            "cwnd={} ssthresh={} bytes_in_flight={}",
            self.congestion_window, self.ssthresh, self.bytes_in_flight,
        )
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const TRACE_ID: &str = "test_id";

    fn init() {
        let _ = env_logger::builder().is_test(true).try_init();
    }

    #[test]
    fn reno_init() {
        let cc = cc::new_congestion_control(cc::Algorithm::Reno);

        assert!(cc.cwnd() > 0);
        assert_eq!(cc.bytes_in_flight(), 0);
    }

    #[test]
    fn reno_send() {
        init();

        let mut cc = cc::new_congestion_control(cc::Algorithm::Reno);

        cc.on_packet_sent_cc(1000, TRACE_ID);

        assert_eq!(cc.bytes_in_flight(), 1000);
    }

    #[test]
    fn reno_slow_start() {
        init();

        let mut cc = cc::new_congestion_control(cc::Algorithm::Reno);

        let p = Sent {
            pkt_num: 0,
            frames: vec![],
            time: std::time::Instant::now(),
            size: 5000,
            ack_eliciting: true,
            in_flight: true,
        };

        // Send 5k x 4 = 20k, higher than default cwnd(~15k)
        // to become no longer app limited
        cc.on_packet_sent_cc(p.size, TRACE_ID);
        cc.on_packet_sent_cc(p.size, TRACE_ID);
        cc.on_packet_sent_cc(p.size, TRACE_ID);
        cc.on_packet_sent_cc(p.size, TRACE_ID);

        let cwnd_prev = cc.cwnd();

        cc.on_packet_acked_cc(
            &p,
            Duration::new(0, 1),
            Duration::new(0, 1),
            TRACE_ID,
        );

        // Check if cwnd increased by packet size (slow start)
        assert_eq!(cc.cwnd(), cwnd_prev + p.size);
    }

    #[test]
    fn reno_congestion_event() {
        init();

        let mut cc = cc::new_congestion_control(cc::Algorithm::Reno);
        let prev_cwnd = cc.cwnd();

        cc.congestion_event(
            std::time::Instant::now(),
            std::time::Instant::now(),
            TRACE_ID,
        );

        // In Reno, after congestion event, cwnd will be cut by half
        assert_eq!(prev_cwnd / 2, cc.cwnd());
    }

    #[test]
    fn reno_congestion_avoidance() {
        init();

        let mut cc = cc::new_congestion_control(cc::Algorithm::Reno);
        let prev_cwnd = cc.cwnd();

        // Send 20K bytes
        cc.on_packet_sent_cc(20000, TRACE_ID);

        cc.congestion_event(
            std::time::Instant::now(),
            std::time::Instant::now(),
            TRACE_ID,
        );

        // In Reno, after congestion event, cwnd will be cut by half
        assert_eq!(prev_cwnd / 2, cc.cwnd());

        let p = Sent {
            pkt_num: 0,
            frames: vec![],
            time: std::time::Instant::now(),
            size: 5000,
            ack_eliciting: true,
            in_flight: true,
        };

        let prev_cwnd = cc.cwnd();

        // Ack 5000 bytes
        cc.on_packet_acked_cc(
            &p,
            Duration::new(0, 1),
            Duration::new(0, 1),
            TRACE_ID,
        );

        // Check if cwnd increase is smaller than a packet size (congestion
        // avoidance)
        assert!(cc.cwnd() < prev_cwnd + 1111);
    }

    #[test]
    fn reno_detect_simple_loss() {
        init();

        let mut cc = cc::new_congestion_control(cc::Algorithm::Reno);
        let prev_cwnd = cc.cwnd();

        // Send 20K bytes
        cc.on_packet_sent_cc(20000, TRACE_ID);

        cc.congestion_event(
            std::time::Instant::now(),
            std::time::Instant::now(),
            TRACE_ID,
        );

        // In Reno, after congestion event, cwnd will be cut by half
        assert_eq!(prev_cwnd / 2, cc.cwnd());

        let p = Sent {
            pkt_num: 0,
            frames: vec![],
            time: std::time::Instant::now(),
            size: 5000,
            ack_eliciting: true,
            in_flight: true,
        };

        // Ack 5000 bytes
        // We give min_rtt = 1sec to trigger undoing cwnd
        cc.on_packet_acked_cc(
            &p,
            Duration::new(1, 1),
            Duration::new(1, 0),
            TRACE_ID,
        );

        // Check if we are still in slow start after undoing cwnd
        assert_eq!(cc.cwnd(), prev_cwnd + 5000);
    }
}
