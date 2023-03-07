import React, { useState, KeyboardEvent } from "react";

import { HStack, Input, useColorMode } from "@chakra-ui/react";
import { CheckboxStyled } from "./Checkbox";

type Props = {
  onEnter: (todoItem: string) => void;
};

export const AddTodo = ({ onEnter }: Props) => {
  const { colorMode } = useColorMode();
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.keyCode === 13 && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <>
      <HStack
        bg={
          colorMode === "light" ? "light.listBackground" : "dark.listBackground"
        }
        fontSize={18}
        borderRadius="sm"
        w={["80%", "60%"]}
        mb={5}
        p={4}
        pl={10}
      >
        <CheckboxStyled
          size="lg"
          isChecked={false}
          fullRounded
          borderColor="gray"
        />
        <Input
          variant="unstyled"
          placeholder="Adicionar nova tarefa ..."
          size="lg"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </HStack>
    </>
  );
};
