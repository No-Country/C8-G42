"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/usersSlice";
import { Flex, Text, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import PetsGrid from '../components/PetsGrid/PetsGrid';
import { fetchPets } from '../redux/slices/petsSlice';
import { useUser } from "@auth0/nextjs-auth0";
import { fetchUser } from "../redux/slices/userSlice";

const page = () => {
  const { user : userAuth0, isLoading: loading } = useUser();
  const [isLogInClicked, setIsLogInClicked] = useState(false);
  const [isLogOutClicked, setIsLogOutClicked] = useState(false);

  useEffect(() => {
    if (userAuth0?.TokenAuth0) {
      localStorage.setItem("token", userAuth0?.TokenAuth0);
    }
    localStorage.setItem("token", userAuth0?.TokenAuth0);
    if (isLogOutClicked) { 
      localStorage.setItem("token", null);
     }
  }, [userAuth0, isLogInClicked, isLogOutClicked]);

  const users = useSelector((state) => state.users.users); // u s e r  redux
  const user = useSelector((state) => state.user.user); // u s e r  redux
  const pets = useSelector((state) => state.pets.pets);
  const isLoading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers({ limit: 10, offset: 5 }));
    dispatch(fetchPets({}));
    if (userAuth0?.email) {
      const email = userAuth0.email;
      dispatch(fetchUser({ email }));  // u s e r  redux
    }
  }, [userAuth0]);
  return (
    <Flex
      w="100%"
      mt={{ base: "10px", md: "60px" }}
      pos="relative"
      direction="column"
    >
      {/* Principal  */}

      {/* {loading && <p>Loading login info...</p>} */}
      {/* 
      {!loading && !user && (
        <>
          <p> Usuario invitado, si deseas adoptar dale click en:
            <Button onClick={() => { setIsLogInClicked(true); }}><a href="/api/auth/login">Login</a></Button>
          </p>
        </>
      )} */}
      {/* {user && (
        <Wrap align='center'>
          <WrapItem>
            <Avatar name={`${user?.firstName} ${user?.lastName}`} src={userAuth0.picture} alt="user picture" />
          </WrapItem>
          <WrapItem>
            <Center> {user.firstName} {user.lastName} ({userAuth0.nickname})</Center>
          </WrapItem>
          <WrapItem>
            <Button onClick={() => { setIsLogOutClicked(true); }} width="130px" borderRadius="30px"><a href="/api/auth/logout">Cerrar sesión</a></Button>
          </WrapItem>
          {console.log("userAuth0: ", userAuth0)}
          {user && console.log("user: ", user)}
        </Wrap>
      )} */}
      <div>Listado de Mascotas para adopción:</div>
      {pets?.data ?
        <PetsGrid pets={pets?.data?.pets} />
        :
        <Flex justifyContent="center" alignItems="center" height="50vh" direction="column" gap="6">
          <Text>Cargando mascotas ...</Text>
          <Spinner color='blue.500' />
        </Flex>}
    </Flex>
  );
};

export default page;
