import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchUserData } from '../utils/api';


const PrivateRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

    const [token, setToken] = useState("");

    useEffect(() => {
        const getJWTAuth0Token = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-huellitas`
            });
            localStorage.setItem("token", accessToken);

            setToken(accessToken);
            console.log("accesToken: ", accessToken);

            // 3. Fetching User Data (Sending Token to Backend)
            await fetchUserData(
                (response) => {
                    console.log('response con datos del usuario', response);
                    // setUserData(response.data);  // To do: implement a CONTEXT
                },
                (err) => {
                    console.log('err', err);
                }
            );
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
        <div>
            <div>{children}</div>
            <br></br>
            <div>Token:</div>
            <textarea value={token} style={{ height: "400px", width: "600px" }}></textarea>
        </div>
    );
};

export default PrivateRoute;