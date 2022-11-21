import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Detail = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  /* Solo funciona cuando se ha hecho login */
  //   useEffect(() => {
  //     const domain = "huellitas-auth.us.auth0.com";

  //     const getJWTAuth0Token = async () => {
  //         const accessToken = await getAccessTokenSilently({
  //             audience: `api-autenticacion-huellitas`
  //         });
  //         console.log("accesToken: ", accessToken);
  //     };

  //     getJWTAuth0Token();
  // }, []);


  useEffect(() => {
    console.log(user, isAuthenticated, isLoading);
  }, [user, isAuthenticated, isLoading]);

  return (
    <div>Este es Detail</div>
  );
};

export default Detail;