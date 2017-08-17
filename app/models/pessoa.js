var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var PessoaSchema = new Schema({
    nome: String,
    email: String,
    nascimento: Date,
    observacao:String,
    instituicao: String,
    foto:String,
    createAt: { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('Pessoa', PessoaSchema);