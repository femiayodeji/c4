var fs = require("fs");

var express = require('express');

body_parser = require('body-parser'),
app = express().use(body_parser.json()); // creates express http server

var cors = require('cors');
server =  require('http').createServer(app);
server.listen(process.env.PORT || 4000);

var host = server.address().address;
var port = server.address().port;


app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

console.log("connected and listening at http://localhost:%s", port); 