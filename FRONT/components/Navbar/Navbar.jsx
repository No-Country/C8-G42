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
} from "@chakra-ui/react";
import ToggleColorMode from "./theme/ToggleColorMode";
import LogoBox from "../../Icons/Logo";
import { useState, useEffect } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";


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
      // dispatch(setIsOnlineUser(false));  // u s e r  redux
      localStorage.setItem("token", null);
    }
  }, [isLogOutClicked]);

  return (
    <>
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
            <Button bg="inherit">Perros</Button>
            <Button bg="inherit">Gatos</Button>
            <Button bg="inherit">Otros</Button>
            <ToggleColorMode />
            {user ?
              <Button variant="outline" borderRadius="30px" onClick={() => { setIsLogOutClicked(true); }}>
                <a href="/api/auth/logout">Logout</a>
              </Button>
              : <Button variant="outline" borderRadius="30px">
                <a href="/api/auth/login">Login</a>
              </Button>
            }
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  marginStart={'10px'}
                  src={user?.avatar}
                />
              </MenuButton>
              {user &&
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={user.avatar}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{user.firstName} {user.lastName}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={() => { setIsLogOutClicked(true); }}><a href="/api/auth/logout">Logout</a></MenuItem>
                </MenuList>}
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
