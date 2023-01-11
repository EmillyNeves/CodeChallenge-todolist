import { Text, HStack, useColorMode } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack alignItems={"center"} justifyContent="center">
      {colorMode === "light" ? (
        <Text color={"#9394a5"} my={5} fontSize={16}>
          Drag and drop to reorder list
        </Text>
      ) : (
        <Text color={'#484b6a'} my={5} fontSize={16}>
          Drag and drop to reorder list
        </Text>
      )}
    </HStack>
  );
};

export default Footer;
