/* una vez hecha la coneccion en database */
const mongo = require('mongoose');

/* requerir el esquemaa
permitira definir el esquema de los datos */
const {Schema} = mongo;

const  esqUsuario = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    correo: {type: String, required: true},
    estado: {type: Boolean, required: true},
    rol: {type: String, required: true}
});

/* esto permitira reulilizar el esquema dendro  de la aplicacion */
/* nombre modelo */
module.exports = mongo.model('esqUsuario', esqUsuario);