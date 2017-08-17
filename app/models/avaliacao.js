var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var AvaliacaoSchema = new Schema({
    nome: String,
    valor: Number,
    fator: Number,
    curso: {type: mongoose.Schema.Types.ObjectId, ref: 'Curso'},
    tipo: {type: String, enum: ["Trabalho", "Avaliação"]},
    createAt: { type: Date, default: Date.now }
});
 
module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);