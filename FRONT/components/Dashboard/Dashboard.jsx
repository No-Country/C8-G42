"use client";
import { Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PetsAdoption from "./PetsAdoption";
import SideBar from "./SideBar";
import RequestContainer from "./Requests/RequestContainer";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);

  const [dashboardView, setDashboardView] = useState("pets");
  return (
    <>
      {!user && (
        <Flex
          justifyContent="center"
          alignItems="center"
          height="50vh"
          direction="column"
          gap="6"
        >
          <Text>Cargando info usuario ...</Text>
          <Spinner color="blue.500" />
        </Flex>
      )}
      {user && (
        <Grid gap="20px" templateColumns="minmax(130px, 1fr) minmax(170px, 4fr)">
          <SideBar setDashboardView={setDashboardView} user={user} />
          {dashboardView === "pets" ? <PetsAdoption /> : <RequestContainer />}
        </Grid>
      )}
    </>
  );
};

export default Dashboard;
