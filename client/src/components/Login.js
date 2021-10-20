import React, { useState } from 'react'

const Login = () => {

    const [correo, setCorreo] = useState();
    const [pass, setPass] = useState();

    const submit= async(e)=>{
        e.preventDefault();

        await fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                correo,
                pass
            })
        });
    }

    return (
        <div className="login">
        <div className="row">
            <div className="col-md-6 login-form-1 login-container">
                <h3>Ingreso</h3>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Correo"
                            name="lEmail"
                            // value={lEmail}
                            onChange={e=> setCorreo(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="lPassword"
                            // value={lPassword}
                            // onChange={handleLoginInputChange}
                            onChange={e=> setPass(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Login"
                        />
                    </div>

               
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login;