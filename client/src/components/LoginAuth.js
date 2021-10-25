import React, {useState} from 'react'
import './styles/Login.css'
import {useAuth0} from "@auth0/auth0-react";

const LoginAuth = () => {

    const {loginWithRedirect} = useAuth0();


    const [correo, setCorreo] = useState({});
    const [pass, setPass] = useState({});

    async function loginUsuario(e){
        e.preventDefault();

        /* en lugar de localst:3000 --> /posts/login*/
        const response = await fetch('/posts/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                correo,
                pass
            })
        })

        const data = await response.json()

        if(data.usuario){
            localStorage.setItem('token', data.usuario)
            // alert("log!!!");
            window.location.href = '/main';
        }else{
            alert("Correo o Contraseña incorrectas")
        }

        console.log(data);
    }



    return (
        <div id="body-login"> 
            <div className="row" id="cont_log">
                <div className="col-lg-4 col-lg-offset-7 col-md-offset-2  col-sm-12">
                    <div className="cont-frm-log">
                        <h1>INICIAR SESIÓN</h1>
                        <form action="" onSubmit={loginUsuario}>

                            <div className="form-group">
                                <label className="control-label" for="idUsu">Correo Electronico</label>                            
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="correo"
                                    onChange={e=> setCorreo(e.target.value)} 
                                    
                                />               
                            </div>

                            <div className="form-group">
                                <label className="control-label" for="pass">Contraseña</label>                      
                                <input 
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="pass"
                                    onChange={e=> setPass(e.target.value)} 
                                     
                                />
                            </div>

                            <div className="form-group mt-4">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Ingresar"
                                />
                            </div>

                            <div>
                                <input
                                    type="submit"
                                    className="btnSubmit mt-3"
                                    value="Ingresar con Google"
                                    onClick={() => loginWithRedirect()}
                                />
                            </div>
            

                        </form>
                    </div>
                </div>
            </div> 
        </div>
                        
    )
}

export default LoginAuth
