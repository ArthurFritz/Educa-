const express   = require('express');
var app         = express(); 
const bodyParser= require('body-parser');
const allowCors = require('./cors')

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({limit: '5mb'}));
app.use(allowCors);
 
var port = process.env.PORT || 8000; 
 
app.listen(port, function(){
	console.log('Iniciando a aplicação na porta ' + port);
});

module.exports = app