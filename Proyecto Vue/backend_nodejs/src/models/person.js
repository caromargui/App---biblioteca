const mongoose = require('mongoose');
const schema = mongoose.Schema;

var personSchema = new schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    email: {
        type: String
    },
    contraseña:{
        type: String
    }
},{
    collection: 'personas'
});

module.exports = mongoose.model('Persona', personSchema);