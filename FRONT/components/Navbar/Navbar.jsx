import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ToggleColorMode from "./theme/ToggleColorMode";
import LogoBox from "../../Icons/Logo";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchUserData } from "../../redux/api";

const Navbar = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getJWTAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-huellitas`,
      });
      localStorage.setItem("token", accessToken);
      console.log({ accessToken });
      setToken(accessToken);
      console.log("accesToken: ", accessToken);

      // 3. Fetching User Data (Sending Token to Backend)
      await fetchUserData(
        (response) => {
          console.log("response con datos del usuario", response);
          // setUserData(response.data);  // To do: implement a CONTEXT
        },
        (err) => {
          console.log("err", err);
        }
      );
    };

    // Solicitar Token cada vez que se autentique
    if (isAuthenticated) {
      getJWTAuth0Token();
    }
  }, []);

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
      cursor="pointer"
    >
      <Flex pos="relative" pl="2%" alignItems="center">
        <Flex pos="absolute" w="35%">
          <LogoBox />
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
          <Button variant="outline" borderRadius="30px">
            <a href="/api/auth/login">Login</a>
          </Button>
          <ToggleColorMode />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
