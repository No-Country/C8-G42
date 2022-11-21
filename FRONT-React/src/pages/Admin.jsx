import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Admin = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();


    return (

        <>
            <h2>Este es Admin y es privado</h2>
            {isAuthenticated ?
                <div> Bienvenido {user?.nickname}
                    <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                </div>
                :
                ""
            }
        </>
    );
};

export default Admin;