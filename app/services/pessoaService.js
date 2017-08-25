const pessoaModel = require('../models/pessoa')
const usuario = require('../models/usuario')
const _ = require('lodash')

pessoaModel.methods(['get', 'post', 'put', 'delete'])
pessoaModel.updateOptions({ new: true, runValidators: true })

pessoaModel.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function traitUploadFoto(req,res,next) {
  var base64Data = req.body.foto;
  if(base64Data && base64Data !=""){
    var uuidv4 = require('uuid/v4');
    var fs = require('fs');
    var folder = 'aluno';
    if (!fs.existsSync(folder)){
      fs.mkdirSync(folder);
    }
    var filename = folder + '/'+ new Date().getTime() +"_" + uuidv4() + '.jpg'
    fs.writeFile(filename, base64Data, 'base64', function(err) {
      console.log(err);
    });
    req.body.foto = filename;
  }
  next();
}

pessoaModel.before('post',function(req,res,next){
  traitUploadFoto(req,res,next);
});

pessoaModel.before('put',function(req,res,next){
  traitUploadFoto(req,res,next);
});

pessoaModel.route('professor.get', function(req, res, next) {
  var query = usuario.find({pessoa:{$ne:null}}).populate("pessoa").select()
  query.exec(function (error, value){
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(value)
    }
  })
})

pessoaModel.route('alunos.get', function(req, res, next) {
  usuario.find({pessoa:{$ne:null}}).select('pessoa').exec(
    function(err, professores){
      professores = professores.map(function(prof){return prof.pessoa});
      var query = pessoaModel.find({ _id: { $nin: professores } }).sort( { nome: 1 } ).select()
      query.exec(function (error, value){
        if (error) {
          res.status(500).json({errors: [error]})
        } else {
          res.json(value)
        }
      });
    }
  );
})

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

module.exports = pessoaModel