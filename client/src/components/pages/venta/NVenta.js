import axios from "axios";
import React, {Component} from "react";
import Toolbar from '../../layout/toolbar';

export default class NVenta extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      productos:[]
    }
  }


  componentDidMount(){
    this.getProductos();
  }

  getProductos(){
    axios.get("/Rproducto/producto").then((resp) => {
      if(resp.data.success){
        this.setState({
          productos: resp.data.productos,
        });
        console.log(this.state.productos);
      }
    });
  }

  onAgregar = (id) => {
    alert(id)
    // axios.delete(`/Rventa/delete/${id}`).then((res) => {
    //   alert("Eliminado " + res.data.descrip);

    //   /* acualizar lista */
    //   this.getventas();
    // });
  }


  filterContent(ventas, searchTerm){
    const resultado = ventas.filter((venta) => 
      venta.descrip.toLowerCase().includes(searchTerm) ||
      venta.valUnit.toLowerCase().includes(searchTerm) ||
      venta.estado.toLowerCase().includes(searchTerm)
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
      <h1>Venta</h1>
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
              <th scope="col">Precio Unitario</th>
              <th scope="col">Estado</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productos.map((producto, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{producto.descrip}</td>
                <td>{producto.valUnit}</td>
                <td>{producto.estado}</td>
                <td>
                  <a 
                    className="btn btn-success" 
                    href={`/addVenta/${producto._id}`}
                    >

                    <i className="fas fa-trast"></i>Agregar a Venta
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
