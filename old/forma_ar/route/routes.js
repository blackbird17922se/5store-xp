import express from "express";
import { getUsuario, addUsuario } from "../controller/usuarioController.js";

const route = express.Router();

route.get('/', getUsuario)
route.post('/add', addUsuario)

export default route;