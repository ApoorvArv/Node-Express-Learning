var express = require('express');
var app = express();

var http = require('http');

var PORT = 5000;

//middle ware for loggin of requests
app.use(function(request, response, next){
	console.log('request from '+ request.method +' '+ request.url);
	next(); //next to start next middleware
});

// middle ware for request handling and responding with Hello world!
app.use(function(request, response){
	response.writeHead({'Content-Type':'text/plain'}); // write head is used to write head of response
	response.end('Hello world!');
});

//Starting server with node's core http module.
http.createServer(app).listen(PORT, function(){
	console.log('listening on port '+PORT);
});