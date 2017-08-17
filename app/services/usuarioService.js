const usuario = require('../models/usuario')
const _ = require('lodash')

usuario.methods(['get', 'post', 'put', 'delete'])
usuario.updateOptions({ new: true, runValidators: true })

usuario.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

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

usuario.route('count', function(req, res, next) {
  usuario.count({ login: req.headers['login']}, function(error, value) {
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({ value })
    }
  })
})

usuario.route('getByUser', function(req, res, next) {
  var query = usuario.find({ login: req.headers['login'] }).select()
  query.exec(function (error, value){
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(value)
    }
  })
})

module.exports = usuario