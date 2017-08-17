const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://developer:developer10@educamais-shard-00-00-umxyo.mongodb.net:27017,educamais-shard-00-01-umxyo.mongodb.net:27017,educamais-shard-00-02-umxyo.mongodb.net:27017/educamais?ssl=true&replicaSet=EducaMais-shard-0&authSource=admin')

mongoose.Error.messages.general.required = "Field '{PATH}' is mandatory."
mongoose.Error.messages.Number.max = "Value '{VALUE}' is greater than maximum allowed ({MAX})."
mongoose.Error.messages.Number.min = "Value '{VALUE}' is smaller than minimum allowed ({MIN})."
mongoose.Error.messages.String.enum = "'{VALUE}' is not a valid {PATH}"