import usuarioModel from "../model/usuarioSchema.js";

export const getUsuario = async(req, resp) => {
    // resp.status(200).json("HH");
    try {
        let usuario = await usuarioModel.find();
        resp.json(usuario)
    } catch (error) {
        resp.json({message: error.message})
        
    }
}

export const addUsuario = async(req, resp) => {
    const usuario = req.body;
    const nuevoUsuario = new usuarioModel(usuario);
  
    try {
        await nuevoUsuario.save();
        resp.json(nuevoUsuario)
    } catch (error) {
        resp.json({message: error.message})
        
    }
}
