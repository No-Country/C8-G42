import { Grid, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import RequestCard from "./RequestCard";

const RequestContainer = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(requests);

  useEffect(() => {
    getSheltersRequests();
  }, []);

  const getSheltersRequests = async () => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    try {
      const requestsRes = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/requests`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRequests(requestsRes.data.data.requests);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <Grid gridTemplateColumns="1fr">
          <Spinner size={"xl"} alignSelf="center" justifySelf={"center"} />
        </Grid>
      ) : (
        <Grid
          mr={{ base: "20px" }}
          mt={{ base: "40px", md: "80px" }}
          gap={{ base: "20px" }}
          justifyContent="center"
          gridTemplateColumns={{
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
        >
          {requests.map((request) => (
            <RequestCard key={request[0]?.id} request={request} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default RequestContainer;
