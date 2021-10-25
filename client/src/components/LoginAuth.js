import React from 'react'
import './styles/Login.css'
import {useAuth0} from "@auth0/auth0-react";

const LoginAuth = () => {

    const {loginWithRedirect} = useAuth0();

    return (

        <div className="login text-center">
            <div className="row card-login">
    
                    <div className="col-md-6 login-container">
                        
                            <div>
                            <h1 className="text-white">Ingreso a 5Store</h1>
                                <input
                                    type="submit"
                                    className="btnSubmit mt-3"
                                    value="Ingresar con Google"
                                    // onClick={handleLogin}
                                    onClick={() => loginWithRedirect()}
                                />
                            </div>


                    </div>
                    {/* <Profile></Profile> */}

               

            </div>
        </div>
    )
}

export default LoginAuth
