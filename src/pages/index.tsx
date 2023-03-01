import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

import { IItem } from "@/@types/item";
import { AddTodo } from "@/components/AddTodo";
import { Banner } from "@/components/Banner";
import Filtros from "@/components/Filtros";
import Footer from "@/components/Footer";
import { TodoList } from "@/components/TodoList";
import FilterStore from "@/store/filter";
import {
  Box,
  useColorMode,
  VStack,
  Divider,
  Show,
  Text,
  Table,
  Tbody,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useStoreState } from "pullstate";

import { addTask } from "../store/task/actions";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const { filter } = useStoreState(FilterStore);

  const [list, setList] = useState<IItem[]>([]);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list") || "[]"));
  }, [list]);

  const handleDrag = (param: DropResult) => {
    if (!param.destination) return;
    const srcI = param.source.index;
    const desI = param.destination.index;

    const [tempList] = list.splice(srcI, 1);
    list.splice(desI, 0, tempList);

    localStorage.setItem("list", JSON.stringify(list));
  };

  const handleFilter = (filter: "all" | "active" | "completed") => {
    if (filter === "active") {
      return list.filter((item) => !item.status);
    }
    if (filter === "completed") {
      return list.filter((item) => item.status);
    }
    return list;
  };

  const filteredList: IItem[] = handleFilter(filter);

  const background = colorMode === "light" ? "#fafafa" : "#25273c";
  const borderColor = colorMode === "light" ? "#d2d3db" : "#4d5066";

  return (
    <>
      {colorMode === "light" ? (
        <Banner bg={["bg-mobile-light.jpg", "bg-desktop-light.jpg"]} />
      ) : (
        <Banner bg={["bg-mobile-dark.jpg", "bg-desktop-dark.jpg"]} />
      )}
      <Box>
        <DragDropContext onDragEnd={(param) => handleDrag(param)}>
          <VStack>
            <AddTodo onEnter={addTask} />
            <VStack
              align="stretch"
              borderRadius="sm"
              w={["80%", "60%"]}
              bg={background}
            >
              {list.length === 0 || filteredList.length === 0 ? (
                <VStack h="60px" w="100%" justify="center" borderBottom="2px solid" borderColor={borderColor}>
                  <Text
                    fontSize="xl"
                    color={
                      colorMode === "light"
                        ? "blackAlpha.300"
                        : "whiteAlpha.300"
                    }
                  >
                    {filter === "active"
                      ? "Nenhuma tarefa para concluir"
                      : filter === "completed"
                      ? "Nenhuma tarefa concluída"
                      : "Nenhuma tarefa definida"}
                  </Text>
                </VStack>
              ) : (
                <React.StrictMode>
                  <Droppable droppableId="droppable1">
                    {(provided, _) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {filteredList.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={`draggable-${item.id}`}
                            index={index}
                          >
                            {(provided, _) => (
                              <Table
                                variant="simple"
                                width="100%"
                                h="60px"
                                borderBottom="2px solid"
                                borderColor={borderColor}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Tbody w="100%">
                                  <TodoList key={index} item={item} />
                                </Tbody>
                              </Table>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </React.StrictMode>
              )}

              <Show above="md">
                <Filtros />
              </Show>
            </VStack>
            <Show below="md">
              <Filtros />
            </Show>
            <Footer />
          </VStack>
        </DragDropContext>
      </Box>
    </>
  );
};
export default Home;
