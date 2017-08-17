var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var PresencaSchema = new Schema({
    curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
    data: Date,
    presente: Boolean,
    aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa' }
});
 
module.exports = mongoose.model('Presenca', CursoSchema);