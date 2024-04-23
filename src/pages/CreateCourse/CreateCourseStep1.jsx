import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  HStack,
  FormControl,
  FormLabel,
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

function CreateCourseStep1() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1 } = Color;

  // Navigate
  const navigate = useNavigate();

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
            1/3
          </Text>
          <Center
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/courses")}
          >
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
        <FormControl w="100%">
          <FormLabel>Name Kursus</FormLabel>
          <Input h="35px" w="100%" placeholder="Berikan nama" />
        </FormControl>
        <Flex w="100%" justify="space-between" mt="25px">
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate("/courses")}
            transition="background-color 0.2s ease"
          >
            Sebelumnya
          </Center>
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate("/courses/create/step-2")}
            transition="background-color 0.2s ease"
          >
            Selanjutnya
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateCourseStep1;
