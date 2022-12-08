import { Avatar, Grid, Text, Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getRequestThunk } from "../../../redux/slices/requestsSlice";
import { setState, setMessage } from "../../../redux/slices/uiSlice";

const UserRequest = ({ request }) => {
  const dispatch = useDispatch();
  const resolveRequest = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}requests/resolve/${request.id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(setState("success"));
      dispatch(setMessage("La request se ha resuelto exitosamente"));
    } catch (error) {
      dispatch(setState("error"));
      dispatch(setMessage("Ha ocurrido un error intentelo de nuevo"));
    } finally {
      dispatch(getRequestThunk());
    }
  };

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
      <Flex alignItems="center">
        <Text>{request.message}</Text>
      </Flex>
      <Button onClick={resolveRequest} mt={4} gridColumn="1/3">
        Resolve Request
      </Button>
    </Grid>
  );
};

export default UserRequest;
