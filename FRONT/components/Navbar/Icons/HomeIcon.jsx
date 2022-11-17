import { Box, IconButton } from '@chakra-ui/react';
import React from 'react'
import { HiOutlineHome } from "react-icons/hi";

const HomeIcon = () => {
  return (
    <Box>
      <IconButton bg="inherit" icon={<HiOutlineHome size={30}/>}/>
   </Box>
  )
}

export default HomeIcon