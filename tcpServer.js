
var net=require("net");

var server=net.createServer();

server.on( "connection" , conn) ;
server.on( "listening" , startt) ;

function startt(socket) {
	console.log("started");
}

function conn(socket) {
	console.log("connected from "+socket.remoteAddress);
	socket.write("hello "+socket.remoteAddress+"\n");
	socket.end();
	}

server.listen(3232);

