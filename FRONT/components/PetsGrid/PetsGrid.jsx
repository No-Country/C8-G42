import React, { useEffect, useState } from "react";
import { Grid, Flex } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import PetCard from "../PetCard/PetCard";
import PaginationBtnItems from "./PaginationBtnItems";

const PetsGrid = ({ pets }) => {
  const [page, setPage] = useState(1);
  const [petsByPage, setPetsByPage] = useState(12);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);

  useEffect(() => {
    setPage(1);
    setMaxPageNumberLimit(4);
    setMinPageNumberLimit(1);
  }, [pets]);

  const totalAmountOfPages = Math.ceil(pets?.length / petsByPage);
  const maxPages = [];
  for (let i = 1; i <= totalAmountOfPages; i++) {
    maxPages.push(i);
  }
  const indexOfLastItem = page * petsByPage;
  const indexOfFirstItem = indexOfLastItem - petsByPage;
  const paginatedPets = pets?.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (pageToChange) => {
    setPage(pageToChange);
    if (pageToChange === maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 1);
      setMinPageNumberLimit(minPageNumberLimit + 1);
    }
    if (pageToChange === minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - 1);
      setMinPageNumberLimit(minPageNumberLimit - 1);
    }
  };
  return (
    <>
      <Flex justifyContent="center" gap="5px" mb={4}>
        {page > 1 && (
          <ArrowBackIcon
            style={{ cursor: "pointer" }}
            boxSize="9"
            onClick={() => changePage(page - 1)}
          />
        )}
        {maxPages.map((number) => {
          if (number < maxPageNumberLimit + 1 && number >= minPageNumberLimit) {
            return (
              <PaginationBtnItems
                key={number}
                number={number}
                changePage={changePage}
                actualPage={page}
              />
            );
          }
        })}
        {page < maxPages.length && (
          <ArrowForwardIcon
            style={{ cursor: "pointer" }}
            boxSize="9"
            onClick={() => changePage(page + 1)}
          />
        )}
      </Flex>
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
        {paginatedPets?.map((pet) => {
          console.log(pet)
          return <PetCard key={pet.id} pet={pet} />;
        })}
      </Grid>
      <Flex justifyContent="center" gap="5px" mt={4}>
        {page > 1 && (
          <ArrowBackIcon
            style={{ cursor: "pointer" }}
            boxSize="9"
            onClick={() => changePage(page - 1)}
          />
        )}
        {maxPages.map((number) => {
          if (number < maxPageNumberLimit + 1 && number >= minPageNumberLimit) {
            return (
              <PaginationBtnItems
                key={number}
                number={number}
                changePage={changePage}
                actualPage={page}
              />
            );
          }
        })}
        {page < maxPages.length && (
          <ArrowForwardIcon
            style={{ cursor: "pointer" }}
            boxSize="9"
            onClick={() => changePage(page + 1)}
          />
        )}
      </Flex>
    </>
  );
};

export default PetsGrid;
