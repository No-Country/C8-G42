"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const page = () => {
  const user = useSelector((state) => state.user.user);
  console.log({user})
  return (
    <>Dashboard</>
  );
};

export default page;
