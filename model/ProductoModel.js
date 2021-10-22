/**
 * Proyecto: 5Store
 * Producto.js
 * Mauricio Alarcon
**/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const  productoSchema = new Schema(
    {
        descrip: {type: String, required: true},
        valUnit: {type: String, required: true},
        estado: {type: String, required: true}
    }
)

//TODO: ESTE POST PODRIA SER EL NOMBRE DE LA BD EN MONDABD??
const ProductoModel = mongoose.model('productomodel', productoSchema);
export default ProductoModel;
