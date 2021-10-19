// const router = require("express").Router();
import express from "express";
// const {Post} = require("../model/Post");

import Post from "../model/Post.js";

// posts

const router = express.Router();

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



// module.exports = router;
export default router;