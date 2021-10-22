import express from "express";
import Post from "../model/Post.js";
import jwt  from "jsonwebtoken";

const router = express.Router();


router.post('/', async (req, res) => {

    const usuario = await Post.findOne({
        correo: req.body.correo,
        pass: req.body.pass
    })

    if(usuario){
        const token = jwt.sign(
            {
            correo: req.body.correo,
            }, 
            'secret123'
        )
        return res.json({status: 'ok', usuario: token});

    }else{
        return res.json({status: 'error', usuario: false});

    }
})


router.get('/main', async (req, res) => {

    const token = req.headers['x-access-token']

    try{

        const decoded = jwt.verify(token, 'secret123')
        const correo = decoded.correo
        const usuario = await Post.findOne({correo: correo})

        return {status: 'ok', mainer: usuario.nombre}
        
    }catch(error){
        console.log(error);
        res.json({status: 'error', error: 'token invalido'})

    }

})


router.post('/add', (req, resp) => {
    const post = new Post(req.body);
    post.save((err) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true});
    })
});


router.get("/usuario", (req, resp) => {
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


export default router;