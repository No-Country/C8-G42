const { extendTheme } = require("@chakra-ui/react");

const theme = {
  config: {
    initialColorMode: "ligth",
    useSystemColorMode: true,
  },
  styles: {
    global: {},
  },
  breakpoints : {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  '2xl': '1536px',
  }
};

export default extendTheme(theme);
