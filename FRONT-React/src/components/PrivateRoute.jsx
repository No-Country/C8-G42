import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const PrivateRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
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