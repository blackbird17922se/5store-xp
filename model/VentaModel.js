/**
 * Proyecto: 5Store
 * VentaModel.js
 * Mauricio Alarcon
**/

import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const ventaSchema = new Schema(
    {
        idProd: {type: String, required: true},
        descrip: {type: String, required: true},
        cant: {type: Number, required: true},
        valUnit: {type: Number, required: true},
        totalV: {type: Number, required: true},
        fecha: {type: String, required: true},
        doClient: {type: String, required: true},
        nomClient: {type: String, required: true},
        estado: {type: String, required: true}
        
    }
)

//TODO: ESTE POST PODRIA SER EL NOMBRE DE LA BD EN MONDABD??
const VentaModel = mongoose.model('Ventamodel', ventaSchema);
export default VentaModel;
