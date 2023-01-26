import {
  Text,
  Show,
  HStack,
  useColorMode,
  Link,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Filtros = () => {
  const [filtros, setFiltros] = useState<"all" | "active" | "completed">("all");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack alignItems={"center"} justifyContent="center">
      {colorMode === "light" ? (
        <>
          <Stack>
            <Show above="md">
              <Text color={"#9394a5"} >items left</Text>
            </Show>{" "}
          </Stack>
          <Link
            onClick={() => setFiltros("all")}
            color={"#9394a5"}
            fontSize={16}
          >
            All
          </Link>
          <Link
            onClick={() => setFiltros("active")}
            color={"#9394a5"}
            fontSize={16}
          >
            Active
          </Link>
          <Link
            onClick={() => setFiltros("all")}
            color={"#9394a5"}
            fontSize={16}
          >
            Completed
          </Link>
          <Stack>
            <Show above="md">
              <Text color={"#9394a5"} >Clear Completed</Text>
            </Show>{" "}
          </Stack>
        </>
      ) : (
        <>
          <Stack>
            <Show above="md">
              <Text color={"#484b6a"} >items left</Text>
            </Show>
          </Stack>
          <Text color={"#484b6a"} fontSize={16}>
            All
          </Text>
          <Text color={"#484b6a"} fontSize={16}>
            Active
          </Text>
          <Text color={"#484b6a"} fontSize={16}>
            Completed
          </Text>
          <Stack>
            <Show above="md">
              <Text color={"#484b6a"}  >Clear Completed</Text>
            </Show>{" "}
          </Stack>
        </>
      )}
    </HStack>
  );
};

export default Filtros;
