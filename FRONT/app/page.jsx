"use client";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import PetsGrid from "../components/PetsGrid/PetsGrid";
import { fetchPets } from "../redux/slices/petsSlice";
import Header from "../components/PetsGrid/Header";

const page = () => {
  const { user: userAuth0, isLoading: loading } = useUser();
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
    if (!loading) {
      dispatch(fetchPets({ user }));
    }
  }, [user, loading]);
  return (
    <Flex
      w="100%"
      pos="relative"
      direction="column"
    >
      <Header />
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
