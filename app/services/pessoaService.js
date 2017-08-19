const pessoa = require('../models/pessoa')
const _ = require('lodash')

pessoa.methods(['get', 'post', 'put', 'delete'])
pessoa.updateOptions({ new: true, runValidators: true })

pessoa.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

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