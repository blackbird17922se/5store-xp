import React, { Component } from 'react'
import Axios from 'axios';
import { setErrors } from '../common/setError';
import Toolbar from './layout/toolbar';

export default class EditarUsuario extends Component {


    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            correo: '',
            pass: '',
            estado:1,
            rol:'',
            errors:{}
            // _id: ''
        };
        /* vincular */
        this.cacharCambio = this.cacharCambio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount(){

        const id = this.props.match.params.id;

        Axios.get(`/posts/detail/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    // post: res.data.post,
                    nombre: res.data.post.nombre,
                    correo: res.data.post.correo,
                    pass: res.data.post.pass,
                    estado: res.data.post.estado,
                    rol: res.data.post.rol,
                    // errors: res.data.errors


                });
                // console.log("post: ", this.state.post);
            }
        })
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


    validar = (nombre,correo,pass,estado,rol) => {
        const errors = setErrors(nombre,correo,pass,estado,rol);
        this.setState({errors: errors})
        return Object.values(errors).every((err) => err === "")
    }

    onSubmit = (e) => {
        e.preventDefault();

        const id = this.props.match.params.id;

        const {nombre,correo,pass,estado,rol} = this.state;

        if(this.validar(nombre,correo,pass,estado,rol)){
            
            const data = {
                nombre: nombre,
                correo: correo,
                pass: pass,
                estado: estado,
                rol: rol
            }
            console.log(data);

            /* el /update/ lo trae desde routes/post*/
            Axios.put(`/posts/update/${id}`, data).then((res) => {
                if(res.data.success){
                    alert("Actualizado");
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
                            <label>pass</label>
                                <input 
                                    name="pass" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="pass tarea"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.pass}
                                />
                                {this.state.errors.pass && (
                                    <div className="text-danger">{this.state.errors.pass}</div>
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
