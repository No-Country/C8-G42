import { Avatar, Grid, Text, Flex } from "@chakra-ui/react";
import React from "react";

const UserRequest = ({ request }) => {
  
  return (
    <Grid templateColumns="1fr 2fr">
      <Flex flexDirection="column">
        <Avatar
          name={request.user.firstName + " " + request.user.lastName}
          src={request.user.avatar ? request.user.avatar : ""}
        />
        <Text mt="6px">
          {request.user.firstName + " " + request.user.lastName}
        </Text>
      </Flex>
      <Flex alignItems="center" >
        <Text>{request.message}</Text>
      </Flex>
    </Grid>
  );
};

export default UserRequest;
