"use client";
import { Provider } from "react-redux";
import { store } from "./../redux/store/index";
import { ChakraProvider } from "@chakra-ui/react";
import MobileNavbar from "../components/Navbar/MobileNavbar";
import Navbar from "../components/Navbar/Navbar";
import theme from "./theme";
import Messenger from "./../components/Messenger/Messenger";

function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <Navbar />
            <Messenger />
            {children}
            <MobileNavbar />
          </ChakraProvider>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
