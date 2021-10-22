import express from "express";
import ProductoModel from "../model/ProductoModel.js";
import jwt  from "jsonwebtoken";

const Rproducto = express.Router();


Rproducto.get("/producto", (req, resp) => {
    ProductoModel.find().exec((err, productos) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true, productos: productos});
    })
});


Rproducto.post('/addProducto', (req, resp) => {
    const producto = new ProductoModel(req.body);
    producto.save((err) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true});
    })
});


Rproducto.get("/detailProd/:id", (req, res) => {
    let id = req.params.id;

    ProductoModel.findById(id, function(err, producto){
        if(err) return res.json({success:false, error: err});
        return res.json({success:true, producto});

    })
})


Rproducto.delete('/delete/:id', (req,res) => {
    ProductoModel.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if(err){
            res.send(err);
        }
        return res.json(deleteItem)
    })
});

/* ACTUALIZAR */
Rproducto.put('/updateProd/:id', (req,res) => {

    ProductoModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, producto) => {
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )
});

export default Rproducto;