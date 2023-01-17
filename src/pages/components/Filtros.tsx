import { Text, HStack, useColorMode, Link } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";


const Filtros = () => {
  const [filtros,setFiltros] = useState<'all'|'active'|'completed'>('all');
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack   alignItems={"center"} justifyContent="center">
      {colorMode === "light" ? (
        <>
          <Link onClick={()=>setFiltros('all')}  color={"#9394a5"} fontSize={18}>
            All
          </Link>
          <Link onClick={()=>setFiltros('active')} color={"#9394a5"} fontSize={18}>
            Active
          </Link>
          <Link onClick={()=>setFiltros('all')} color={"#9394a5"} fontSize={18}>
            Completed
          </Link>
        </>
      ) : (
        <>
          <Text color={"#484b6a"} fontSize={18}>
            All
          </Text>
          <Text color={"#484b6a"} fontSize={18}>
            Active
          </Text>
          <Text color={"#484b6a"} fontSize={18}>
            Completed
          </Text>
        </>
      )}
    </HStack>
  );
};

export default Filtros;
