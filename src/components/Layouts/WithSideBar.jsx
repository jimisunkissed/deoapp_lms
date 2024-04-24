import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from '../SideBar/SideBar'

function WithSideBar({ children }) {
  return (
    <Flex minH="100vh" w="100vw" overflowX="hidden">
      <Box minh="100%" bg='white' position="fixed">
        <SideBar />
      </Box>
      <Box minH='100%' w="calc(100% - 120px)" ml="120px">
        {children}
      </Box>
    </Flex>
  );
}

export default WithSideBar;
