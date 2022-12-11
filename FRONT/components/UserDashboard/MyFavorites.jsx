"use client";
import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getPage } from "../../redux/api";
import PetCard from "../PetCard/PetCard";
import PetsGrid from "../PetsGrid/PetsGrid";

const MyFavorites = ({ pets }) => {
  const [favorites, setFavorites] = useState('');

  const fetchFavorites = async () => {
    const { data } = await getPage("/pets/favorite/self");
    setFavorites(data.favoritePets);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);



  if (favorites) {
    return (
      <>
        <Grid
          mx={{ base: 0, md: 4, lg: 6, xl: 8 }}
          justifyContent="center"
          alignItems={{ md: "center" }}
          gap="6"
          templateColumns={{
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
        >
          {favorites?.map(( pet ) => {
            return <PetCard key={pet.pet.id} pet={pet.pet} />;
          })}
        </Grid>
      </>
    );
  }
};

export default MyFavorites;
