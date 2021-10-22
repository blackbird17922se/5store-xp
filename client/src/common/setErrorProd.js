export const setErrorsProd = (descrip,valUnit,estado) => {
    let errors ={};
    //descrip,valUnit,estado  setErrorsProd
    errors.descrip = descrip?"":"descrip es requerido"
    errors.valUnit = valUnit?"":"valUnit es requerido"
    errors.estado = estado?"":"estado es requerido"

    return errors
}

