import { Flex, Grid } from "@chakra-ui/react";
import React from "react";

const Request = () => {
  return (
    <Grid
      mt={{ base: "40px", md: "80px" }}
      justifyContent="center"
      gridTemplateColumns={{
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
        "2xl": "repeat(4, 1fr)",
      }}
    >
      <h1>HERE REQUESTS</h1>
    </Grid>
  );
};

export default Request;
