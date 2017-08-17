const restful = require('node-restful')
const mongoose = restful.mongoose
 
var PessoaSchema = new mongoose.Schema({
    nome: {type:String, required:true},
    email: String,
    nascimento: Date,
    observacao:String,
    instituicao: String,
    foto:String,
    createAt: { type: Date, default: Date.now }
});
 
module.exports = restful.model('Pessoa', PessoaSchema);