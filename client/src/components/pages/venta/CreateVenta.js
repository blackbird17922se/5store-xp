import React, { Component } from 'react'
import Axios from 'axios';
import { setErrorsVenta } from '../../../common/setErrorVenta';
import Toolbar from '../../layout/toolbar';

export default class CreateVenta extends Component {

    constructor(props){
        super(props);
        this.state = {
            idProd: '',
            descrip: '',
            valUnit: 0,
            estado:'',
            doClient:'',
            nomClient:'',
            cant:0,
            totalV:0,
            fecha: this.generarFecha(),
            errors:{}
        };
        /* vincular */
        this.cacharCambio = this.cacharCambio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    generarFecha(){
        let fechaComp = "";
        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        if(month < 10){
            fechaComp = `${day}-0${month}-${year}`
        }else{
            fechaComp = `${day}-${month}-${year}`
        }
        return fechaComp;

    }

    componentDidMount(){

        const id = this.props.match.params.id;

        Axios.get(`/Rproducto/detailProd/${id}`).then((res) => {
            if(res.data.success){
                this.setState({

                    idProd: id,
                    descrip: res.data.producto.descrip,
                    valUnit: res.data.producto.valUnit
                });

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



    validar = (idProd,descrip,valUnit,estado,doClient,nomClient,cant,totalV,fecha) => {
        const errors = setErrorsVenta(idProd,descrip,valUnit,estado,doClient,nomClient,cant,totalV,fecha);
        this.setState({errors: errors})
        return Object.values(errors).every((err) => err === "")
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {idProd,descrip,valUnit,estado,doClient,nomClient,cant,totalV,fecha} = this.state;

        if(this.validar(idProd,descrip,valUnit,estado,doClient,nomClient,cant,totalV,fecha)){

            const data = {
                idProd: idProd,
                descrip: descrip,
                valUnit: valUnit,
                estado: estado,
                doClient: doClient,
                nomClient: nomClient,
                cant: cant,
                totalV: totalV,
                fecha: fecha,
            }
            console.log(data);

            Axios.post("/Rventa/addVenta", data).then((res) => {
                if(res.data.success){
                    alert("Venta Realizada");
                    this.setState({
                        idProd: '',
                        descrip: '',
                        valUnit: 0,
                        estado:'',
                        doClient:'',
                        nomClient:'',
                        cant:0,
                        totalV:0,
                        fecha: this.generarFecha(),
                        errors:{}
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
                    <h1>Venta Producto {this.state.descrip}</h1>
                    <h3>Total ${this.state.valUnit * this.state.cant}</h3>
                    <h6>(Precio Unidad: ${this.state.valUnit})</h6>
                    
                        <form className="mt-4">

                            <input 
                                name="valUnit" 
                                className="form-control"
                                type="hidden" 
                                placeholder="Ej: 30000"
                                onChange = {this.cacharCambio}
                                value = {this.state.valUnit}
                                readOnly
                            />


                            <div className="form-group mb-3">
                                <label>Cantidad</label>
                                <input 
                                    name="cant" 
                                    className="form-control"
                                    type="number" 
                                    
                                    onChange = {this.cacharCambio}
                                    value = {this.state.cant} 
                                                                         
                                />
                                {this.state.errors.cant && (
                                    <div className="text-danger">{this.state.errors.cant}</div>
                                )}
                            </div>


                            <input 
                                name="totalV" 
                                className="form-control"
                                type="hidden" 
                                
                                onChange = {this.cacharCambio}
                                value = {this.state.totalV = this.state.valUnit * this.state.cant} 
                                readOnly                              
                            />


                            <input 
                                name="fecha" 
                                className="form-control"
                                type="hidden" 
                                onChange = {this.cacharCambio}
                                value = {this.state.fecha} 
                                readOnly                                     
                            />


                            <div className="form-group mb-3">
                                <label>Documento Cliente</label>
                                <input 
                                    name="doClient" 
                                    className="form-control"
                                    type="number" 
                                    onChange = {this.cacharCambio}
                                    value = {this.state.doClient} 
                                />
                                {this.state.errors.doClient && (
                                    <div className="text-danger">{this.state.errors.doClient}</div>
                                )}
                            </div>


                            <div className="form-group mb-3">
                                <label>Nombre Cliente</label>
                                <input 
                                    name="nomClient" 
                                    className="form-control"
                                    type="text" 
                                    
                                    onChange = {this.cacharCambio}
                                    value = {this.state.nomClient} 
                                                                         
                                />
                                {this.state.errors.nomClient && (
                                    <div className="text-danger">{this.state.errors.nomClient}</div>
                                )}
                            </div>


                            <div className="form-group mb-3">
                            <label>Estado de la Venta</label>

                            <select
                                name="estado" 
                                className="form-select"
                                type="number" 
                                placeholder="estado tarea"
                                onChange = {this.cacharCambio}
                                value = {this.state.estado}
                                aria-label="Default select example">
                                <option selected>Seleccione una opción</option>
                                <option value="En Proceso">En Proceso</option>
                                <option value="Cancelada">Cancelada</option>
                                <option value="Entregada">Entregada</option>
                            </select>

                                {this.state.errors.estado && (
                                    <div className="text-danger">{this.state.errors.estado}</div>
                                )}
                            </div>
                            
                            <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Procesar Venta</button>

                        </form>
                    
                </div>

            </React.Fragment>

        )
    }
}

// export default CreatePage;
