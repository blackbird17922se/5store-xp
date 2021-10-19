import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/navbar.css'
// import btnBack from '../../images/btn.png';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Navbar">
                    <div className="container-fluid">
                       
                        <span>5Store</span>
                    
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Navbar;