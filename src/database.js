/* Conexion a database */

const mongo = require('mongoose');

const URI = 'mongodb://localhost/five-store';

mongo.connect(URI)
    .then(db => console.log("conctada monda"))
    .catch(err => console.log("pailaa mondaaaaa"));

module.exports = mongo;