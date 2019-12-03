initSidebarItems({"constant":[["MAX_CONN_ID_LEN","The maximum length of a connection ID."],["MIN_CLIENT_INITIAL_LEN","The minimum length of Initial packets sent by a client."],["PROTOCOL_VERSION","The current QUIC wire version."]],"enum":[["Error","A QUIC error."],["Shutdown","The stream's side to shutdown."],["Type","QUIC packet type."]],"fn":[["accept","Creates a new server-side connection."],["connect","Creates a new client-side connection."],["negotiate_version","Writes a version negotiation packet."],["retry","Writes a stateless retry packet."],["version_is_supported","Returns true if the given protocol version is supported."]],"mod":[["h3","HTTP/3 wire protocol and QPACK implementation."]],"struct":[["Config","Stores configuration shared between multiple connections."],["Connection","A QUIC connection."],["Header","A QUIC packet's header."],["Stats","Statistics about the connection."],["StreamIter","An iterator over QUIC streams."]],"type":[["Result","A specialized [`Result`] type for quiche operations."]]});