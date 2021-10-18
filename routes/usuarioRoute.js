import express from "express";
import usuarioModel from "../model/usuarioSchema.js";
// import { getUsuario, addUsuario } from "../controller/usuarioController.js";

const router = express.Router();

router.post('/add', async(req, resp) => {
    const post = new usuarioModel(req.body);
    post.save((err) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true});
    })

    // try {
    //     await post.save();
    //     resp.json(post)
    // } catch (error) {
    //     resp.json({message: error.message})
        
    // }
});


router.get("/", (req, resp) => {
    usuarioModel.find().exec((err, usuarios) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true, usuarios: usuarios});
    })

})


//Modern
// router.get("/", async(req, resp) => {
//     // resp.status(200).json("HH");
//     try {
//         let usuario = await usuarioModel.find();
//         resp.json(usuario)
//     } catch (error) {
//         resp.json({message: error.message})
        
//     }
// })


/* ACTUALIZAR */
router.put('/update/:id', async(req,res) => {

    usuarioModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, usuario) => {
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )

    /* Ej: permitir solo actualizar la descripcion, no el titulo de la tarea */
    //1. Obtener los datos desde el cliente
    // const{estado} = req.body;

    // //2. Crear nueva tarea
    // const nuevosDatos = {estado};

    // //mustra el parametro id que se le esta pasando desde el cliente
    // console.log(req.params.id);
    
    // //3. findByIdAndUpdate: recibe el id de lo que deseo actualizar, luego le paso los datos que deseo actualizar
    // await usuarioModel.findByIdAndUpdate(req.params.id, nuevosDatos);
    // res.json({status: 'usuario Actualizada'});

});


/* ELIMINAR */
router.delete('/delete/:id', async(req,res) => {
    await usuarioModel.findByIdAndRemove(req.params.id);
    res.json({status: 'usuario Eliminada'});
});



export default router;