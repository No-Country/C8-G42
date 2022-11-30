"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/usersSlice";
import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PetsGrid from "../components/PetsGrid/PetsGrid";
import { fetchPets } from "../redux/slices/petsSlice";

const page = () => {
  const users = useSelector((state) => state.users.users);
  const pets = useSelector((state) => state.pets.pets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers({ limit: 10, offset: 5 }));
    dispatch(fetchPets({ limit: 10, offset: 5 }));
  }, []);

  return (
    <Flex w="100%" mt="60px" pos="relative" direction="column">
      {/* Principal  */}
      {/* <PetsGrid /> */}
    </Flex>
  );
};

export default page;
