import React from "react";
import { Box, HStack, Input, useColorMode } from "@chakra-ui/react";
import { useState, KeyboardEvent } from "react";

type Props = {
  onEnter: (todoItem: string) => void;
};

export const AddTodo = ({ onEnter }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <>
      {colorMode === "light" ? (
        <Input
          bg={"#fafafa"}
          fontSize={18}
          borderRadius="sm"
          w={["80%", "50%"]}
          mb={5}
          p={4}
          pl={20}
          variant="unstyled"
          placeholder="Creat a new todo..."
          size="lg"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      ) : (
        <Input
          bg={"#25273c"}
          fontSize={18}
          borderRadius="sm"
          w={["80%", "50%"]}
          mb={5}
          p={4}
          pl={20}
          variant="unstyled"
          placeholder="Creat a new todo..."
          size="lg"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      )}
    </>
  );
};
