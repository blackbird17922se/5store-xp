import axios from "axios";
import React, {Component} from "react";
import Toolbar from '../../layout/toolbar';

export default class Venta extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      ventas:[]
    }
  }

  componentDidMount(){
    this.getVentas();
  }

  getVentas(){
    axios.get("/Rventa/venta").then((resp) => {
      if(resp.data.success){
        this.setState({
          ventas: resp.data.ventas,
        });
        console.log(this.state.ventas);
      }
    });
  }

  filterContent(ventas, searchTerm){
    const resultado = ventas.filter((venta) => 
      // venta.descrip.toLowerCase().includes(searchTerm) ||
      venta.estado.toLowerCase().includes(searchTerm)
      // venta.valUnit.toLowerCase().includes(searchTerm) ||
    );
    this.setState({ventas: resultado});
  }

  handleBusqueda = (e) => {
    const searchTerm = e.currentTarget.value;

    axios.get("/Rventa/venta").then((resp) => {
      if(resp.data.success){
        this.filterContent(resp.data.ventas, searchTerm)
      }
    });
  }

  render() { 
    return ( 
      <React.Fragment>
      
      <Toolbar/>
      <div className="container mt-5">
        <div className="col-lg-3 mb-3">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar"
            name="searchTerm"
            onChange={this.handleBusqueda}
          ></input>

        </div>


        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descripción</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>
              <th scope="col">Fecha venta</th>
              <th scope="col">Doc Cliente</th>
              <th scope="col">Nombre Cliente</th>
              <th scope="col">Estado</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ventas.map((venta, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{venta.descrip}</td>
                <td>{venta.cant}</td>
                <td>{venta.totalV}</td>
                <td>{venta.fecha}</td>
                <td>{venta.doClient}</td>
                <td>{venta.nomClient}</td>
                <td>{venta.estado}</td>
                <td>
                  <a className="btn btn-warning" href={`/updateVenta/${venta._id}`}>
                    <i className="fas fa-edit"></i>Editar
                  </a>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </React.Fragment>
    
     );
  }
}