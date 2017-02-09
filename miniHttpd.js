//var colors=require("colors");
var http=require("http");

var port=3333;
var server= http.createServer( function(request,response) { 
	response.setHeader("Content-type", "text/html");
	response.write("<h3>Hi</h3>");
	var d=new Date();
	response.write(d.toString());
	response.end();
	//console.log(colors.green("connected"));
	console.log("connected");
	console.log(d);
	} ) ;

server.listen(port);
//console.log(colors.red("started"));
console.log("started on "+port);

