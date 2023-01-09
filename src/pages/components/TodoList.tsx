import React from "react";
import { useState } from "react";
import { Item } from "../types/item";
import {
  HStack,
  VStack,
  Text,
  useColorMode,
  Checkbox,
  Flex,
  Icon,
} from "@chakra-ui/react";

type Props = {
  item: Item;
};

export const TodoList = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.status);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Checkbox
        pl={10}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      {isChecked === true ? (
        <>
          {colorMode === "light" ? (
            <Text color={"#9394a5"} fontSize={18} as="s" pl={10} my="4">
              {item.text}
            </Text>
          ) : (
            <Text color={"#484b6a"} fontSize={18} as="s" pl={10} my="4">
              {item.text}
            </Text>
          )}
        </>
      ) : (
        <>
          {colorMode === "light" ? (
            <Text color={"#484b6a"} fontSize={18} pl={10} my="4">
              {item.text}
            </Text>
          ) : (
            <Text color={"#cacde8"} fontSize={18} pl={10} my="4">
              {item.text}
            </Text>
          )}
        </>
      )}
    </Flex>
  );
};
