import React from "react";

import { Box, Flex, useColorMode, Heading, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "public/icons";

interface BannerProps {
  bg: string[];
}

export function Banner({ bg }: BannerProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      overflow="hidden"
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      objectFit="cover"
      backgroundImage={bg}
      marginBottom={["10", "5"]}
    >
      <Flex
        height={["150", "25vh"]}
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          pr={["40%", "35%"]}
          bg="transparent"
          textColor="white"
          as="b"
          fontSize={["32", "40"]}
        >
          T O D O
        </Heading>
        <IconButton
          icon={
            colorMode === "light" ? (
              <SunIcon boxSize={7} />
            ) : (
              <MoonIcon boxSize={7} />
            )
          }
          bg="transparent"
          aria-label=""
          onClick={toggleColorMode}
          isRound
        />
      </Flex>
    </Box>
  );
}
