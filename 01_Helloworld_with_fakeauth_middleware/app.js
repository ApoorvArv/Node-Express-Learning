var express = require('express');
var app = express();

var http = require('http');

var PORT = 5000;

app.use(function(request, response, next){
	console.log('Request from '+request.method+' '+ request.url);
	next();
});

app.use(function(request, response, next){
	var minutes = (new Date()).getMinutes();
	if(minutes % 2 == 0){
		next();
	}
	else{
		response.statusCode = 403;
		response.end('Unauthorized');
	}
});

app.use(function(request, response){
response.end('your secret is fitcat!');
});

http.createServer(app).listen(PORT, function(){
	console.log('listening on port '+ PORT);
});