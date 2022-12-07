"use client";

import { extendTheme } from "@chakra-ui/react";
import "@fontsource/italiana";
import {mode} from '@chakra-ui/theme-tools'


const theme = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles:{
    global:(props)=> ( {
      body: {
        bg: mode( '#EFF6E0' , '#283D3B')(props),
        color: mode( '#283D3B' , '#fff')(props),
      },
    }),
  },
  fonts: {
    body: `sans-serif, 'Italiana'`,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  components: {
    Link: {
      baseStyle: {
        // normal styling
        textDecoration: "none",
        // hover styling goes here
        _hover: {
          textDecoration: "none",
        },
      },
    }
  }
};

export default extendTheme(theme);
