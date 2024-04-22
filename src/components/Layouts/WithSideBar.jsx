import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from '../SideBar/SideBar'

function WithSideBar({ children }) {
  return (
    <Flex h="100vh" w="100vw" overflowX="hidden">
      <Box h="100%" position="fixed">
        <SideBar />
      </Box>
      <Box h='100%' w="calc(100% - 120px)" ml="120px">
        {children}
      </Box>
    </Flex>
  );
}

export default WithSideBar;
