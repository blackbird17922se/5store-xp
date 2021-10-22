import React, { Component } from 'react'
import Toolbar from '../../layout/toolbar';
import Axios from 'axios';
import { setErrorsProd } from '../../../common/setErrorProd';

export default class CreateProducto extends Component {

    constructor(props){

        super(props);
        this.state = {
            descrip: '',
            valUnit: '',
            estado:'',
            errors:{}

        };
        /* vincular */
        this.cacharCambio = this.cacharCambio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    /* captura los cambios de los imput (es llamado tambien handlechage) */
    cacharCambio = (e) => {

        /* requerir el valor de las propiedades del elementoa l cual apunta */
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]: value,
        });
    };


    validar = (descrip,valUnit,estado) => {
        const errors = setErrorsProd(descrip,valUnit,estado);
        this.setState({errors: errors})
        return Object.values(errors).every((err) => err === "")
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {descrip,valUnit,estado} = this.state;

        if(this.validar(descrip,valUnit,estado)){
            
            const data = {
                descrip: descrip,
                valUnit: valUnit,
                estado: estado
            }
            console.log(data);
            Axios.post("/Rproducto/addProducto", data).then((res) => {
                if(res.data.success){
                    alert("Producto Agregado Correctamente");
                    this.setState({
                        descrip: '',
                        valUnit: '',
                        estado:''
                    })

                }
            })

        }

    }

    render() {
        return (
            <React.Fragment>
                <Toolbar/>

                <div className="col-md-10 mt-3 mx-auto">
                    <h1>Crear Producto</h1>
                    
                        <form>
                            <div className="form-group mb-3">
                                <label>Nombre o Descripción del Producto</label>
                                <input 
                                    name="descrip" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="Ej: Zapatillas Nike XE"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.descrip}                                      
                                />
                                {this.state.errors.descrip && (
                                    <div className="text-danger">{this.state.errors.descrip}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                            <label>Valor Unitario</label>
                                <input 
                                    name="valUnit" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="Ej: 30000"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.valUnit}
                                />
                                {this.state.errors.valUnit && (
                                    <div className="text-danger">{this.state.errors.valUnit}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                            <label>Estado</label>

                            <select
                                name="estado" 
                                className="form-select"
                                type="number" 
                                placeholder="estado tarea"
                                onChange = {this.cacharCambio}
                                value = {this.state.estado}
                                aria-label="Default select example">
                                <option selected>Seleccione una opción</option>
                                <option value="disponible">disponible</option>
                                <option value="no disponible">no disponible</option>
                            </select>

                                {this.state.errors.estado && (
                                    <div className="text-danger">{this.state.errors.estado}</div>
                                )}
                            </div>
                            
                            <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Guardar</button>

                        </form>
                    
                </div>
            </React.Fragment>
        )
    }
}