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
    if (uncompletedTasks.length === 0) return "Nenhuma tarefa restante";
    if (uncompletedTasks.length === 1) return "tarefa restante";
    return "tarefas restantes";
  };

  return (
    <HStack alignItems="center" justifyContent="space-between" px={5}>
      <>
        <Stack>
          <Show above="md">
            <HStack textAlign="center">
              {uncompletedTasks.length !== 0 && (
                <Text>{uncompletedTasks.length}</Text>
              )}
              <Text color={textColor}>{remainingTasks()}</Text>
            </HStack>
          </Show>
        </Stack>
        <HStack gap={3}>
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

        <Stack>
          <Show above="md">
            <Button
              variant="link"
              textAlign="center"
              color={textColor}
              onClick={deleteCompletedTasks}
            >
              Limpar concluídas
            </Button>
          </Show>
        </Stack>
      </>
    </HStack>
  );
};

export default Filtros;
