'use client'
import {Flex } from '@chakra-ui/react'
import React from 'react'
import PetsAdoption from './PetsAdoption'
import SideBar from './SideBar'

const Dashboard = () => {
  return (
    <Flex>
        <SideBar/>
        <PetsAdoption/>
    </Flex>
  )
}

export default Dashboard