'use client';
import { ChakraProvider } from "@chakra-ui/react";
import MobileNavbar from "../components/Navbar/MobileNavbar";
import Navbar from "../components/Navbar/Navbar";
import theme from './theme';
import Messenger from "./../components/Messenger/Messenger";
// import { getUser } from "../redux/api";

import { UserProvider } from '@auth0/nextjs-auth0';


const RootLayout = ({ children }) => {
  // getUser();
  return (
    <html>
      <head />
      <body>
        <UserProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            <Messenger />
            {children}
            <MobileNavbar />
          </ChakraProvider>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
