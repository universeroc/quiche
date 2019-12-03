var N=null,E="",T="t",U="u",searchIndex={};
var R=["option","config","result","usize","Config","Header","Connection","BufferTooShort","The provided buffer is too short.","quiche::h3","connection","streamiter","duration","try_from","try_into","borrow_mut","type_id","to_owned","clone_into","borrow","typeid","to_string","header","quiche","formatter","Shutdown","StreamIter"];
searchIndex["quiche"]={"doc":"🥧 Savoury implementation of the QUIC transport protocol…","i":[[3,R[4],R[23],"Stores configuration shared between multiple connections.",N,N],[3,R[6],E,"A QUIC connection.",N,N],[3,"Stats",E,"Statistics about the connection.",N,N],[12,"recv",E,"The number of QUIC packets received on this connection.",0,N],[12,"sent",E,"The number of QUIC packets sent on this connection.",0,N],[12,"lost",E,"The number of QUIC packets that were lost.",0,N],[12,"rtt",E,"The estimated round-trip time of the connection.",0,N],[12,"cwnd",E,"The size in bytes of the connection's congestion window.",0,N],[3,R[5],E,"A QUIC packet's header.",N,N],[12,"ty",E,"The type of the packet.",1,N],[12,"version",E,"The version of the packet.",1,N],[12,"dcid",E,"The destination connection ID of the packet.",1,N],[12,"scid",E,"The source connection ID of the packet.",1,N],[12,"odcid",E,"The original destination connection ID. Only present in…",1,N],[12,"token",E,"The address verification token of the packet. Only present…",1,N],[12,"versions",E,"The list of versions in the packet. Only present in…",1,N],[3,R[26],E,"An iterator over QUIC streams.",N,N],[4,"Error",E,"A QUIC error.",N,N],[13,"Done",E,"There is no more work to do.",2,N],[13,R[7],E,R[8],2,N],[13,"UnknownVersion",E,"The provided packet cannot be parsed because its version…",2,N],[13,"InvalidFrame",E,"The provided packet cannot be parsed because it contains…",2,N],[13,"InvalidPacket",E,"The provided packet cannot be parsed.",2,N],[13,"InvalidState",E,"The operation cannot be completed because the connection…",2,N],[13,"InvalidStreamState",E,"The operation cannot be completed because the stream is in…",2,N],[13,"InvalidTransportParam",E,"The peer's transport params cannot be parsed.",2,N],[13,"CryptoFail",E,"A cryptographic operation failed.",2,N],[13,"TlsFail",E,"The TLS handshake failed.",2,N],[13,"FlowControl",E,"The peer violated the local flow control limits.",2,N],[13,"StreamLimit",E,"The peer violated the local stream limits.",2,N],[13,"FinalSize",E,"The received data exceeds the stream's final size.",2,N],[4,R[25],E,"The stream's side to shutdown.",N,N],[13,"Read",E,"Stop receiving stream data.",3,N],[13,"Write",E,"Stop sending stream data.",3,N],[4,"Type",E,"QUIC packet type.",N,N],[13,"Initial",E,"Initial packet.",4,N],[13,"Retry",E,"Retry packet.",4,N],[13,"Handshake",E,"Handshake packet.",4,N],[13,"ZeroRTT",E,"0-RTT packet.",4,N],[13,"VersionNegotiation",E,"Version negotiation packet.",4,N],[13,"Short",E,"1-RTT short header packet.",4,N],[5,"accept",E,"Creates a new server-side connection.",N,[[[R[0]],[R[1]]],[[R[2],["pin"]],["pin",["box"]]]]],[5,"connect",E,"Creates a new client-side connection.",N,[[[R[0],["str"]],[R[1]],["str"]],[[R[2],["pin"]],["pin",["box"]]]]],[5,"negotiate_version",E,"Writes a version negotiation packet.",N,[[],[[R[2],[R[3]]],[R[3]]]]],[5,"retry",E,"Writes a stateless retry packet.",N,[[],[[R[2],[R[3]]],[R[3]]]]],[5,"version_is_supported",E,"Returns true if the given protocol version is supported.",N,[[["u32"]],["bool"]]],[0,"h3",E,"HTTP/3 wire protocol and QPACK implementation.",N,N],[3,R[4],R[9],"An HTTP/3 configuration.",N,N],[3,R[5],E,"A name-value pair representing a raw HTTP header.",N,N],[3,R[6],E,"An HTTP/3 connection.",N,N],[4,"Error",E,"An HTTP/3 error.",N,N],[13,"Done",E,"There is no error or no work to do",5,N],[13,R[7],E,R[8],5,N],[13,"GeneralProtocolError",E,"Peer violated protocol requirements in a way which doesn’t…",5,N],[13,"InternalError",E,"Internal error in the HTTP/3 stack.",5,N],[13,"RequestCancelled",E,"The client no longer needs the requested data.",5,N],[13,"RequestIncomplete",E,"The request stream terminated before completing the request.",5,N],[13,"ConnectError",E,"Forward connection failure for CONNECT target.",5,N],[13,"ExcessiveLoad",E,"Endpoint detected that the peer is exhibiting behavior…",5,N],[13,"VersionFallback",E,"Operation cannot be served over HTTP/3. Retry over HTTP/1.1.",5,N],[13,"IdError",E,"Stream ID or Push ID greater that current maximum was used…",5,N],[13,"StreamCreationError",E,"The endpoint detected that its peer created a stream that…",5,N],[13,"ClosedCriticalStream",E,"A required critical stream was closed.",5,N],[13,"EarlyResponse",E,"Inform client that remainder of request is not needed.…",5,N],[13,"MissingSettings",E,"No SETTINGS frame at beginning of control stream.",5,N],[13,"FrameUnexpected",E,"A frame was received which is not permitted in the current…",5,N],[13,"RequestRejected",E,"Server rejected request without performing any application…",5,N],[13,"SettingsError",E,"An endpoint detected an error in the payload of a SETTINGS…",5,N],[13,"FrameError",E,"Frame violated layout or size rules.",5,N],[13,"QpackDecompressionFailed",E,"QPACK Header block decompression failure.",5,N],[13,"QpackEncoderStreamError",E,"QPACK encoder stream error.",5,N],[13,"QpackDecoderStreamError",E,"QPACK decoder stream error.",5,N],[13,"TransportError",E,"Error originated from the transport layer.",5,N],[4,"Event",E,"An HTTP/3 connection event.",N,N],[13,"Headers",E,"Request/response headers were received.",6,N],[12,"list","quiche::h3::Event","The list of received header fields. The application should…",6,N],[12,"has_body",E,"Whether data will follow the headers on the stream.",6,N],[13,"Data",R[9],"Data was received.",6,N],[13,"Finished",E,"Stream was closed,",6,N],[6,"Result",E,"A specialized [`Result`] type for quiche HTTP/3 operations.",N,N],[17,"APPLICATION_PROTOCOL",E,"List of ALPN tokens of supported HTTP/3 versions.",N,N],[11,"new",E,"Creates a new configuration object with default settings.",7,[[],[[R[1]],[R[2],[R[1]]]]]],[11,"set_max_header_list_size",E,"Sets the `SETTINGS_MAX_HEADER_LIST_SIZE` setting.",7,[[["self"],["u64"]]]],[11,"set_qpack_max_table_capacity",E,"Sets the `SETTINGS_QPACK_MAX_TABLE_CAPACITY` setting.",7,[[["self"],["u64"]]]],[11,"set_qpack_blocked_streams",E,"Sets the `SETTINGS_QPACK_BLOCKED_STREAMS` setting.",7,[[["self"],["u64"]]]],[11,"new",E,"Creates a new header.",8,[[["str"]],[R[22]]]],[11,"name",E,"Returns the header's name.",8,[[["self"]],["str"]]],[11,"value",E,"Returns the header's value.",8,[[["self"]],["str"]]],[11,"with_transport",E,"Creates a new HTTP/3 connection using the provided QUIC…",9,[[[R[10]],[R[1]]],[[R[2],[R[10]]],[R[10]]]]],[11,"send_request",E,"Sends an HTTP/3 request.",9,[[["self"],[R[10]],["bool"]],[[R[2],["u64"]],["u64"]]]],[11,"send_response",E,"Sends an HTTP/3 response on the specified stream.",9,[[["self"],["bool"],[R[10]],["u64"]],[R[2]]]],[11,"send_body",E,"Sends an HTTP/3 body chunk on the given stream.",9,[[["self"],["bool"],[R[10]],["u64"]],[[R[2],[R[3]]],[R[3]]]]],[11,"recv_body",E,"Reads request or response body data into the provided…",9,[[["self"],[R[10]],["u64"]],[[R[2],[R[3]]],[R[3]]]]],[11,"poll",E,"Processes HTTP/3 data received from the peer.",9,[[["self"],[R[10]]],[R[2]]]],[11,"from_slice",R[23],"Parses a QUIC packet header from the given buffer.",1,[[[R[3]]],[[R[22]],[R[2],[R[22]]]]]],[6,"Result",E,"A specialized [`Result`] type for quiche operations.",N,N],[17,"PROTOCOL_VERSION",E,"The current QUIC wire version.",N,N],[17,"MAX_CONN_ID_LEN",E,"The maximum length of a connection ID.",N,N],[17,"MIN_CLIENT_INITIAL_LEN",E,"The minimum length of Initial packets sent by a client.",N,N],[11,"new",E,"Creates a config object with the given version.",10,[[["u32"]],[[R[1]],[R[2],[R[1]]]]]],[11,"load_cert_chain_from_pem_file",E,"Configures the given certificate chain.",10,[[["self"],["str"]],[R[2]]]],[11,"load_priv_key_from_pem_file",E,"Configures the given private key.",10,[[["self"],["str"]],[R[2]]]],[11,"verify_peer",E,"Configures whether to verify the peer's certificate.",10,[[["self"],["bool"]]]],[11,"grease",E,"Configures whether to send GREASE values.",10,[[["self"],["bool"]]]],[11,"log_keys",E,"Enables logging of secrets.",10,[[["self"]]]],[11,"enable_early_data",E,"Enables sending or receiving early data.",10,[[["self"]]]],[11,"set_application_protos",E,"Configures the list of supported application protocols.",10,[[["self"]],[R[2]]]],[11,"set_idle_timeout",E,"Sets the `idle_timeout` transport parameter.",10,[[["self"],["u64"]]]],[11,"set_max_packet_size",E,"Sets the `max_packet_size transport` parameter.",10,[[["self"],["u64"]]]],[11,"set_initial_max_data",E,"Sets the `initial_max_data` transport parameter.",10,[[["self"],["u64"]]]],[11,"set_initial_max_stream_data_bidi_local",E,"Sets the `initial_max_stream_data_bidi_local` transport…",10,[[["self"],["u64"]]]],[11,"set_initial_max_stream_data_bidi_remote",E,"Sets the `initial_max_stream_data_bidi_remote` transport…",10,[[["self"],["u64"]]]],[11,"set_initial_max_stream_data_uni",E,"Sets the `initial_max_stream_data_uni` transport parameter.",10,[[["self"],["u64"]]]],[11,"set_initial_max_streams_bidi",E,"Sets the `initial_max_streams_bidi` transport parameter.",10,[[["self"],["u64"]]]],[11,"set_initial_max_streams_uni",E,"Sets the `initial_max_streams_uni` transport parameter.",10,[[["self"],["u64"]]]],[11,"set_ack_delay_exponent",E,"Sets the `ack_delay_exponent` transport parameter.",10,[[["self"],["u64"]]]],[11,"set_max_ack_delay",E,"Sets the `max_ack_delay` transport parameter.",10,[[["self"],["u64"]]]],[11,"set_disable_active_migration",E,"Sets the `disable_active_migration` transport parameter.",10,[[["self"],["bool"]]]],[11,"recv",E,"Processes QUIC packets received from the peer.",11,[[["self"]],[[R[2],[R[3]]],[R[3]]]]],[11,"send",E,"Writes a single QUIC packet to be sent to the peer.",11,[[["self"]],[[R[2],[R[3]]],[R[3]]]]],[11,"stream_recv",E,"Reads contiguous data from a stream into the provided slice.",11,[[["self"],["u64"]],[R[2]]]],[11,"stream_send",E,"Writes data to a stream.",11,[[["self"],["u64"],["bool"]],[[R[2],[R[3]]],[R[3]]]]],[11,"stream_shutdown",E,"Shuts down reading or writing from/to the specified stream.",11,[[["self"],["shutdown"],["u64"]],[R[2]]]],[11,"stream_capacity",E,"Returns the stream's outgoing flow control capacity in…",11,[[["self"],["u64"]],[[R[2],[R[3]]],[R[3]]]]],[11,"stream_finished",E,"Returns true if all the data has been read from the…",11,[[["self"],["u64"]],["bool"]]],[11,"stream_init_application_data",E,"Initializes the stream's application data.",11,[[["self"],["u64"],[T]],[R[2]]]],[11,"stream_application_data",E,"Returns the stream's application data, if any was…",11,[[["self"],["u64"]],[[R[0],["any"]],["any"]]]],[11,"readable",E,"Returns an iterator over streams that have outstanding…",11,[[["self"]],[R[11]]]],[11,"writable",E,"Returns an iterator over streams that can be written to.",11,[[["self"]],[R[11]]]],[11,"timeout",E,"Returns the amount of time until the next timeout event.",11,[[["self"]],[[R[12]],[R[0],[R[12]]]]]],[11,"on_timeout",E,"Processes a timeout event.",11,[[["self"]]]],[11,"close",E,"Closes the connection with the given error and reason.",11,[[["self"],["u64"],["bool"]],[R[2]]]],[11,"trace_id",E,"Returns a string uniquely representing the connection.",11,[[["self"]],["str"]]],[11,"application_proto",E,"Returns the negotiated ALPN protocol.",11,[[["self"]]]],[11,"is_established",E,"Returns true if the connection handshake is complete.",11,[[["self"]],["bool"]]],[11,"is_resumed",E,"Returns true if the connection is resumed.",11,[[["self"]],["bool"]]],[11,"is_in_early_data",E,"Returns true if the connection has a pending handshake…",11,[[["self"]],["bool"]]],[11,"is_closed",E,"Returns true if the connection is closed.",11,[[["self"]],["bool"]]],[11,"stats",E,"Collects and returns statistics about the connection.",11,[[["self"]],["stats"]]],[11,"into",E,E,10,[[],[U]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[13],E,E,10,[[[U]],[R[2]]]],[11,R[14],E,E,10,[[],[R[2]]]],[11,R[15],E,E,10,[[["self"]],[T]]],[11,R[19],E,E,10,[[["self"]],[T]]],[11,R[16],E,E,10,[[["self"]],[R[20]]]],[11,"into",E,E,11,[[],[U]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[13],E,E,11,[[[U]],[R[2]]]],[11,R[14],E,E,11,[[],[R[2]]]],[11,R[15],E,E,11,[[["self"]],[T]]],[11,R[19],E,E,11,[[["self"]],[T]]],[11,R[16],E,E,11,[[["self"]],[R[20]]]],[11,R[17],E,E,0,[[["self"]],[T]]],[11,R[18],E,E,0,[[["self"],[T]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[13],E,E,0,[[[U]],[R[2]]]],[11,R[14],E,E,0,[[],[R[2]]]],[11,R[15],E,E,0,[[["self"]],[T]]],[11,R[19],E,E,0,[[["self"]],[T]]],[11,R[16],E,E,0,[[["self"]],[R[20]]]],[11,R[17],E,E,1,[[["self"]],[T]]],[11,R[18],E,E,1,[[["self"],[T]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[13],E,E,1,[[[U]],[R[2]]]],[11,R[14],E,E,1,[[],[R[2]]]],[11,R[15],E,E,1,[[["self"]],[T]]],[11,R[19],E,E,1,[[["self"]],[T]]],[11,R[16],E,E,1,[[["self"]],[R[20]]]],[11,"into",E,E,12,[[],[U]]],[11,"into_iter",E,E,12,[[],["i"]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[13],E,E,12,[[[U]],[R[2]]]],[11,R[14],E,E,12,[[],[R[2]]]],[11,R[15],E,E,12,[[["self"]],[T]]],[11,R[19],E,E,12,[[["self"]],[T]]],[11,R[16],E,E,12,[[["self"]],[R[20]]]],[11,R[17],E,E,2,[[["self"]],[T]]],[11,R[18],E,E,2,[[["self"],[T]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[21],E,E,2,[[["self"]],["string"]]],[11,R[13],E,E,2,[[[U]],[R[2]]]],[11,R[14],E,E,2,[[],[R[2]]]],[11,R[15],E,E,2,[[["self"]],[T]]],[11,R[19],E,E,2,[[["self"]],[T]]],[11,R[16],E,E,2,[[["self"]],[R[20]]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[13],E,E,3,[[[U]],[R[2]]]],[11,R[14],E,E,3,[[],[R[2]]]],[11,R[15],E,E,3,[[["self"]],[T]]],[11,R[19],E,E,3,[[["self"]],[T]]],[11,R[16],E,E,3,[[["self"]],[R[20]]]],[11,R[17],E,E,4,[[["self"]],[T]]],[11,R[18],E,E,4,[[["self"],[T]]]],[11,"into",E,E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[13],E,E,4,[[[U]],[R[2]]]],[11,R[14],E,E,4,[[],[R[2]]]],[11,R[15],E,E,4,[[["self"]],[T]]],[11,R[19],E,E,4,[[["self"]],[T]]],[11,R[16],E,E,4,[[["self"]],[R[20]]]],[11,"into",R[9],E,7,[[],[U]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[13],E,E,7,[[[U]],[R[2]]]],[11,R[14],E,E,7,[[],[R[2]]]],[11,R[15],E,E,7,[[["self"]],[T]]],[11,R[19],E,E,7,[[["self"]],[T]]],[11,R[16],E,E,7,[[["self"]],[R[20]]]],[11,R[17],E,E,8,[[["self"]],[T]]],[11,R[18],E,E,8,[[["self"],[T]]]],[11,"into",E,E,8,[[],[U]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[13],E,E,8,[[[U]],[R[2]]]],[11,R[14],E,E,8,[[],[R[2]]]],[11,R[15],E,E,8,[[["self"]],[T]]],[11,R[19],E,E,8,[[["self"]],[T]]],[11,R[16],E,E,8,[[["self"]],[R[20]]]],[11,"into",E,E,9,[[],[U]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[13],E,E,9,[[[U]],[R[2]]]],[11,R[14],E,E,9,[[],[R[2]]]],[11,R[15],E,E,9,[[["self"]],[T]]],[11,R[19],E,E,9,[[["self"]],[T]]],[11,R[16],E,E,9,[[["self"]],[R[20]]]],[11,R[17],E,E,5,[[["self"]],[T]]],[11,R[18],E,E,5,[[["self"],[T]]]],[11,"into",E,E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[21],E,E,5,[[["self"]],["string"]]],[11,R[13],E,E,5,[[[U]],[R[2]]]],[11,R[14],E,E,5,[[],[R[2]]]],[11,R[15],E,E,5,[[["self"]],[T]]],[11,R[19],E,E,5,[[["self"]],[T]]],[11,R[16],E,E,5,[[["self"]],[R[20]]]],[11,R[17],E,E,6,[[["self"]],[T]]],[11,R[18],E,E,6,[[["self"],[T]]]],[11,"into",E,E,6,[[],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[13],E,E,6,[[[U]],[R[2]]]],[11,R[14],E,E,6,[[],[R[2]]]],[11,R[15],E,E,6,[[["self"]],[T]]],[11,R[19],E,E,6,[[["self"]],[T]]],[11,R[16],E,E,6,[[["self"]],[R[20]]]],[11,"default",R[23],E,12,[[],[R[11]]]],[11,"len",E,E,12,[[["self"]],[R[3]]]],[11,"clone",E,E,2,[[["self"]],["error"]]],[11,"clone",E,E,0,[[["self"]],["stats"]]],[11,"clone",R[9],E,5,[[["self"]],["error"]]],[11,"clone",E,E,8,[[["self"]],[R[22]]]],[11,"clone",E,E,6,[[["self"]],["event"]]],[11,"clone",R[23],E,4,[[["self"]],["type"]]],[11,"clone",E,E,1,[[["self"]],[R[22]]]],[11,"eq",E,E,2,[[["self"],["error"]],["bool"]]],[11,"eq",R[9],E,5,[[["self"],["error"]],["bool"]]],[11,"ne",E,E,5,[[["self"],["error"]],["bool"]]],[11,"eq",E,E,8,[[["self"],[R[22]]],["bool"]]],[11,"ne",E,E,8,[[["self"],[R[22]]],["bool"]]],[11,"eq",E,E,6,[[["self"],["event"]],["bool"]]],[11,"ne",E,E,6,[[["self"],["event"]],["bool"]]],[11,"eq",R[23],E,4,[[["self"],["type"]],["bool"]]],[11,"eq",E,E,1,[[["self"],[R[22]]],["bool"]]],[11,"ne",E,E,1,[[["self"],[R[22]]],["bool"]]],[11,"from",R[9],E,5,[[["error"]],["self"]]],[11,"next",R[23],E,12,[[["self"]],[R[0]]]],[11,"fmt",E,E,2,[[["self"],[R[24]]],[R[2]]]],[11,"fmt",E,E,0,[[["self"],[R[24]]],[R[2]]]],[11,"fmt",R[9],E,5,[[["self"],[R[24]]],[R[2]]]],[11,"fmt",E,E,8,[[["self"],[R[24]]],[R[2]]]],[11,"fmt",E,E,6,[[["self"],[R[24]]],[R[2]]]],[11,"fmt",R[23],E,4,[[["self"],[R[24]]],[R[2]]]],[11,"fmt",E,E,1,[[["self"],[R[24]]],[R[2]]]],[11,"fmt",E,E,2,[[["self"],[R[24]]],[R[2]]]],[11,"fmt",R[9],E,5,[[["self"],[R[24]]],[R[2]]]],[11,"source",R[23],E,2,[[["self"]],[[R[0],["error"]],["error"]]]],[11,"source",R[9],E,5,[[["self"]],[[R[0],["error"]],["error"]]]]],"p":[[3,"Stats"],[3,R[5]],[4,"Error"],[4,R[25]],[4,"Type"],[4,"Error"],[4,"Event"],[3,R[4]],[3,R[5]],[3,R[6]],[3,R[4]],[3,R[6]],[3,R[26]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);