import React from 'react';
// import logo from './logo.svg';
// import Container fro./components/Containerner';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import Container from './components/Container';
import Layout from './components/layout';
import ContactsView from './components/pages/contactsView';
import Main from './components/pages/main';
import Venta from './components/pages/venta';
import Usuario from './components/pages/usuario';
import Producto from './components/pages/producto';



function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossorigin="anonymous"
      />

        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/venta" component={Venta}/>
                    <Route exact path="/producto" component={Producto}/>
                    <Route exact path="/usuario" component={Usuario}/>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/nuevo" component={ContactsView}/>
                </Switch>
            </Layout>
        </BrowserRouter>

      {/* <Container/> */}

    </div>
  );
}

export default App;
