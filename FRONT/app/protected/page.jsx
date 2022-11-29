'use client';

import Image from 'next/image';
import bgimage from './assets/bgimage.png';
import catImage from './assets/cat.png';
import { Center, Flex, Input, Button, Text, Link, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import ReactLoading from 'react-loading';

import { useUser, getSession } from "@auth0/nextjs-auth0";

function ProtectedPage() {
  const { user, isLoading } = useUser();



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
                <button><a href="/api/auth/logout">Logout</a></button>
                <br />
                <br />               
                <div>Este es tu Token:</div>
                <textarea value={user.Token} style={{ height: "400px", width: "600px" }}></textarea>
              </div>
              :
              <div>
                <h2>Esta es una ruta protegida, por favor inicia sesión</h2>
                <button><a href="/api/auth/login">Login</a></button>
              </div>
          }

          {/* <Flex gap={14} p={6} justifyContent="center" alignItems="center" pos="relative" direction="column">
            <Text fontSize='3xl'>PAGINA PROTEGIDA</Text >
            {loading ? 
              <ReactLoading type="spin" color="#AEC3B0"/>
              :
              <>
                <Flex pos="absolute" top="47px" left="220px">
                  <Image src={catImage} priority width="100" alt="heading" />
                </Flex>
              </>
            }
          </Flex> */}
        </Center>
      </Flex>
    </div>
  );
}

export default ProtectedPage;