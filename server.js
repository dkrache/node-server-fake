var path = require('path');
var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

require('./module/webServices.js').services(app);

var server = http.createServer(app);
server.listen(5000);
console.log("server listen on port 5000");
