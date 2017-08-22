const express   = require('express');
var app         = express(); 
const bodyParser= require('body-parser');
const allowCors = require('./cors')

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({limit: '5mb'}));
app.use(allowCors);
 
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000; 
var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; 
 
app.listen(server_ip_address, server_port, function(){
 console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

module.exports = app