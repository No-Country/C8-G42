import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Heading,
  Button,
  Text,
  Box,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import SinglePet from "../SinglePet/SinglePet";

const PetCard = ({ pet }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Card maxW={{ base: "sm", md: "none" }}>
        <CardBody>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Image
              src={pet.image ? `${pet.image}` : ""}
              alt="animal photo"
              width={300}
              height={"100"}
              style={{ objectFit: "cover", height: "300px" }}
              borderRadius="lg"
            />
          </div>
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {pet.name}, tamaño: {pet.size}
            </Heading>
            <Text>{pet.description}</Text>
            <SinglePet
              pet={pet}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Adóptame
            </Button>
            <Button variant="ghost" colorScheme="blue">
              ❤
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default PetCard;
