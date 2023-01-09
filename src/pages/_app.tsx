import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = extendTheme({
  fonts: {
    body: "Josefin Sans, sans-serif",
    heading: "Josefin Sans, sans-serif",
    mono: "Josefin Sans, sans-serif",
  },
  darkTheme: {
    background: "#161722",
    listBackground: "#25273c",
    title: "#fafafa",
    primary: "#cacde8", // normal text
    secondary: "#4d5066", //check text
    tertiary: "#4d5066", //divide line
    draggable: "#212336",
    blue: "#3a7bfd",
  },
  lightTheme: {
    background: "#e4e5f1",
    listBackground: "#fafafa",
    title: "#fafafa",
    primary: "#484b6a",
    secondary: "#9394a5",
    tertiary: "#d2d3db",
    draggable: "#f9eefe",
    blue: "#3a7bfd",
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
