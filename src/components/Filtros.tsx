import React, { useEffect, useState } from "react";

import { IItem } from "@/@types/item";
import FilterStore from "@/store/filter";
import {
  Text,
  Show,
  HStack,
  useColorMode,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useStoreState } from "pullstate";

import { setFilter } from "../store/filter/actions";
import { deleteCompletedTasks } from "../store/task/actions";

const Filtros = () => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "light" ? "light.primary" : "dark.primary";

  const [list, setList] = useState<IItem[]>([]);
  const { filter } = useStoreState(FilterStore);
  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list") || "[]"));
  }, [list]);

  const handleFilterColor = (f: "all" | "active" | "completed") => {
    if (filter === f) {
      return "blue.500";
    }
    return textColor;
  };
  const uncompletedTasks = list.filter((item) => !item.status);

  const remainingTasks = () => {
    if (uncompletedTasks.length === 0) return "Sem tarefas restantes";
    if (uncompletedTasks.length === 1) return "tarefa restante";
    return "tarefas restantes";
  };

  return (
    <HStack alignItems="center" justifyContent="space-around" gap={3}>
      <>
        <Stack>
          <Show above="md">
            <Flex
              flexDir="row"
              flexWrap="wrap"
              align="center"
              justify="center"
              textAlign="center"
              gap={2}
            >
              {uncompletedTasks.length !== 0 && (
                <Text>{uncompletedTasks.length}</Text>
              )}
              <Text color={textColor}>{remainingTasks()}</Text>
            </Flex>
          </Show>
        </Stack>
        <HStack gap={3} m="0 !important">
          <Button
            variant="link"
            onClick={() => setFilter("all")}
            color={handleFilterColor("all")}
            fontSize={16}
          >
            Todos
          </Button>
          <Button
            variant="link"
            onClick={() => setFilter("active")}
            color={handleFilterColor("active")}
            fontSize={16}
          >
            Ativos
          </Button>
          <Button
            variant="link"
            onClick={() => setFilter("completed")}
            color={handleFilterColor("completed")}
            fontSize={16}
          >
            Completados
          </Button>
        </HStack>

        <Stack h="100%">
          <Show above="md">
            <Text as="button" onClick={deleteCompletedTasks} color={textColor}>
              Limpar concluídas
            </Text>
          </Show>
        </Stack>
      </>
    </HStack>
  );
};

export default Filtros;
