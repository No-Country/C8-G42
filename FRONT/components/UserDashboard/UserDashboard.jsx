"use client";
import { Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "../Dashboard/SideBar";
import MyFavorites from "./MyFavorites";
import MyPets from "./MyPets";
import MyRequests from "./MyRequests";

const UserDashboard = () => {
  const user = useSelector((state) => state.user.user);
  const [dashboardView, setDashboardView] = useState("pets");
  // console.log({user})
  

  return (
    <>
      <Grid gap="20px" templateColumns="minmax(130px, 1fr) minmax(170px, 4fr)" marginTop="15" >
        <SideBar setDashboardView={setDashboardView} user={user} />
        {dashboardView === "pets" && <MyPets pets={user.pet} /> }
        {dashboardView === "requests" && <MyRequests requests={user.requests} /> }
        {dashboardView === "favorites" && <MyFavorites /> }
      </Grid>
    </>
  );
};

export default UserDashboard;
