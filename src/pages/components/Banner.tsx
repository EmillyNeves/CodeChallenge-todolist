import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Center,
} from "@chakra-ui/react";

interface BannerProps {
  bg: string[];
}

export function Banner(props: BannerProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex
        height={["200", "45vh"]}
        overflow={"hidden"}
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
        objectFit="cover"
        backgroundImage={props.bg}
        alignItems="center"
      >
        <Text textColor={"white"}>TODO</Text>
        <Button onClick={toggleColorMode} bg="none">
          {colorMode === "light" ? (
            <img src="/icon-moon.svg" />
          ) : (
            <img src="/icon-sun.svg" />
          )}
        </Button>
      </Flex>
    </Box>
  );
}
