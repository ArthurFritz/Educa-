var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    login: String,
    senha: String,
    createAt: { type: Date, default: Date.now },
    administrador : {type: Boolean, default: false},
    pessoa: {type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa'}
});
 
module.exports = mongoose.model('Usuario', UsuarioSchema);