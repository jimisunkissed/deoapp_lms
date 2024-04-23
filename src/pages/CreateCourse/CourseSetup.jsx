import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Color from "../../Color";

function CourseSetup() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1 } = Color;

  // Navigate
  const navigate = useNavigate();

  return (
    <VStack h="100%" w="100%" bg={lightgray} spacing="25px" p="25px">
      <VStack
        w="100%"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
      >
        <HStack>
          <Text>Setup Guide</Text>
        </HStack>
        <Flex w="100%">
          <Text onClick={() => navigate('/course/curriculum')}>Curriculum</Text>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CourseSetup;
