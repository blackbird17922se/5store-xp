import express from "express";

const validarGoogleAuth = (req, res = express, next) => {

    let token = '';
    token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'no token val'
        });

    }

    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.lenth)
    }

    try{
        console.log('token google: ', token);
    }catch(error){
        return res.status(401).json({
            ok: false,
            msg: 'no token val'
        });


    }

    next();
    
}