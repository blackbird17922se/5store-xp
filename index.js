/* 1. Requerir a express y guaradrlo en una constante */
// const express = require('express')
import express from "express";
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import router from './routes/post.js';
import Rproducto from './routes/Rproducto.js';
import Rventa from './routes/Rventa.js';

import keys from "./config/keys.js";
import path from "path/posix";

import cors from 'cors';
// const bodyparser = require("body-parser");
// const router = require('./routes/post.js')

// const URL = 'mongodb://mintic:MinTic2021@clustermau-shard-00-00.t6imf.mongodb.net:27017,clustermau-shard-00-01.t6imf.mongodb.net:27017,clustermau-shard-00-02.t6imf.mongodb.net:27017/5storeapp?ssl=true&replicaSet=atlas-8snwti-shard-0&authSource=admin&retryWrites=true&w=majority';
// const URL = 'mongodb://mintic:MinTic2021@clustermau-shard-00-00.t6imf.mongodb.net:27017,clustermau-shard-00-01.t6imf.mongodb.net:27017,clustermau-shard-00-02.t6imf.mongodb.net:27017/5storeapp?ssl=true&replicaSet=atlas-8snwti-shard-0&authSource=admin&retryWrites=true&w=majority';
// mongoose.connect(URL);
mongoose.connect(keys.mongo_uri)

/* 2. cuando lo invoque entonces me retorna un objeto express que lo guadare en : */
const appExpress = express();

appExpress.use(bodyparser.json());
appExpress.use(cors());

/* puede ir usuario */
appExpress.use('/posts', router);
appExpress.use('/Rproducto', Rproducto);
appExpress.use('/Rventa', Rventa);

if(process.env.NODE_ENV === "production"){
    appExpress.use(express.static("client/build"));
    // const pth = path;
    appExpress.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

appExpress.get("/", (req, resp) => {
    resp.send({Proyecto: "5store"})
})

const PORT = process.env.PORT || 5000;
appExpress.listen(PORT);