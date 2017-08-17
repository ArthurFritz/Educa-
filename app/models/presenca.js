const restful = require('node-restful')
const mongoose = restful.mongoose
 
var PresencaSchema = new mongoose.Schema({
    curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required:true },
    data: {type:Date, required:true},
    presente: {type:Boolean, required:true},
    aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa', required:true }
});
 
module.exports = restful.model('Presenca', CursoSchema);