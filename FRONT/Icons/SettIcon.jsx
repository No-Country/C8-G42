import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const SettIcon = () => {
  return (
    <Box>
      <IconButton bg="inherit" icon={<IoSettingsOutline size={25} />} />
    </Box>
  );
};

export default SettIcon;
