import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import route from './route/routes.js'


const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/usuario', route);

const PORT = 3000;
const URL = 'mongodb://mintic:MinTic2021@clustermau-shard-00-00.t6imf.mongodb.net:27017,clustermau-shard-00-01.t6imf.mongodb.net:27017,clustermau-shard-00-02.t6imf.mongodb.net:27017/5storeapp?ssl=true&replicaSet=atlas-8snwti-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server 2007 is running in port ${PORT}, Microsoft!!`);
    })
}).catch(err => {
    console.log("pailaa mondaaaaa", err.message);
});