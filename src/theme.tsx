import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#341A41",
      100: "#EBD3F7",
      200: "#E2E8F0",
    },
    secondary: {
      50: "#FDF2F8",
      100: "#FCE7F3",
      200: "#FBCFE8",
    },
  },
  styles: {
    global: {
      body: {
        bgGradient: "linear-gradient(133.6deg, #301934 25.61%, #C61EAF 62.74%)",
        // bg: "#301934",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        bg: "#4F4CDA",
        color: `white`,
        border: `1px white solid`,
        _hover: {
          backgroundColor: "transparent",
          color: "#4F4CDA",
        },
      },
    },
  },
  fonts: {
    heading: "Exo, sans-serif",
    body: "Montserrat, sans-serif",
  },
});

export default theme;
