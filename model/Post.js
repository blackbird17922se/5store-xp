/* una vez hecha la coneccion en database */
import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* requerir el esquemaa
permitira definir el esquema de los datos igual a la mondaaaa*/
// const {Schema} = monda;

const  usuarioSchema = new Schema(
    {
        nombre: {type: String, required: true},
        correo: {type: String, required: true},
        pass: {type: String, required: true},
        estado: {type: Boolean, required: true},
        rol: {type: String, required: true}
    }
)


// const  usuarioSchema = mongoose.Schema({
//     nombre: {type: String, required: true},
//     correo: {type: String, required: true},
//     estado: {type: Boolean, required: true},
//     rol: {type: String, required: true}
// });



/* esto permitira reulilizar el esquema dendro  de la aplicacion */
/* nombre modelo */
//TODO: ESTE POST PODRIA SER EL NOMBRE DE LA BD EN MONDABD??
const Post = mongoose.model('posts', usuarioSchema);
export default Post;

// module.exports={
//     Post: mongoose.model("posts", usuarioSchema),
// };