import React from "react";
import {
  Box,
  Flex,
  useColorMode,
  Heading,
  IconButton,
} from "@chakra-ui/react";

interface BannerProps {
  bg: string[];
}

export function Banner(props: BannerProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      height={["200", "45vh"]}
      overflow={"hidden"}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      objectFit="cover"
      backgroundImage={props.bg}
    >
      <Flex
        height={["150", "25vh"]}
        alignItems={'center'}
        justifyContent="center"
      >
        <Heading pr={["40%", "35%"]} textColor={"white"} as="b" fontSize={["32", "40"]}>
          T O D O
        </Heading>
        <IconButton onClick={toggleColorMode} bg="" isRound="true">
          {colorMode === "light" ? (
            <img src="/icon-moon.svg" />
          ) : (
            <img src="/icon-sun.svg" />
          )}
        </IconButton>
      </Flex>
    </Box>
  );
}
