import React, {useState} from 'react'
import LoginAuth from './LoginAuth';
import LogOut from './LogOut';
import Profile from './Profile';
import './styles/Login.css'
import {useAuth0} from "@auth0/auth0-react";
import Main from './pages/main';


function Login() {    
    
    const {isAuthenticated} = useAuth0();

    return (
        <div>
            {isAuthenticated ? <Main/> : <LoginAuth/>}
        </div>
      
    )
}

export default Login
