const { extendTheme } = require("@chakra-ui/react");
import "@fontsource/italiana";

const theme = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
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
