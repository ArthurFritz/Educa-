const restful = require('node-restful')
const mongoose = restful.mongoose

var AvaliacaoSchema = new mongoose.Schema({
    nome: {type:String, required:true},
    valor:{type:Number, required:true} ,
    fator: Number,
    curso: {type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true},
    tipo: {type: String, required: true, uppercase:true, enum: ["TRAB", "AVAL"]},
    createAt: { type: Date, default: Date.now }
});
 
module.exports = restful.model('Avaliacao', AvaliacaoSchema);