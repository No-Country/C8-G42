import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Admin = () => {
    const { user, isAuthenticated, isLoading, logout, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const domain = "huellitas-auth.us.auth0.com";

        const getJWTAuth0Token = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-huellitas`
            });
            console.log("accesToken: ", accessToken);
        };

        getJWTAuth0Token();
    }, []);


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