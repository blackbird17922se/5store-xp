import React from 'react';
import Navbar from './layout/navbar';
import Toolbar from './layout/toolbar';

function Layout(props){
    return(
        <React.Fragment>
            <Navbar/>
            {/* <Toolbar/> */}
            {/* Se le agrega esto para recibir la vista */}
            {props.children}
        </React.Fragment>

    )
}

export default Layout;