const restful = require('node-restful')
const mongoose = restful.mongoose
 
var CursoSchema = new mongoose.Schema({
    nome: {type:String, required:true},
    referencia: String,
    horas: Number,
    media: Number,
    frequencia: Number,
    inicio: {type:Date, required:true},
    alunos: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa' }
    ],
    diasAula: [{type:Date}],
    createAt: { type: Date, default: Date.now }
});
 
module.exports = restful.model('Curso', CursoSchema);