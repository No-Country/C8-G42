import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h4>Este es Home</h4>
      {isAuthenticated ?
        <div> Bienvenido {user?.nickname}
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </div>
        :
        <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
      }
    </>
  );
};

export default Home;