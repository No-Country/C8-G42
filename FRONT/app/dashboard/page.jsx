'use client';
import React, { useEffect } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import { useUser } from "@auth0/nextjs-auth0";
import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';


const Page = () => {
  /* const { user, isLoading } = useUser(); */
  const user = useSelector((state) => state.user.user);
  console.log({user})
  return (
    <>
      {!user &&

        <Flex
          justifyContent="center"
          alignItems="center"
          height="50vh"
          direction="column"
          gap="6"
        >
          <Text>Esta es una ruta protegida, por favor inicia sesión.</Text>
          <Button><Link href="/api/auth/login">Login</Link></Button>
        </Flex>

      }
      {user && <Dashboard />}
    </>
  );
};

export default Page;
