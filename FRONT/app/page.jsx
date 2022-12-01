"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/usersSlice";
import { Flex, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PetsGrid from "../components/PetsGrid/PetsGrid";
import { fetchPets } from "../redux/slices/petsSlice";
import { useUser } from "@auth0/nextjs-auth0";

const page = () => {
  const { user, isLoading: loading } = useUser();
  useEffect(() => {
    if (user?.TokenAuth0) {
      localStorage.setItem("token", user?.TokenAuth0);
    }
  }, [user]);

  const loginHandler = () => {
    localStorage.setItem("token", user?.TokenAuth0);
  };

  const users = useSelector((state) => state.users.users);
  const pets = useSelector((state) => state.pets.pets);
  const isLoading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers({ limit: 10, offset: 5 }));
    dispatch(fetchPets({}));
  }, [user]);
  console.log({ users, pets });
  return (
    <Flex
      w="100%"
      mt={{ base: "10px", md: "60px" }}
      pos="relative"
      direction="column"
    >
      {/* Principal  */}

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            {" "}
            Si deseas iniciar sesión presiona:
            <Button
              onClick={() => {
                loginHandler();
              }}
            >
              <a href="/api/auth/login">Login</a>
            </Button>
          </p>
          {<PetsGrid pets={pets.data?.pets} />}
        </>
      )}
      {user && (
        <>
          <h2>Información del Usuario LOGUEADO: </h2>
          <img src={user.picture} width={"130px"} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>user: {user.name}</p>
          <p>
            <Button
              onClick={() => {
                localStorage.setItem("token", null);
              }}
            >
              <a href="/api/auth/logout">Cerrar sesión</a>
            </Button>
          </p>
          {/* {console.log("user: ", user)} */}
        </>
      )}
      {isLoading && <h2>Loading pets...</h2>}
      {user && <PetsGrid pets={pets.data?.pets} />}
    </Flex>
  );
};

export default page;
