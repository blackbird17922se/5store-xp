import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, {Component} from "react";
import Layout from './components/layout';
import ContactsView from './components/pages/contactsView';
// import Main from './components/pages/main';
import Venta from './components/pages/venta';
import Usuario from './components/pages/usuario';
import Main from './components/pages/producto';
import LandingPage from './components/LandingPage';
import EditarUsuario from './components/EditarUsuario';
import CreateUsuario from './components/CreateUsuario';
import Login from './components/Login';
// import DetailPage from './components/DetailPage';
import Auth from './components/Auth/Auth';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route exact path="/venta" component={Venta}/>
                  {/* <Route exact path="/producto" component={Producto}/> */}
                  <Route exact path="/producto" component={Main}/>
                  <Route exact path="/usuario" component={Usuario}/>
                  <Route exact path="/" component={LandingPage}/>
                  <Route exact path="/nuevo" component={ContactsView}/>

                  <Route exact path="/update/:id" component={EditarUsuario}/>
                  <Route exact path="/add" component={CreateUsuario}/>
                  {/* <Route exact path="/detail/:id" component={DetailPage}/> */}
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/auth" component={Auth}/>

              </Switch>
          </Layout>
      </BrowserRouter>
    )
  }


}
 
export default App;