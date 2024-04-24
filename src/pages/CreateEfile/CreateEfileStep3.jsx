import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import Color from "../../Color";
import { TbHelpCircleFilled } from "react-icons/tb";

function CreateEfileStep3() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1 } = Color;

  // Navigate
  const navigate = useNavigate();

  // Select useState
  const [price, setPrice] = useState(0);
  const [isDetail, setIsDetail] = useState(false);

  // Price Plan
  const pricePlan = [
    { head: "One time purchase", detail: "Your customer pays once" },
    { head: "Payment plan", detail: "Set a fixed number of monthly payments" },
    { head: "Free", detail: "Allow access to your content free of charge" },
    {
      head: `I don't know yet`,
      detail: "Skip this step for now, I will add it later",
    },
  ];

  return (
    <VStack h="100%" w="100%" bg={lightgray} justify="center" p="25px">
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
          <Center
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/courses")}
          >
            <Icon as={LuX} />
          </Center>
        </Flex>
        {/* Selection */}
        <VStack display={isDetail ? "none" : "flex"} w="100%" spacing={1}>
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
                bg={lightgray}
                borderRadius="8px"
                borderWidth="1px"
                borderColor={index + 1 === price ? "black" : midgray}
                justify="center"
                spacing="0px"
                _hover={{ cursor: "pointer" }}
                onClick={() => setPrice(index + 1)}
              >
                <Text fontSize="24px" fontWeight="600">
                  {info.head}
                </Text>
                <Text>{info.detail}</Text>
              </VStack>
            ))}
          </VStack>
        </VStack>
        {/* One time purchase */}
        <VStack display={isDetail && price === 1 ? "flex" : "none"}>
          <Text fontSize="22px">One-time purchase</Text>
          <Text>
            Students can fully access your product by paying a one-time amount.
          </Text>
          <HStack w="100%" align="end">
            <FormControl w="80%">
              <FormLabel>
                <HStack w="100%">
                  <Text>Price</Text>
                  <Center>
                    <Icon as={TbHelpCircleFilled} />
                  </Center>
                </HStack>
              </FormLabel>
              <Select h="35px" placeholder="Select currency">
                <option value="option1">IDR</option>
                <option value="option2">USD</option>
                <option value="option3">EUR</option>
              </Select>
            </FormControl>
            <NumberInput>
              <NumberInputField h="35px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          <FormControl w="100%">
            <FormLabel>
              <Text>Name</Text>
            </FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel>
              <Text>Subtitle</Text>
            </FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel>
              <Text>Detailed Description</Text>
            </FormLabel>
            <Textarea h="120px" w="100%" resize="none" />
          </FormControl>
        </VStack>
        {/* Payment Plan */}
        <VStack display={isDetail && price === 2 ? "flex" : "none"}>
          <Text fontSize="22px">Payment Plan</Text>
          <Text>
            Students will pay a set amount of monthly fees for indefinite full
            access to your product.
          </Text>
          <HStack w="100%" align="end">
            <FormControl w="80%">
              <FormLabel>
                <HStack w="100%">
                  <Text>Price</Text>
                  <Center>
                    <Icon as={TbHelpCircleFilled} />
                  </Center>
                </HStack>
              </FormLabel>
              <Select h="35px" placeholder="Select currency">
                <option value="option1">IDR</option>
                <option value="option2">USD</option>
                <option value="option3">EUR</option>
              </Select>
            </FormControl>
            <NumberInput>
              <NumberInputField h="35px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          <FormControl w="100%">
            <FormLabel>Number of monthly payments</FormLabel>
            <NumberInput>
              <NumberInputField h="35px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl w="100%">
            <FormLabel>Name</FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel>Subtitle</FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel>Detailed Description</FormLabel>
            <Textarea h="120px" w="100%" resize="none" />
          </FormControl>
        </VStack>
        {/* Free */}
        <VStack display={isDetail && price === 3 ? "flex" : "none"}>
          <Text fontSize="22px">Free</Text>
          <Text>
            Students can access your product by signing up for an account. There
            is no price.
          </Text>
          <FormControl w="100%">
            <FormLabel>Name</FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel>Subtitle</FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel>Detailed Description</FormLabel>
            <Textarea h="120px" w="100%" resize="none" />
          </FormControl>
        </VStack>
        {/* Navigate Button */}
        <Flex w="100%" justify="space-between" mt="25px">
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={
              isDetail
                ? () => setIsDetail(false)
                : () => navigate("/efiles/create/step-2")
            }
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
            onClick={
              isDetail || price === 4
                ? () => navigate("/efiles/create/step-4")
                : price != 0
                ? () => setIsDetail(true)
                : undefined
            }
            transition="background-color 0.2s ease"
          >
            Selanjutnya
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateEfileStep3;
