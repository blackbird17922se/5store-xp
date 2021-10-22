import React, {useEffect} from 'react';
import Toolbar from '../layout/toolbar';
import jwt  from "jsonwebtoken";
import { useHistory } from 'react-router';




const Main = () => {


    const history = useHistory();

    async function populateMain(){
        // const req = await fetch('http://localhost:5000/main',{
        const req = await fetch('http://localhost:5000/posts/main',{
            headers:{
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = req.json();
        console.log(data);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token){
            console.log('hay token');
            const usuario = jwt.decode(token)
            console.log("usuario: " + usuario);

            if(!usuario){
            console.log('no hay usuario');

                localStorage.removeItem('token')
                history.replace('/')
                // window.location.href = "/"
            }else{
                console.log('populateMain');
                
                populateMain();
            }
        }
    },[])



        return(

            <React.Fragment>
                <Toolbar/>
            
                <div id="cont-contacts" className="container-fluid text-center">
                    <h1>Bienvenido a 5Store</h1>
                </div>

            </React.Fragment>

        )
    }


    export default Main;