import React, { Component } from 'react'
import Toolbar from './layout/toolbar';
import Axios from 'axios';
import { setErrors } from '../common/setError';

export default class CreateUsuario extends Component {

    constructor(props){

        super(props);
        this.state = {
            nombre: '',
            correo: '',
            estado:1,
            rol:'',
            errors:{}
            // _id: ''
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


    validar = (nombre,correo,estado,rol) => {
        const errors = setErrors(nombre,correo,estado,rol);
        this.setState({errors: errors})
        return Object.values(errors).every((err) => err === "")
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {nombre,correo,estado,rol} = this.state;

        if(this.validar(nombre,correo,estado,rol)){
            
            const data = {
                nombre: nombre,
                correo: correo,
                estado: estado,
                rol: rol
            }
            console.log(data);
            Axios.post("/posts/add", data).then((res) => {
                if(res.data.success){
                    alert("Add");
                    this.setState({
                        nombre: '',
                        correo: '',
                        estado:1,
                        rol:'',
                        // _id: ''
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
                    
                        <form>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input 
                                    name="nombre" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="nombre tarea"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.nombre}                                      
                                />
                                {this.state.errors.nombre && (
                                    <div className="text-danger">{this.state.errors.nombre}</div>
                                )}
                            </div>

                            <div className="form-group">
                            <label>Correo</label>
                                <input 
                                    name="correo" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="correo tarea"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.correo}
                                />
                                {this.state.errors.correo && (
                                    <div className="text-danger">{this.state.errors.correo}</div>
                                )}
                            </div>

                            <div className="form-group">
                            <label>Estado</label>
                                <input 
                                    name="estado" 
                                    className="form-control"
                                    type="number" 
                                    placeholder="estado tarea"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.estado}
                                />
                                {this.state.errors.estado && (
                                    <div className="text-danger">{this.state.errors.estado}</div>
                                )}
                            </div>
                            

                            <div className="form-group">
                            <label>Rol</label>
                                <input 
                                    name="rol" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="rol tarea"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.rol}
                                />
                                {this.state.errors.rol && (
                                    <div className="text-danger">{this.state.errors.rol}</div>
                                )}
                            </div>

                            

                            <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Enviar</button>

                        </form>
                    
                </div>
            </React.Fragment>

        )
    }
}

// export default CreatePage;
