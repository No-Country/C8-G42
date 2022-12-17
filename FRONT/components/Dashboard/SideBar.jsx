import { Button, Flex } from "@chakra-ui/react";

const SideBar = ({ user, setDashboardView }) => {
  return (
    <Flex
      fontSize="18px"
      h={{ base: "20vh", md: "100vh" }}
      bg="#AEC3B0"
      direction={"column"}
      alignItems="center"
    >
      <Flex
        textAlign="center"
        mt={{ base: "20px", md: "80px" }}
        cursor="pointer"
      >
        {user.firstName} {user.lastName}
        <br />
        ROL: {user.role}
      </Flex>
      <Flex
        w="100%"
        direction={{ base: "row", md: "column" }}
        justify="space-around"
      >
        <Flex
          paddingBottom="4"
          width="100%"
          textAlign="center"
          mt={{ md: "80px" }}
          cursor="pointer"
          direction={"column"}
        >
          <Button
            onClick={() => setDashboardView("pets")}
            py="30px"
            width="100%"
          >
            Mascotas
          </Button>
        </Flex>
        {user.role === "user" && (
          <Flex
            paddingBottom="4"
            width="100%"
            textAlign="center"
            cursor="pointer"
          >
            <Button
              onClick={() => setDashboardView("favorites")}
              py="30px"
              width="100%"
            >
              Mis Favoritos
            </Button>
          </Flex>
        )}
        <Flex
          paddingBottom="4"
          width="100%"
          textAlign="center"
          cursor="pointer"
        >
          <Button
            onClick={() => setDashboardView("requests")}
            py="30px"
            width="100%"
          >
            Adopciones
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
