const express = require('express');

module.exports = function (app) {

 /*
  * Protected routes by JWT token
  */
  const api = express.Router();
  app.use('/api/v1', api);

  
}