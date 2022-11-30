import React, { useEffect } from "react";
import SinglePet from "../SinglePet/SinglePet";
import { Wrap, WrapItem, Center, Grid } from "@chakra-ui/react";
import PetCard from "../PetCard/PetCard";

const PetsGrid = ({ pets }) => {
  console.log("pets:", pets);

  return (
    <>
      <div>Listado de Mascotas para adopción:</div>
      <Grid
      mx={{base: 0, md: 4, lg: 6, xl: 8}}
        justifyContent="center"
        alignItems={{ md: "center" }}
        gap="6"
        templateColumns={{ md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
      >
        {pets?.map((pet) => {
          return <PetCard key={pet.id} pet={pet} />;
        })}
      </Grid>
    </>
  );
};

export default PetsGrid;
