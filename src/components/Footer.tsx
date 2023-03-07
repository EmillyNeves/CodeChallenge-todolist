import React from "react";

import { Text, HStack, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  const secondary =
    colorMode === "light" ? "light.secondary" : "dark.secondary";
  return (
    <HStack alignItems="center" justifyContent="center">
      <Text color={secondary} my={5} fontSize={16}>
        Arraste e solte para reordenar a lista
      </Text>
    </HStack>
  );
};

export default Footer;
