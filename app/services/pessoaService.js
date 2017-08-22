const pessoa = require('../models/pessoa')
const _ = require('lodash')

pessoa.methods(['get', 'post', 'put', 'delete'])
pessoa.updateOptions({ new: true, runValidators: true })

pessoa.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function traitUploadFoto(req,res,next) {
  var base64Data = req.body.foto;
  if(base64Data && base64Data !=""){
    var uuidv4 = require('uuid/v4');
    var filename = 'aluno/'+ new Date().getTime() +"_" + uuidv4() + '.jpg'
    require("fs").writeFile(filename, base64Data, 'base64', function(err) {
      console.log(err);
    });
    req.body.foto = filename;
  }
  next();
}

pessoa.before('post',function(req,res,next){
  traitUploadFoto(req,res,next);
});

pessoa.before('put',function(req,res,next){
  traitUploadFoto(req,res,next);
});


function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle
  if (bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

module.exports = pessoa