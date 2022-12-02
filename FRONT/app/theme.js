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
};

export default extendTheme(theme);
