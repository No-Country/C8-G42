import React, { useEffect, useState } from "react";
import SinglePet from "../SinglePet/SinglePet";
import { Wrap, WrapItem, Center, Grid } from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons"
import PetCard from "../PetCard/PetCard";

const PetsGrid = ({ pets }) => {
  console.log("pets:", pets);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [petsByPage, setPetsByPage] = useState(itemsPerPage);
  const [pageNumberLimit, setPageNumberLimit] = useState(9);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(9);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const maxPages = [];
  for (let i = 1; i <= Math.ceil(pets.length / petsByPage); i++) {
    maxPages.push(i);
  }
  const indexOfLastItem = page * petsByPage;
  const indexOfFirstItem = indexOfLastItem - petsByPage;
  const paginatedPets = pets.slice(indexOfFirstItem, indexOfLastItem);

  console.log("paginated pets ", paginatedPets);

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <>
      <div>Listado de Mascotas para adopción:</div>
      <ArrowBackIcon />
      <Grid
        mx={{ base: 0, md: 4, lg: 6, xl: 8 }}
        justifyContent="center"
        alignItems={{ md: "center" }}
        gap="6"
        templateColumns={{ md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
      >
        {paginatedPets.map((pet) => {
          return <PetCard key={pet.id} pet={pet} />;
        })}
      </Grid>
    </>
  );
};

export default PetsGrid;
