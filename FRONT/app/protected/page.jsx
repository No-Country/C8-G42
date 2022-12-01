'use client';

import Image from 'next/image';
import bgimage from './assets/bgimage.png';
import { Center, Flex, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


import { useUser } from "@auth0/nextjs-auth0";

const ProtectedPage = () => {  
  const { user, isLoading } = useUser();
  const [isLogInClicked, setIsLogInClicked] = useState(false);
  const [isLogOutClicked, setIsLogOutClicked] = useState(false);


  useEffect(() => {
    if (user?.TokenAuth0) {
      localStorage.setItem("token", user?.TokenAuth0);
    }
    localStorage.setItem("token", user?.TokenAuth0);
    if (isLogOutClicked) { localStorage.setItem("token", null); }
  }, [user, isLogInClicked, isLogOutClicked]);

  return (
    <div>
      <Flex direction="column">
        <Center bg='#EFF6E0' height="200px" overflow="hidden">
          <Image src={bgimage} className="cover" priority alt="heading" />
        </Center>
        <Center>
          {isLoading ? <div>Loading...</div>
            :
            user ?
              <div>
                Welcome {user.name}!
                <Button onClick={() => { setIsLogOutClicked(true); }}><a href="/api/auth/logout">Cerrar sesión</a></Button>
              </div>
              :
              <div>
                <h2>Esta es una ruta protegida, por favor inicia sesión</h2>
                <Button onClick={() => { setIsLogInClicked(true); }}><a href="/api/auth/login">Login</a></Button>
              </div>
          }
        </Center>
      </Flex>
    </div>
  );
}

export default ProtectedPage;