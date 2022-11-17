import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ToggleColorMode from "./theme/ToggleColorMode";
import logo from "./assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      h="60px"
      pos="fixed"
      top="0"
      display={{ base: "none", md: "flex" }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex pos="relative" pl="2%" alignItems="center">
        <Flex pos="absolute" w="35%">
          <Image src={logo} style={{ padding: "2px" }} alt="logo" />
        </Flex>
        <Box pl="30%">
          <Text fontSize="3xl" pt="10px">
            Huellitas
          </Text>
        </Box>
      </Flex>
      <Flex pr="5%">
        <Flex alignItems="center" justifyContent="space-around">
          <Button bg="inherit">Fundaciones</Button>
          <Button bg="inherit">Perros</Button>
          <Button bg="inherit">Gatos</Button>
          <Button bg="inherit">Otros</Button>
          <Button variant='outline' borderRadius="30px">Login</Button>
          <ToggleColorMode />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
