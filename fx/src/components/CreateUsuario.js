import React, { Component } from 'react'
import Toolbar from './layout/toolbar';
import Axios from 'axios';

export default class CreateUsuario extends Component {

    constructor(props){

        super(props);
        this.state = {
            nombre: '',
            correo: '',
            estado:1,
            rol:'',
            // _id: ''
        };
        /* vincular */
        this.cacharCambio = this.cacharCambio.bind(this);
        // this.agregarTarea = this.agregarTarea.bind(this);

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

    onSubmit = (e) => {
        e.preventDefault();

        const {nombre,correo,estado,rol} = this.state;

        const data = {
            nombre: nombre,
            correo: correo,
            estado: estado,
            rol: rol
        }
        console.log(data);
        Axios.post("/usuario/add", data).then((res) => {
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

    render() {
        return (
            <React.Fragment>
                <Toolbar/>
                <div className="card">
                    <div className="card-content">
                        <form>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        name="nombre" 
                                        type="text" 
                                        placeholder="nombre tarea"
                                        onChange = {this.cacharCambio}
                                        value = {this.state.nombre}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        name="correo" 
                                        type="text" 
                                        placeholder="correo tarea"
                                        onChange = {this.cacharCambio}
                                        value = {this.state.correo}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        name="estado" 
                                        type="number" 
                                        placeholder="estado tarea"
                                        onChange = {this.cacharCambio}
                                        value = {this.state.estado}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        name="rol" 
                                        type="text" 
                                        placeholder="rol tarea"
                                        onChange = {this.cacharCambio}
                                        value = {this.state.rol}
                                    />
                                </div>
                            </div>

                            

                            <button type="submit" className="btn light-blue darken-4" onClick={this.onSubmit}>Enviar</button>

                        </form>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

// export default CreatePage;
