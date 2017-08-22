const express   = require('express');
var app         = express(); 
const bodyParser= require('body-parser');
const allowCors = require('./cors')

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({limit: '5mb'}));
app.use(allowCors);
 
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080; 
 
app.listen(server_port, function(){
 console.log( "Listening  port " + server_port )
});

module.exports = app