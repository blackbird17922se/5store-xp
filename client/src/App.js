import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, {Component} from "react";
import Layout from './components/layout';

import Main from './components/pages/main';

import Usuario from './components/pages/usuario/Usuario';
import EditarUsuario from './components/pages/usuario/EditarUsuario';
import CreateUsuario from './components/pages/usuario/CreateUsuario';

import Producto from './components/pages/producto/Producto';
import CreateProducto from './components/pages/producto/CreateProducto';
import EditarProducto from './components/pages/producto/EditarProducto';

import Venta from './components/pages/venta/Venta';
import NVenta from './components/pages/venta/NVenta';
import CreateVenta from './components/pages/venta/CreateVenta';
import EditarVenta from './components/pages/venta/EditarVenta';

import Login from './components/Login';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Layout>
          <Switch>

            {/* LOGIN Y PAGINA INICIAL */}
            <Route exact path="/" component={Login}/>
            <Route exact path="/main" component={Main}/>

            {/* USUARIOS */}
            <Route exact path="/usuario" component={Usuario}/>
            <Route exact path="/add" component={CreateUsuario}/>
            <Route exact path="/update/:id" component={EditarUsuario}/>

            {/* PRODUCTOS */}
            <Route exact path="/producto" component={Producto}/>
            <Route exact path="/addProducto" component={CreateProducto}/>
            <Route exact path="/updateProd/:id" component={EditarProducto}/>

            {/* VENTA */}
            <Route exact path="/venta" component={Venta}/>
            <Route exact path="/nventa" component={NVenta}/>
            {/* <Route exact path="/addVenta" component={CreateVenta}/> */}
            <Route exact path="/updateVenta/:id" component={EditarVenta}/>
            <Route exact path="/addVenta/:id" component={CreateVenta}/>
      
            {/* OTROS MODULOS */}
            

          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}
 
export default App;