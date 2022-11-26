'use client'
import { ChakraProvider } from "@chakra-ui/react";
import MobileNavbar from "../components/Navbar/MobileNavbar";
import Navbar from "../components/Navbar/Navbar";
import theme from './theme'
import Messenger from "./../components/Messenger/Messenger"
import { getUser } from "../redux/api";

export default function RootLayout({ children }) {
  getUser();
  return (
    <html>
      <head />
      <body>
      <ChakraProvider theme={theme}>
        <Navbar/>
        <Messenger />
        {children}
        <MobileNavbar />
        </ChakraProvider>
        </body>
    </html>
  )
}
