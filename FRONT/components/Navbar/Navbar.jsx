import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Link,
} from "@chakra-ui/react";
import ToggleColorMode from "./theme/ToggleColorMode";
import LogoBox from "../../Icons/Logo";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchUserData } from "../../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { setPetsFamilyFilter } from "../../redux/slices/petsFamilySlice";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const [token, setToken] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLogInClicked, setIsLogInClicked] = useState(false);
  const [isLogOutClicked, setIsLogOutClicked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogOutClicked) {
      localStorage.setItem("token", null);
    }
  }, [isLogOutClicked]);

  const filterPetsByFamily = (family) => {
    dispatch(setPetsFamilyFilter(family));
  };

  return (
    <>
      <Flex
        w="100%"
        h="60px"
        pos="fixed"
        bgColor={useColorModeValue("gray.50", "#151b26")}
        top="0"
        display={{ base: "none", md: "flex" }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        // cursor="pointer"
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
            <Button onClick={() => filterPetsByFamily("dog")} bg="inherit">
              Perros
            </Button>
            <Button onClick={() => filterPetsByFamily("cat")} bg="inherit">
              Gatos
            </Button>
            <Button onClick={() => filterPetsByFamily("")} bg="inherit">
              Todos
            </Button>
            <ToggleColorMode />
            {user ? (
              <Button
                variant="outline"
                borderRadius="30px"
                onClick={() => {
                  setIsLogOutClicked(true);
                }}
              >
                <Link href="/api/auth/logout">Logout</Link>
              </Button>
            ) : (
              <Button variant="outline" borderRadius="30px">
                <Link href="/api/auth/login">Login</Link>
              </Button>
            )}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} marginStart={"10px"} src={user?.avatar} />
              </MenuButton>
              {user && (
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={user.avatar} />
                  </Center>
                  <br />
                  <Center>
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem
                    onClick={() => {
                      setIsLogOutClicked(true);
                    }}
                  >
                    <Link href="/api/auth/logout">Logout</Link>
                  </MenuItem>
                </MenuList>
              )}
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
