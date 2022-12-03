import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import Image from "next/image";
import AdoptIcon from "../../Icons/AdoptIcon";
import PawIcon from "../../Icons/Paw";
import pet from "./rocket.png";

const SinglePet = ({ pet, isOpen, onOpen, onClose }) => {
  return (
    <>
      <Button
        onClick={onOpen}
        w="fit-content"
        color={useColorModeValue("black", "white")}
        fontSize="1xl"
      >
        Ver más...
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={pet.shelter.name} src={pet.shelter.avatar} />
              <Box>
                <Heading size="sm">{pet.shelter.name}</Heading>
                <Text>
                  {pet.name}, tamaño: {pet.size}
                </Text>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Image
                src={pet.image ? `${pet.image}` : ""}
                alt="Mascota"
                width={400}
                height={300}
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </Flex>
            <Text>{pet.description}</Text>
          </ModalBody>
          <ModalFooter>
            <PawIcon />
            <AdoptIcon />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SinglePet;
