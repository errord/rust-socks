var searchIndex = {};
searchIndex['socks'] = {"items":[[0,"","socks","SOCKS proxy clients",null,null],[3,"Socks4Stream","","A SOCKS4 client.",null,null],[3,"Socks4Listener","","A SOCKS4 BIND client.",null,null],[3,"Socks5Stream","","A SOCKS5 client.",null,null],[3,"Socks5Listener","","A SOCKS5 BIND client.",null,null],[3,"Socks5Datagram","","A SOCKS5 UDP client.",null,null],[4,"TargetAddr","","A description of a connection target.",null,null],[13,"Ip","","Connect to an IP address.",0,null],[13,"Domain","","Connect to a fully qualified domain name.",0,null],[11,"fmt","","",1,{"inputs":[{"name":"socks4stream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"connect","","Connects to a target server through a SOCKS4 proxy.",1,{"inputs":[{"name":"socks4stream"},{"name":"t"},{"name":"u"},{"name":"str"}],"output":{"name":"result"}}],[11,"proxy_addr","","Returns the proxy-side address of the connection between the proxy and\ntarget server.",1,{"inputs":[{"name":"socks4stream"}],"output":{"name":"socketaddrv4"}}],[11,"get_ref","","Returns a shared reference to the inner `TcpStream`.",1,{"inputs":[{"name":"socks4stream"}],"output":{"name":"tcpstream"}}],[11,"get_mut","","Returns a mutable reference to the inner `TcpStream`.",1,{"inputs":[{"name":"socks4stream"}],"output":{"name":"tcpstream"}}],[11,"into_inner","","Consumes the `Socks4Stream`, returning the inner `TcpStream`.",1,{"inputs":[{"name":"socks4stream"}],"output":{"name":"tcpstream"}}],[11,"read","","",1,null],[11,"write","","",1,null],[11,"flush","","",1,{"inputs":[{"name":"socks4stream"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"socks4listener"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Initiates a BIND request to the specified proxy.",2,{"inputs":[{"name":"socks4listener"},{"name":"t"},{"name":"u"},{"name":"str"}],"output":{"name":"result"}}],[11,"proxy_addr","","The address of the proxy-side TCP listener.",2,{"inputs":[{"name":"socks4listener"}],"output":{"name":"result"}}],[11,"accept","","Waits for the remote process to connect to the proxy server.",2,{"inputs":[{"name":"socks4listener"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"socks5stream"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"connect","","Connects to a target server through a SOCKS5 proxy.",3,{"inputs":[{"name":"socks5stream"},{"name":"t"},{"name":"u"}],"output":{"name":"result"}}],[11,"proxy_addr","","Returns the proxy-side address of the connection between the proxy and\ntarget server.",3,{"inputs":[{"name":"socks5stream"}],"output":{"name":"socketaddr"}}],[11,"get_ref","","Returns a shared reference to the inner `TcpStream`.",3,{"inputs":[{"name":"socks5stream"}],"output":{"name":"tcpstream"}}],[11,"get_mut","","Returns a mutable reference to the inner `TcpStream`.",3,{"inputs":[{"name":"socks5stream"}],"output":{"name":"tcpstream"}}],[11,"into_inner","","Consumes the `Socks4Stream`, returning the inner `TcpStream`.",3,{"inputs":[{"name":"socks5stream"}],"output":{"name":"tcpstream"}}],[11,"read","","",3,null],[11,"write","","",3,null],[11,"flush","","",3,{"inputs":[{"name":"socks5stream"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"socks5listener"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Initiates a BIND request to the specified proxy.",4,{"inputs":[{"name":"socks5listener"},{"name":"t"},{"name":"u"}],"output":{"name":"result"}}],[11,"proxy_addr","","The address of the proxy-side TCP listener.",4,{"inputs":[{"name":"socks5listener"}],"output":{"name":"socketaddr"}}],[11,"accept","","Waits for the remote process to connect to the proxy server.",4,{"inputs":[{"name":"socks5listener"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"socks5datagram"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Creates a UDP socket bound to the specified address which will have its\ntraffic routed through the specified proxy.",5,{"inputs":[{"name":"socks5datagram"},{"name":"t"},{"name":"u"}],"output":{"name":"result"}}],[11,"send_to","","Like `UdpSocket::send_to`.",5,null],[11,"recv_from","","Like `UdpSocket::recv_from`.",5,null],[11,"proxy_addr","","Returns the address of the proxy-side UDP socket through which all\nmessages will be routed.",5,{"inputs":[{"name":"socks5datagram"}],"output":{"name":"socketaddr"}}],[11,"get_ref","","Returns a shared reference to the inner socket.",5,{"inputs":[{"name":"socks5datagram"}],"output":{"name":"udpsocket"}}],[11,"get_mut","","Returns a mutable reference to the inner socket.",5,{"inputs":[{"name":"socks5datagram"}],"output":{"name":"udpsocket"}}],[8,"ToTargetAddr","","A trait for objects that can be converted to `TargetAddr`.",null,null],[10,"to_target_addr","","Converts the value of `self` to a a `TargetAddr`.",6,{"inputs":[{"name":"totargetaddr"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"targetaddr"}],"output":{"name":"targetaddr"}}],[11,"fmt","","",0,{"inputs":[{"name":"targetaddr"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_target_addr","","",0,{"inputs":[{"name":"targetaddr"}],"output":{"name":"result"}}],[11,"to_target_addr","std::net::addr","",7,{"inputs":[{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"to_target_addr","","",8,{"inputs":[{"name":"socketaddrv4"}],"output":{"name":"result"}}],[11,"to_target_addr","","",9,{"inputs":[{"name":"socketaddrv6"}],"output":{"name":"result"}}]],"paths":[[4,"TargetAddr"],[3,"Socks4Stream"],[3,"Socks4Listener"],[3,"Socks5Stream"],[3,"Socks5Listener"],[3,"Socks5Datagram"],[8,"ToTargetAddr"],[4,"SocketAddr"],[3,"SocketAddrV4"],[3,"SocketAddrV6"]]};
initSearch(searchIndex);
