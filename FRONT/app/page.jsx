'use client'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import SinglePet from '../components/SinglePet/SinglePet'

const page = () => {
  return (
    <Flex w="100%" mt="60px" pos="relative">
        Principal 
        <SinglePet/>
    </Flex>
  )
}

export default page
