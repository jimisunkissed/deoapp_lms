import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import Color from "../../Color";

function CreateStep1() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1 } = Color;

  // Navigate
  const navigate = useNavigate()

  return (
    <VStack h="100%" w="100%" bg={lightgray} justify="center">
      <VStack
        w="100%"
        maxW="750px"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        spacing={1}
        p="25px"
      >
        <Flex w="100%" justify="space-between">
          <Text fontSize="15px" fontWeight="500">
            1/4
          </Text>
          <Center onClick={() => navigate('/create/course')}>
            <Icon as={LuX} />
          </Center>
        </Flex>
        <Text w="100%" fontSize="35px" fontWeight="500" textAlign="center">
          Tell us about your course
        </Text>
        <Text w="90%" fontSize="14px" color={darkgray} textAlign="center">
          We'll use this information to customize your course. You can change it
          any time.
        </Text>
        <Text w='100%'fontSize="14px" color={darkgray}>
          Course title
        </Text>
        <Input
          h="40px"
          w="100%"
          borderRadius="10px"
          borderColor={midgray}
          placeholder="Give it a name"
          fontSize="14px"
        />
        <Flex w="100%" justify="space-between" mt='25px'>
          <Center
            h="35px"
            w="70px"
            bg={lightblue1}
            borderRadius='8px'
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate('/create/course')}
            transition="background-color 0.2s ease"
          >
            Previous
          </Center>
          <Center
            h="35px"
            w="70px"
            bg={lightblue1}
            borderRadius='8px'
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate('/create/course/step-2')}
            transition="background-color 0.2s ease"
          >
            Continue
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateStep1;
