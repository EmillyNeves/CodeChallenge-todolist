import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import theme from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>TODO app</title>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
