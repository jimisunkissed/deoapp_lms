import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Icon,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import Color from "../../Color";

function CreateStep3() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1 } = Color;

  // Navigate
  const navigate = useNavigate();

  // Select useState
  const [price, setPrice] = useState(0);

  // Price Plan
  const pricePlan = [
    { head: "One time purchase", detail: "Your customer pays once" },
    { head: "Payment plan", detail: "Set a fixed number of monthly payments" },
    { head: "Subscription", detail: "Set up recurring payments" },
    { head: "Free", detail: "Allow access to your content free of charge" },
  ];

  return (
    <VStack h="100%" w="100%" bg={lightgray} justify="center">
      <VStack
        w="100%"
        maxW="550px"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        spacing={1}
        p="25px"
      >
        <Flex w="100%" justify="space-between">
          <Text fontSize="15px" fontWeight="500">
            3/4
          </Text>
          <Center onClick={() => navigate("/create/course")}>
            <Icon as={LuX} />
          </Center>
        </Flex>
        <Text w="100%" fontSize="35px" fontWeight="500" textAlign="center">
          Set a price
        </Text>
        <Text w="90%" fontSize="14px" color={darkgray} textAlign="center">
          You can always change this later.
        </Text>
        <VStack w="100%" spacing="15px">
          {pricePlan.map((info, index) => (
            <VStack
              key={index}
              h="80px"
              w="100%"
              borderRadius="8px"
              borderWidth="1px"
              borderColor={index === price ? "black" : midgray}
              justify="center"
              spacing="0px"
              onClick={() => setPrice(index)}
            >
              <Text fontSize="24px" fontWeight="600">
                {info.head}
              </Text>
              <Text>{info.detail}</Text>
            </VStack>
          ))}
        </VStack>
        <Flex w="100%" justify="space-between" mt="25px">
          <Center
            h="35px"
            w="70px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate("/create/course/step-2")}
            transition="background-color 0.2s ease"
          >
            Previous
          </Center>
          <Center
            h="35px"
            w="70px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate("/create/course/step-4")}
            transition="background-color 0.2s ease"
          >
            Continue
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateStep3;
