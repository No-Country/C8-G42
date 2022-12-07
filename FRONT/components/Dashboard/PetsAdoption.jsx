import { Flex, Button, useDisclosure, Box } from "@chakra-ui/react";
import React from "react";
import CardPet from "./CardPet";
import NewPet from "./NewPet";

const PetsAdoption = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex mt={{ base: "40px", md: "80px" }} direction="column">
      <Button ml="5px" bg="#AEC3B0" width="200px" onClick={onOpen}>
        Agregar Mascota
      </Button>
      <NewPet isOpen={isOpen} onClose={onClose} />
      <CardPet />
    </Flex>
  );
};

export default PetsAdoption;
