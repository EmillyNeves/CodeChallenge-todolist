import React, { useState, KeyboardEvent } from "react";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Input, useColorMode } from "@chakra-ui/react";

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
    <HStack
      w={["80%", "60%"]}
      h="60px"
      mb={5}
      alignItems="center"
      bg={
        colorMode === "light" ? "light.listBackground" : "dark.listBackground"
      }
      py={4}
      px={12}
    >
      <Input
        fontSize={18}
        borderRadius="sm"
        variant="unstyled"
        placeholder="Adicionar nova tarefa ..."
        size="lg"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <IconButton
        display={inputText === "" ? "none" : "flex"}
        size="sm"
        aria-label="Adicionar tarefa"
        icon={<ArrowForwardIcon boxSize={6} />}
        onClick={() => handleKeyUp({ code: "Enter" } as KeyboardEvent)}
      />
    </HStack>
  );
};
