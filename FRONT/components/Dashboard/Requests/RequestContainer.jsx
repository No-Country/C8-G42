import { Grid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useState } from "react";
import NoRequests from "./NoRequests";
import RequestCard from "./RequestCard";
import { getRequestThunk } from "../../../redux/slices/requestsSlice";

const RequestContainer = () => {
  const requests = useSelector((state) => state.requests);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    getSheltersRequests();
  }, []);

  const getSheltersRequests = async () => {
    setIsLoading(true);
    try {
      await dispatch(getRequestThunk());
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
        <>
          {requests.length > 0 ? (
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
          ) : (
            <NoRequests />
          )}
        </>
      )}
    </>
  );
};

export default RequestContainer;
