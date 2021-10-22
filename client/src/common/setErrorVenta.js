export const setErrorsVenta = (idProd,descrip,valUnit,estado,doClient,nomClient,cant,totalV,fecha) => {
    let errors ={};
    //descrip,valUnit,estado
    errors.idProd = idProd?"":"Error Interno. no lectira idProd"
    errors.descrip = descrip?"":"Error Interno. descrip es requerido"
    errors.valUnit = valUnit?"":"Error Interno. valUnit es requerido"
    errors.estado = estado?"":"estado es requerido"
    errors.doClient = doClient?"":"Documento del cliente es requerido"
    errors.nomClient = nomClient?"":"Nombre del cliente es requerido"

    if(cant==null || cant === 0){
        errors.cant = "Especifique una cantidad diferente a cero o vacia"
    }else{
        errors.cant = ""
    }
    
    errors.totalV = totalV?"":"Error Interno. totalV es requerido"
    errors.fecha = fecha?"":"Error Interno. fecha es requerido"

    return errors
}