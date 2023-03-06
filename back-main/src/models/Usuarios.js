//Libreria para hacer las consultas
const mongoose = require('mongoose');

//Se delcaran las variables y sus valores
const UsuariosSchema = mongoose.Schema({
    user: {
        type: Number,
        required: true
    },
    password: { 
       type: String,
        required: true
    }
})

module.exports = mongoose.model("Usuarios", UsuariosSchema);