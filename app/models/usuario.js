const restful = require('node-restful')
const mongoose = restful.mongoose

var UsuarioSchema = new mongoose.Schema({
    login: {type:String, required:true},
    senha: {type:String, required:true},
    createAt: { type: Date, default: Date.now },
    administrador : {type: Boolean, default: false},
    pessoa: {type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa'}
});
 
module.exports = restful.model('Usuario', UsuarioSchema);