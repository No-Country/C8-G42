import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Detail = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log(user, isAuthenticated, isLoading);
  }, [user, isAuthenticated, isLoading]);

  return (
    <div>Este es Detail</div>
  );
};

export default Detail;