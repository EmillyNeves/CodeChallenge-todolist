import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    body: "Josefin Sans, sans-serif",
    heading: "Josefin Sans, sans-serif",
    mono: "Josefin Sans, sans-serif",
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#e4e5f1", "#161722")(props),
      },
    }),
  },
  colors: {
    dark: {
      background: "#161722",
      listBackground: "#25273c",
      title: "#fafafa",
      primary: "#cacde8", // normal text
      secondary: "#4d5066", // check text
      tertiary: "#4d5066", // divide line
      draggable: "#212336",
      blue: "#3a7bfd",
    },
    light: {
      background: "#e4e5f1",
      listBackground: "#fafafa",
      title: "#fafafa",
      primary: "#484b6a",
      secondary: "#9394a5",
      tertiary: "#d2d3db",
      draggable: "#f9eefe",
      blue: "#3a7bfd",
    },
  },
});

export default theme;
