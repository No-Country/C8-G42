import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const SideBar = ({ user, setDashboardView }) => {
  return (
    <Flex
      fontSize="18px"
      h="100vh"
      bg="#AEC3B0"
      direction="column"
      alignItems="center"
    >
      <Flex textAlign="center" mt="80px" cursor="pointer">
        {user.firstName} {user.lastName}
        <br />
        ROL: {user.role}
      </Flex>
      <Flex width="100%" textAlign="center" mt="80px" cursor="pointer">
        <Button onClick={() => setDashboardView("pets")} py="30px" width="100%">
          Mascotas
        </Button>
      </Flex>
      <Flex width="100%" textAlign="center" cursor="pointer">
        <Button
          onClick={() => setDashboardView("requests")}
          py="30px"
          width="100%"
        >
          Adopciones
        </Button>
      </Flex>
      <Flex width="100%" textAlign="center" cursor="pointer">
        <Button py="30px" width="100%">
          Configuración
        </Button>
      </Flex>
    </Flex>
  );
};

export default SideBar;
