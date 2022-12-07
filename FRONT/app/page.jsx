"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/usersSlice";
import { Flex, Text, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PetsGrid from "../components/PetsGrid/PetsGrid";
import { fetchPets } from "../redux/slices/petsSlice";

const page = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const pets = useSelector((state) => state.pets.pets);
  const petsFilter = useSelector((state) => state.petsFamilyFilter);

  let filteredPets;
  if (petsFilter) {
    filteredPets = pets?.data?.pets.filter((pet) => pet.family === petsFilter);
  } else {
    filteredPets = pets?.data?.pets;
  }

  useEffect(() => {
    dispatch(fetchPets({}));
  }, [user]);
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
        {/* {console.log("userAuth0: ", userAuth0)} */}
        <div>Listado de Mascotas para adopción:</div>
        {filteredPets ? (
          <PetsGrid pets={filteredPets} />
        ) : (
          <Flex
            justifyContent="center"
            alignItems="center"
            height="50vh"
            direction="column"
            gap="6"
          >
            <Text>Cargando mascotas ...</Text>
            <Spinner color="blue.500" />
          </Flex>
        )}
      </Flex>
    );
  
};

export default page;

