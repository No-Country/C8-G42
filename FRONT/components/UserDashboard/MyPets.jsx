"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import PetCard from "../PetCard/PetCard";

const MyPets = ({pets}) => {
  return (
    <Box marginTop="16" >
        {pets.map((pet) => {
          return <PetCard key={pet.id} pet={pet} />
        })}
    </Box>
  );
};

export default MyPets;
