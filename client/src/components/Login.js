import React, {useState} from 'react'
import './styles/Login.css'


function Login() {

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
            // {/* <h3>Ingreso a 5Store</h3> */}
        <div className="login">

            <div className="row card-login">
    
                    <div className="col-md-6 login-container">
                        
                        <form action="" onSubmit={loginUsuario}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="correo"
                                    // value={correo}
                                    onChange={e=> setCorreo(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="pass"
                                    // value={pass}
                                    // onChange={handleLoginInputChange}
                                    onChange={e=> setPass(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-4">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Ingresar"
                                    // onClick={handleLogin}
                                />
                            </div>

                    
                        </form>
                    </div>

            </div>
        </div>
    )
}

export default Login
