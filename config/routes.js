const express = require('express');

module.exports = function (app) {

 /*
  * Protected routes by JWT token
  */
  const api = express.Router();
  app.use('/api/v1', api);

  //API Routes
  const usuarioService = require('../app/services/usuarioService')
  usuarioService.register(api, '/user')

  const pessoaService = require('../app/services/pessoaService')
  pessoaService.register(api, '/pessoa')

  const cursoService = require('../app/services/cursoService')
  cursoService.register(api, '/curso')

  api.get('/foto/:folder/:chave', function (req, res) {
    var folder = req.params.folder;
    var chave = req.params.chave;
    res.sendFile(folder + "/" + chave, { root : __dirname+"/../"} );
  });
  
}