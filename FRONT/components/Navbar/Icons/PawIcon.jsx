import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import paw from '../assets/paw.ico'

const PawIcon = () => {
  return (
    <Flex w="11%"> 
        <Image src={paw} style={{padding:"2px"}}alt="like" />
    </Flex>
  )
}

export default PawIcon