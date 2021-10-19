import { faBoxes, faDatabase, faHome, faMoneyBillAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/navbar.css'
// import btnNewContact from '../../images/btn-new-contact.png'

class Toolbar extends React.Component{
    render(){
        return(
            <div>

                <div className="Toolbar">
                    <div className="container-fluid">
                        <div className="row">
                            
                            <div className="col-md-8 tool-cont">

                                <Link className="lk-new-contact" to="/">
                                    <div >
                                        <FontAwesomeIcon className="iconoX" icon={faHome}/>
                                        <p>Inicio</p>

                                    </div>
                                    
                                </Link>

                                <Link className="lk-new-contact" to="/venta">
                                    <div >
                                        <FontAwesomeIcon className="iconoX" icon={faMoneyBillAlt}/>
                                        <p>Ventas</p>

                                    </div>
                                    
                                </Link>

                                <Link className="lk-new-contact" to="/producto">
                                    <div >
                                    <FontAwesomeIcon className="iconoX" icon={faBoxes}/>
                                        <p>Productos</p>

                                    </div>
                                    
                                </Link>

                                <Link className="lk-new-contact" to="/">
                                    <div >
                                        <FontAwesomeIcon className="iconoX" icon={faUser}/>
                                        {/* <i class="fas fa-user"></i> */}
                                        <p>Usuarios</p>

                                    </div>
                                    
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link className="lk-new-contact" to="/add">
                                    <div >
                                        <FontAwesomeIcon className="iconoX" icon={faDatabase}/>
                                        <p>Nuevo Usuario</p>

                                    </div>
                                    
                                </Link>
                            </div>
                        </div>                 
                    </div>
                </div>

            </div>
        )
    }

}

export default Toolbar;