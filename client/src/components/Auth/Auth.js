import React, {useState} from 'react'
// import axios from 'axios';
import Axios from 'axios';
import Cookie from 'js-cookie';

const Auth = () => {

    const [userData, setUserData] = useState({});

    const handleLogin = async e => {
        e.preventDefault();

        const resp = await Axios.post('/posts/auth', {data: userData});
        if(resp.data.token){
            localStorage.setItem('token', resp.data.token)
            Cookie.set("Jwt", resp.data.token)
            window.location.href = '/producto';
        } 
        console.log(resp.data.token);
       
    }

    // const state =null;

    const handleChange = e => {
        setUserData({...userData, [e.target.name] : e.target.value});
    }



    return (
        
        <div className="login">
            <div className="row">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Ingreso</h3>
                    <form action="" onChange={handleChange}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="correo"
                                // value={lEmail}
                                // onChange={e=> setCorreo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="pass"
                                // value={lPassword}
                                // onChange={handleLoginInputChange}
                                // onChange={e=> setPass(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                                onClick={handleLogin}
                            />
                        </div>

                
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Auth
