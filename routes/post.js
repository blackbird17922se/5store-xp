// const router = require("express").Router();
import express from "express";
// const {Post} = require("../model/Post");

import Post from "../model/Post.js";

import Jwt  from "jsonwebtoken";

// posts

const router = express.Router();

// const esAutenticado = (req, res, next) =>{

// }

// router.get("/prot", async (req, resp) => {
//     return resp.json({msg: 'protttttt'});
// })

router.post('/auth', async (req, resp) => {
    const {correo, pass} = req.body.data;

    if(!correo || !pass){
        return resp.json({msg: 'credenciales invalidas'});
    }

    const usuario = await Post.findOne({correo: correo});

    if(usuario){
        if(usuario.pass === pass){
            const payload = {
                correo
            }
            Jwt.sign(payload, "secret", {expiresIn: "1d"}, (err, token) => {
                if(err) console.log(err);
                else{
                    resp.cookie("Jwt", token);
                    // window.location.href = '/producto';
                    console.log('funcionaa');
                    return resp.json({msg: 'logged', token: token});
                    
                }
            })

        }else{
            return resp.json({msg: 'contraseña invalida'});
        }
    }else{
        return resp.json({msg: 'credenciales invalidas'});
    }
})

router.post('/add', (req, resp) => {
    const post = new Post(req.body);
    post.save((err) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true});
    })
});


router.get("/", (req, resp) => {
    Post.find().exec((err, posts) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true, posts: posts});
    })

});


router.get("/detail/:id", (req, res) => {
    let id = req.params.id;

    Post.findById(id, function(err, post){
        if(err) return res.json({success:false, error: err});
        return res.json({success:true, post});

    })
})



/* ACTUALIZAR */
router.put('/update/:id', (req,res) => {

    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, post) => {
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )
});


/* ELIMINAR */
router.delete('/delete/:id', (req,res) => {
    Post.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if(err){
            res.send(err);
        }
        return res.json(deleteItem)
    })
});




// /* auth google */


// /* validar g autj */

// const validarGoogleAuth = (req, res = express, next) => {

//     let token = '';
//     token = req.headers['x-access-token'] || req.headers['authorization'];

//     if(!token){
//         return res.status(401).json({
//             ok: false,
//             msg: 'no token val'
//         });

//     }

//     if(token.startsWith('Bearer ')){
//         token = token.slice(7, token.lenth)
//     }

//     try{
//         console.log('token google: ', token);
//     }catch(error){
//         return res.status(401).json({
//             ok: false,
//             msg: 'no token val'
//         });


//     }

//     // next();
    
// }

// const googleLog = async (req, res) => {
//     res.json({
//         ok: true,
//         msg: "log"
//     })
// }
// router.post('/login', validarGoogleAuth, googleLog)

// module.exports = router;
export default router;