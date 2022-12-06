'use client';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import PetsAdoption from './PetsAdoption';
import SideBar from './SideBar';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {!user && <Flex
        justifyContent="center"
        alignItems="center"
        height="50vh"
        direction="column"
        gap="6"
      >
        <Text>Cargando info usuario ...</Text>
        <Spinner color="blue.500" />
      </Flex>}
      {
        user &&
        <Flex>
          {console.log("user: ", user)}
          <SideBar user={user} />
          <PetsAdoption />
        </Flex>}
    </>
  );
};

export default Dashboard;