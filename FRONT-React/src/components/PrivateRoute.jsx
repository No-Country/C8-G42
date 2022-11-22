import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const PrivateRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();


    useEffect(() => {
        const getJWTAuth0Token = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-huellitas`
            });
            localStorage.setItem("token", accessToken);
            // console.log("accesToken: ", accessToken);
        };

        // Solicitar Token cada vez que se autentique
        if (isAuthenticated) {
            getJWTAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently]);


    if (isLoading) return <h1>Loading...</h1>;

    if (!isAuthenticated) {
        return (
            <div>
                <div>No estás autorizado</div>
                <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
            </div>
        );
    }

    return (
        <div>{children}</div>
    );
};

export default PrivateRoute;