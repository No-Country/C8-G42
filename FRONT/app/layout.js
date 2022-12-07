"use client";
import { Provider } from "react-redux";
import { store } from "./../redux/store/index";
import { ChakraProvider } from "@chakra-ui/react";
import MobileNavbar from "../components/Navbar/MobileNavbar";
import Navbar from "../components/Navbar/Navbar";
import theme from "./theme";
import Messenger from "./../components/Messenger/Messenger";
import { UserProvider } from "@auth0/nextjs-auth0";
import Head from "./head";


const RootLayout = ({ children }) => {

  return (
    <html>
      <Head/>
      <body>
        <UserProvider>
          <Provider store={store}>
            <ChakraProvider theme={theme}>
              {children}
              <Navbar />
              <MobileNavbar />
              <Messenger />
            </ChakraProvider>
          </Provider>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;