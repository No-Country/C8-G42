'use client'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton bg="inherit" onClick={() => toggleColorMode()} icon={colorMode === "dark" ? (
        <SunIcon />
      ) : (
        <MoonIcon/>
      )}/>
    </Box>
  );
};

export default ToggleColorMode;