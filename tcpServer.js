
var net=require("net");

var server=net.createServer();

server.on( "connection" , connexion) ;
server.on( "listening" , demarrage) ;

function demarrage(socket) {
	console.log("started");
}

function connexion(socket) {
	console.log("connected from "+socket.remoteAddress);
	socket.write("hello "+socket.remoteAddress+"\n");
	socket.end();
	}

server.listen(3232);

