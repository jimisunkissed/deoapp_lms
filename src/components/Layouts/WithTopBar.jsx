import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavigationBar from "../NavigationBar/NavigationBar";

function WithTopBar({ children }) {
  return (
    <Flex flexDirection="column" minH="100vh" w="100vw" overflowX="hidden">
      <Box w="100%" bg="white" position="fixed" zIndex='1'>
        <NavigationBar />
      </Box>
      <Box minH="calc(100% - 100px)" w="100%" mt="100px">
        {children}
      </Box>
    </Flex>
  );
}

export default WithTopBar;
