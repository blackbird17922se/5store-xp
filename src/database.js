/* Conexion a database */

const mongoCon = require('mongoose');

const URI = 'mongodb://localhost/five-store';

mongoCon.connect(URI)
    .then(db => console.log("conctada monda"))
    .catch(err => console.log("pailaa mondaaaaa"));

module.exports = mongoCon;