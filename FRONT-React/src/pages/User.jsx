import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const User = () => {
    const URL_SERVER = "http://localhost:5000";
    const API_VERSION = "/api/v1";
    const PATH_USERS = "/users";
    const URL_API = URL_SERVER + API_VERSION + PATH_USERS;

    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const [userList, setUserList] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    const getToken = () => {
        return `Bearer ${localStorage.getItem("token")}`;
    };

    const callToServer = async () => {
        try {
            const res = await axios.get(URL_API, {
                headers: {
                    Authorization: getToken(),
                }
            });
            // console.log("res.data: ", res.data);
            setUserList(res.data);
            setLoadingData(false);

        } catch (error) {
            console.log("error: ", error);
        }
    };
    const handleClick = () => {
        setLoadingData(true);
        callToServer();
    };

    if (isLoading) return <div>Loading...</div>;
    if (!isAuthenticated) { return <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>; }

    return (
        <>
            <h2>Este es USER y es privado</h2>
            <div> Bienvenido <span style={{ color: "green", fontWeight: "bold" }}>{user?.nickname}</span>
                <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
            </div>

            <div>
                <h3>Presiona le botón para traer la lista de usuarios de la DB</h3>
                <button onClick={() => handleClick()}>Traer Users</button>
                <div>
                    USuarios:
                    {
                        loadingData ?
                            <h5>Loading data...</h5>
                            :
                            userList?.map((user) => {
                                return <div key={user.id}>{user.firstName} - {user.lastName} - {user.email}</div>;
                            })
                    }
                </div>

            </div>
        </>
    );
};

export default User;