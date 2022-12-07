import { useDisclosure, useColorMode, Flex } from "@chakra-ui/react";
import ToggleColorMode from "./theme/ToggleColorMode";
import LogoBox from "../../Icons/Logo";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchUserData } from "../../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { setPetsFamilyFilter } from "../../redux/slices/petsFamilySlice";
import { useUser } from "@auth0/nextjs-auth0";
import { fetchUser } from "../../redux/slices/userSlice";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const NavbarContainer = ({ children }) => {
  const { user: userAuth0, isLoading: loading } = useUser();
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userAuth0?.TokenAuth0) {
      console.log("userAuth0: ", userAuth0)
      localStorage.setItem("token", userAuth0?.TokenAuth0);
      const email = userAuth0?.email;
      if (!user) {
        console.log("useEffect: ",{email})

        dispatch(fetchUser({email}));
      }
    }
    localStorage.setItem("token", userAuth0?.TokenAuth0);
    console.log({ user });
  }, [userAuth0]);

  return (
    <>
    </>
  );
};

export default NavbarContainer;
