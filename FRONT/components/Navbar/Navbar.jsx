import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import ToggleColorMode from "./theme/ToggleColorMode";
import LogoBox from "../../Icons/Logo";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      h="60px"
      pos="fixed"
      zIndex={9999999999}
      bgColor={useColorModeValue("gray.50", "#151b26")}
      top="0"
      display={{ base: "none", md: "flex" }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
    >
      <Flex pos="relative" pl="2%" alignItems="center">
        <Flex pos="absolute" w="35%">
         <LogoBox/>
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
          {/* <Button variant='outline' borderRadius="30px">Login</Button> */}
          <Button variant='outline' borderRadius="30px"><a href="/api/auth/login">Login</a></Button>
          <ToggleColorMode />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
