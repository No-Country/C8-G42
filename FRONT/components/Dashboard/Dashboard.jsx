'use client'
import {Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import PetsAdoption from './PetsAdoption'
import SideBar from './SideBar'
import { useUser } from "@auth0/nextjs-auth0";


const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  console.log({user})
  return (
    <Flex>
        <SideBar/>
        <PetsAdoption/>
    </Flex>
  )
}

export default Dashboard