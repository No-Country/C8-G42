import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { TfiBell } from "react-icons/tfi";
const BellIcon = () => {
  return (
    <Box>
      <IconButton bg="inherit" icon={<TfiBell size={25} />}/>
    </Box>
  );
};

export default BellIcon;
