import React from "react";

import { IItem } from "@/@types/item";
import { CloseIcon } from "@chakra-ui/icons";
import { IconButton, Text, useColorMode, HStack, Tr } from "@chakra-ui/react";

import { updateTask, deleteTask } from "../store/task/actions";
import { CheckboxStyled } from "./Checkbox";

interface TodoProps {
  item: IItem;
}

export const TodoList = ({ item }: TodoProps) => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "light" ? "light.primary" : "dark.primary";

  return (
    <Tr alignItems="center" justifyItems="center" h="60px">
      <HStack w="100%" justify="space-between" px={10}>
        <HStack minH="60px">
          <CheckboxStyled
            size="lg"
            isChecked={item.status}
            onChange={(e) => updateTask(item.id, e.target.checked)}
            fullRounded
            borderColor="gray"
          />
          <Text
            w="100%"
            color={textColor}
            fontSize={18}
            textDecoration={item.status ? "line-through" : "none"}
            wordBreak="break-all"
          >
            {item.text}
          </Text>
        </HStack>

        <IconButton
          aria-label="Delete"
          icon={<CloseIcon />}
          isRound
          bg="transparent"
          onClick={() => {
            deleteTask(item.id);
          }}
        />
      </HStack>
    </Tr>
  );
};
