const restful = require('node-restful')
const mongoose = restful.mongoose

var CursoSchema = new mongoose.Schema({
    nome: {type:String, required:true},
    referencia: String,
    inicio: {type:Date, required:true}
});

module.exports = restful.model('Curso', CursoSchema);