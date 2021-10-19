/* Define las operaciones a traves de las url */
/* invoco express para usar rutas */
// const { response } = require('express');
const express = require('express');
const usuarioRutas = express.Router();

/* requerir el esquema */
const usuarioModelo = require('../models/usuario')

/* una ruta para cuando llegue a la parte inicial del servidor (/)
repondera con un hola mundo 
response, require*/
usuarioRutas.get('/', async (req, res) => {
    // res.send('Holaaaaa')
    // responder un son

    /* consultar bd 
   //Nueva manera a travez de async away
   /* lo que hace es consultar la bd (usuarioModelo.find()) una vez termine
   entonces losmete en esa constante*/
    //una vez que se conecte entonces  monstrar datso
    const usuarios = await usuarioModelo.find();
    console.log(usuarios);
    res.json(usuarios);
});


/* OBTENER UNICO REGISTRO */
usuarioRutas.get('/:id', async (req, res) => {

    const tareaX = await usuarioModelo.findById(req.params.id);
    res.json(tareaX);
});



/* INSTERTAR */
/* recibir los datos que recibe desd el navegador */
usuarioRutas.post('/', async (req, res) => {
    /* express le proveee a usuarioRutas metodos como body
    el navegador enviara datos y los recibira a travez de req.body */
    console.log(req.body);

    // Ceo un modelo de datos, y recibira desde req.body el tit y la descr
    const{titulo, descrip} = req.body;

    //esto crea un nuevo objeto de tarea
    const tarea = new usuarioModelo({titulo, descrip});

    //guardar el dato
    await tarea.save();

    console.log(tarea);


    res.json({status: 'Tarea Guardada'});

});


/* ACTUALIZAR */
usuarioRutas.put('/:id', async(req,res) => {

    /* Ej: permitir solo actualizar la descripcion, no el titulo de la tarea */
    //1. Obtener los datos desde el cliente
    const{descrip} = req.body;

    //2. Crear nueva tarea
    const nuevosDatos = {descrip};

    //mustra el parametro id que se le esta pasando desde el cliente
    console.log(req.params.id);
    
    //3. findByIdAndUpdate: recibe el id de lo que deseo actualizar, luego le paso los datos que deseo actualizar
    await usuarioModelo.findByIdAndUpdate(req.params.id, nuevosDatos);
    res.json({status: 'Tarea Actualizada'});

});


/* ELIMINAR */
usuarioRutas.delete('/:id', async(req,res) => {
    await usuarioModelo.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea Eliminada'});
});

/* expoto */
module.exports = usuarioRutas;