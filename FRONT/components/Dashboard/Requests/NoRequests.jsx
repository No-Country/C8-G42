import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const NoRequests = () => {
  return (
    <Grid mr="20px" gridTemplateColumns="1fr" alignItems="center" justifyContent="center">
      <Card boxShadow="dark-lg" rounded="md" width="fit-content" m="auto" align="center">
        <CardHeader>
          <Heading size="md">Currently you don't have any request</Heading>
        </CardHeader>
        <CardBody>
          <Text>In this section will appear the requests of pets made by an user</Text>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default NoRequests;
