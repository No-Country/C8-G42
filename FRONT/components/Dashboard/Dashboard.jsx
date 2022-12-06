'use client';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import PetsAdoption from './PetsAdoption';
import SideBar from './SideBar';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Flex>
      {console.log("user: ", user)}
      <SideBar />
      <PetsAdoption />
    </Flex>
  );
};

export default Dashboard;