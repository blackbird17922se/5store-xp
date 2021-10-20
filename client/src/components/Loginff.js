import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';

export default class Loginn extends Component {

    
    
    render() {
        
            const responseGoogle =  (resp) => {
                console.log(resp);

                axios({
                    method: 'POST',
                    url: `http://localhost:3000/login`,
                    headers: {
                        'Authorization': `Bearer ${resp.tokenId}`
                    }

                }).then((resp) => {
                    console.log(resp);
                }).catch(console.log)
        
                // try {
                //     const { status, data } = await axios({
                //         method: 'POST',
                //         url: `${process.env.React_App_API_Url}/auth/google/login`,
                //         headers: {
                //             'Authorization': `Bearer ${resp.tokenId}`
                //         }
                //     });
        
                //     console.log('status', status);
        
                //     if (status === 200) {
        
                //         auth.setToken(data.token);
                //         auth.setUser({ uid: data.uid, name: data.name });
        
                //     } else if (status === 201) {
                //         notie.alert({ text: data.msg, type: 'success', time: 10 });
                //     }
        
                // } catch (error) {
                //     //    console.log(error);
                //     // console.log(error.toJSON());
                //     // console.log(error.response.status);
                //     // console.log(error.response.data);
                //     // <Notificacion type={'error'} text={'No autorizado'}/>
        
        
                //     if (error.response.status === 401) {
                //         notie.alert({ text: error.response.data.msg, type: 'warning', time: 10 });
                //     } else {
                //         notie.alert({ text: error.response.data.msg, type: 'error', time: 10 });
                //     }
        
                // }
            }

        
        return (
            <div className="login">
            <div className="row">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Ingreso</h3>
                    <form >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                // value={lEmail}
                                // onChange={handleLoginInputChange}
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
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                        {/* <div>
                            <button onClick={handleLogin}>Prueba login</button>
                        </div> */}
                         <GoogleLogin
                            className="btn form-group"
                            clientId="1063048089294-ppga2c2utvfst43it5e9t7mqqlp7ddrt.apps.googleusercontent.com"
                            buttonText="Iniciar sesion con google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                   
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
