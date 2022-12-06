import { Flex } from '@chakra-ui/react'
import React from 'react'

const SideBar = ({user}) => {
  return (
    <Flex w="300px" h="100vh" bg="#AEC3B0" direction="column" alignItems="center">
        <Flex textAlign='center' mt="80px" cursor="pointer">
        {user.firstName} {user.lastName}
        <br/>
         ROL: {user.role}
        </Flex>
        <Flex textAlign='center' mt="80px" cursor="pointer">
         Mascotas
        </Flex>
        <Flex  textAlign='center'cursor="pointer">
         Adopciones
        </Flex>
         <Flex  textAlign='center' cursor="pointer">
         Configuración
        </Flex>
        </Flex>
  )
}

export default SideBar