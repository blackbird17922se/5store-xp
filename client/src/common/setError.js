export const setErrors = (nombre,correo,estado,rol) => {
    let errors ={};
    errors.nombre = nombre?"":"Nombre es requerido"
    errors.correo = correo?"":"correo es requerido"
    errors.rol = rol?"":"rol es requerido"
    errors.estado = estado?"":"estado es requerido"
    return errors
}