import { Box, IconButton} from '@chakra-ui/react'
import React from 'react'
import Paw from './Paw'

const PawIcon = () => {
  return (
    <Box>
      <IconButton bg="inherit" icon={<Paw boxSize={7}/>}/>
   </Box>
  )
}

export default PawIcon