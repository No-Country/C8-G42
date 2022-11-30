import React, { useEffect } from "react";
import SinglePet from "../SinglePet/SinglePet";
import { Wrap, WrapItem, Center, Grid, GridItem } from "@chakra-ui/react";
import PetCard from "../PetCard/PetCard";
import fakeData from "./fakeData.json";

const PetsGrid = ({ pets }) => {
  const pet = fakeData.data;

  return (
    <Grid
      templateColumns={{
        base: "repeat(auto-fill,minmax(200px,1fr))",
        md: "repeat(4, 1fr)",
      }}
      gap={{ md: 4 }}
    >
      {pet.map((pet, i) => {
        return (
          <GridItem w="50%" key={i}>
            <PetCard pet={pet} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PetsGrid;
