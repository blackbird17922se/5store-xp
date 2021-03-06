import React from 'react'
import {useAuth0} from "@auth0/auth0-react";

const Profile = () => {

    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            
            <div>
                <p>Profile</p>
                <p>{JSON.stringify(user)}</p>
                <img src={user.picture}/>
                <h2>{user.name}</h2>
            </div>
        )
    )
}

export default Profile
