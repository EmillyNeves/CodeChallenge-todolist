import { Text, HStack, useColorMode } from "@chakra-ui/react";
import React from "react";

const Filtros = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack my={2} alignItems={"center"} justifyContent="center">
      {colorMode === "light" ? (
        <>
          <Text color={"#9394a5"} fontSize={18}>
            All
          </Text>
          <Text color={"#9394a5"} fontSize={18}>
            Active
          </Text>
          <Text color={"#9394a5"} fontSize={18}>
            Completed
          </Text>
        </>
      ) : (
        <>
          <Text color={"#484b6a"} fontSize={18}>
            All
          </Text>
          <Text color={"#484b6a"} fontSize={18}>
            Active
          </Text>
          <Text color={"#484b6a"} fontSize={18}>
            Completed
          </Text>
        </>
      )}
    </HStack>
  );
};

export default Filtros;
