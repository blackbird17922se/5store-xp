import express from "express";
import VentaModel from "../model/VentaModel.js";
import jwt  from "jsonwebtoken";

const RVenta = express.Router();


RVenta.get("/venta", (req, resp) => {
    VentaModel.find().exec((err, ventas) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true, ventas: ventas});
    })
});


RVenta.post('/addVenta', (req, resp) => {
    const venta = new VentaModel(req.body);
    venta.save((err) => {
        if(err) return resp.status(400).json({success:false, err});
        return resp.status(200).json({success:true});
    })
});


RVenta.get("/detailVenta/:id", (req, res) => {
    let id = req.params.id;

    VentaModel.findById(id, function(err, venta){
        if(err) return res.json({success:false, error: err});
        return res.json({success:true, venta});

    })
})


RVenta.delete('/delete/:id', (req,res) => {
    VentaModel.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if(err){
            res.send(err);
        }
        return res.json(deleteItem)
    })
});

/* ACTUALIZAR */
RVenta.put('/updateVenta/:id', (req,res) => {

    VentaModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, venta) => {
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )
});

export default RVenta;