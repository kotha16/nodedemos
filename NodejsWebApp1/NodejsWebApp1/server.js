
var http = require('http');
//var _ = require('underscore');

var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

var express = require("express");
var app = express();
app.set("view engine", "vash");
app.get("/", function (req, res) {
    //res.send("<html><head></head><body><h1>Express</h1></body></html>");
    res.render("index", { title: 'express' });
});

var server = http.createServer(app);
server.listen(port);