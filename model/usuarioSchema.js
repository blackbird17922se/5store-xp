/* una vez hecha la coneccion en database */
import mongoose from 'mongoose';
// const monda = require();

/* requerir el esquemaa
permitira definir el esquema de los datos igual a la mondaaaa*/
// const {Schema} = monda;

const  usuarioSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    estado: {type: Boolean, required: true},
    rol: {type: String, required: true}
});

/* esto permitira reulilizar el esquema dendro  de la aplicacion */
/* nombre modelo */
const usuarioModel = mongoose.model('usuarios', usuarioSchema);
export default usuarioModel;