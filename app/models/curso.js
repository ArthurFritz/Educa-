var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var CursoSchema = new Schema({
    nome: String,
    referencia: String,
    horas: Number,
    media: Number,
    frequencia: Number,
    inicio: Date,
    alunos: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa' }
    ],
    diasAula: [{type:Date}],
    createAt: { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('Curso', CursoSchema);