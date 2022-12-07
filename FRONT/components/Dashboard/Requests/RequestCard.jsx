import React from "react";
/* import Image from "next/image"; */
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Box,
  Image,
  CardFooter,
  Flex,
} from "@chakra-ui/react";
import UserRequest from "./UserRequest";

const RequestCard = ({ request }) => {
  const pet = request[0].pet;

  return (
    <div>
      <Box>
        <Card maxW={{ base: "sm", md: "none" }}>
          <CardBody>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                w={{ base: 150, md: 200, lg: 300 }}
                height={{ base: 200, lg: 300 }}
                src={pet.image ? `${pet.image}` : ""}
                alt="animal photo"
                objectFit="contain"
                borderradius="lg"
              />
            </div>
            <Stack mt="6" spacing="3">
              <Heading size="md">
                {pet.name}, tamaño: {pet.size}
              </Heading>
              <Text>{pet.description}</Text>
            </Stack>
          </CardBody>
          <hr />
          <CardFooter flexDirection={"column"}>
            <Heading mb="30px" size="sm">Users Requests</Heading>
            <Flex flexDirection="column" gap="25px">
              {request.map((eachRequest) => (
                <UserRequest key={eachRequest.id} request={eachRequest} />
              ))}
            </Flex>
          </CardFooter>
        </Card>
      </Box>
    </div>
  );
};

export default RequestCard;
