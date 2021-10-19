import React from 'react';
// import Contacto from '../components/contacto';
import './styles/contactsView.css';
import Toolbar from '../layout/toolbar';

// import api from '../api';



class Main extends React.Component{

    


    render(){

   


        return(

            <React.Fragment>
                <Toolbar/>
            
                <div id="cont-contacts" className="container-fluid">
                    <h1>Main</h1>
                </div>

            </React.Fragment>

        )
    }
}

export default Main;