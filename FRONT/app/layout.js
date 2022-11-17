'use client'
import { ChakraProvider } from "@chakra-ui/react";
import MobileNavbar from "../components/Navbar/MobileNavbar";
import Navbar from "../components/Navbar/Navbar";
import theme from './theme'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
      <ChakraProvider theme={theme}>
        <Navbar/>
        {children}
        <MobileNavbar />
        </ChakraProvider>
        </body>
    </html>
  )
}
