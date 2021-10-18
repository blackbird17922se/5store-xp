import axios from "axios";
import React, {Component} from "react";
import Toolbar from './layout/toolbar';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      usuarios:[]
    }
  }

  componentDidMount(){
    this.getUsuarios();
  }

  getUsuarios(){
    axios.get("http://localhost:3000/usuario").then((resp) => {
      if(resp.data.success){
        this.setState({
          usuarios: resp.data.usuarios
        });
        console.log(this.state.usuarios);
      }
    })
  }


  render() { 
    return ( 
      <React.Fragment>
      
      <Toolbar/>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usuarios.map((usuario, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>@{usuario.rol}</td>
                <td>
                  <a className="btn btn-warning" href="#">
                    <i className="fas fa-edit"></i>Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#">
                    <i className="fas fa-trast"></i>Delete
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
 
export default LandingPage;