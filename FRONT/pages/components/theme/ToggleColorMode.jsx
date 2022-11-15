import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box mt="5px">
      <Switch onChange={() => toggleColorMode()} mr="10px"/>
      {colorMode === "dark" ? (
        <SunIcon />
      ) : (
        <MoonIcon/>
      )}
    </Box>
  );
};

export default ToggleColorMode;