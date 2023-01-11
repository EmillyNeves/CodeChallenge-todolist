import React from "react";
import { useState } from "react";
import { Item } from "../types/item";
import {
  HStack,
  VStack,
  IconButton,
  Text,
  useColorMode,
  Checkbox,
  Flex,
  Icon,
} from "@chakra-ui/react";

type Props = {
  item: Item;
  completeTask(taskNameToDelete: string): void;
};

export const TodoList = ({ item, completeTask }: Props) => {
  const [isChecked, setIsChecked] = useState(item.status);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems={"center"}  >
      <Checkbox
        pl={10}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      {isChecked === true ? (
        <>
          {colorMode === "light" ? (
            <Text  w={"80%"} color={"#9394a5"} fontSize={18} as="s" pl={10} my="4">
              {item.text}
            </Text>
          ) : (
            <Text  w={"80%"} color={"#484b6a"} fontSize={18} as="s" pl={10} my="4">
              {item.text}
            </Text>
          )}
          <>
            {" "}
            <IconButton
              bg=""
              isRound="true"
              onClick={() => {
                completeTask(item.text);
              }}
            >
              <img src="/icon-cross.svg" />
            </IconButton>
          </>
        </>
      ) : (
        <>
          {colorMode === "light" ? (
            <Text  w={"80%"} color={"#484b6a"} fontSize={18} pl={10} my="4">
              {item.text}
            </Text>
          ) : (
            <Text  w={"80%"}color={"#cacde8"} fontSize={18} pl={10} my="4">
              {item.text}
            </Text>
          )}
          <>
            <IconButton
              bg=""
              isRound="true"
              onClick={() => {
                completeTask(item.text);
              }}
            >
              <img src="/icon-cross.svg" />
            </IconButton>
          </>
        </>
      )}
    </Flex>
  );
};
