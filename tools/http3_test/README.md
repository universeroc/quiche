This crate provides an API to build httpbin test requests and expected outcomes.
These can be used with the quiche HTTP/3 module to communicate with an httpbin
test server.

Building
--------

```bash
 $ cargo build
```

Running
--------
We use cargo test to execute different httpbin tests. By default this points to
https://cloudflare-quic.com/b

```bash
 $ cargo test
```

Environment Variable Overrides
------------------------------

A set of environment variables allow tuning of test beheviour:

* HTTPBIN_ENDPOINT - httpbin server URL, the authority is used in SNI.
                     Default value is https://cloudflare-quic.com/b

* HTTPBIN_HOST     - httpbin server IP address and port (<SERVER>:<PORT>).
                     Overrides the effective target authority defined in
                     HTTPBIN_ENDPOINT. Default value does not override.

* VERIFY_PEER      - boolean value ("true" or "false") that controls if
                     the test client attempts to validate the httpbin
                     server certificate. Default value is true.

* IDLE_TIMEOUT     - client's idle timeout in integer milliseconds.
                     Default value is 60000 (60 seconds).

* EXTRA_HEADERS    - additional request headers in JSON format.
                     Currently used by `headers` test only.

* EXPECT_REQ_HEADERS - expected request header/value pairs in JSON format.
                       Currently used by `headers` test only.

For example, to test a non-default server, use the HTTPBIN_ENDPOINT environment
variable

```bash
 $ HTTPBIN_ENDPOINT=https://<some_other_endpoint> cargo test
```
