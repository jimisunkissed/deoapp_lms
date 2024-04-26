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
    { head: "Sekali bayar", detail: "Pelanggan membayar sekali" },
    {
      head: "Angsur",
      detail: "Bayar secara berangsur untuk jangka waktu yang tetap",
    },
    { head: "Gratis", detail: "Pelanggan mendapat akses tanpa membayar" },
    {
      head: `Saya belum tahu`,
      detail: "Lewati untuk sekarang, akan saya tambahkan nanti",
    },
  ];

  return (
    <VStack
      h="100%"
      w="100%"
      bg={lightgray}
      justify="center"
      p={{ base: "15px", md: "25px" }}
    >
      <VStack
        w="100%"
        maxW="550px"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        spacing={1}
        p={{base:'15px', md:"25px"}}
      >
        <Flex w="100%" justify="space-between">
          <Text fontSize="15px" fontWeight="500">
            3/4
          </Text>
          <Center
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/efiles")}
          >
            <Icon as={LuX} />
          </Center>
        </Flex>
        {/* Selection */}
        <VStack display={isDetail ? "none" : "flex"} w="100%" spacing={1}>
          <Text
            w="100%"
            fontSize={{ base: "24px", md: "35px" }}
            fontWeight="500"
            textAlign="center"
          >
            Tentukan harga
          </Text>
          <Text w="90%" fontSize="14px" color={darkgray} textAlign="center">
            Anda bisa mengubahnya nanti
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
                textAlign="center"
                justify="center"
                spacing="0px"
                p="15px"
                _hover={{ cursor: "pointer" }}
                onClick={() => setPrice(index + 1)}
              >
                <Text fontSize={{ base: "16px", md: "24px" }} fontWeight="600">
                  {info.head}
                </Text>
                <Text fontSize={{ base: "13px", md: "16px" }}>
                  {info.detail}
                </Text>
              </VStack>
            ))}
          </VStack>
        </VStack>
        {/* Sekali bayar */}
        <VStack display={isDetail && price === 1 ? "flex" : "none"} w="100%" spacing={1}>
          <Text fontSize={{ base: "18px", md: "22px" }} fontWeight="500">
            Sekali bayar
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }}>
            Pelanggan membayar sekali
          </Text>
          <HStack w="100%" align="end">
            <FormControl w="80%">
              <FormLabel>
                <HStack w="100%">
                  <Text fontSize={{ base: "14px", md: "16px" }}>Harga</Text>
                  <Center>
                    <Icon as={TbHelpCircleFilled} />
                  </Center>
                </HStack>
              </FormLabel>
              <Select
                h="35px"
                flexGrow={1}
                placeholder="Pilih Mata Uang"
                fontSize={{ base: "14px", md: "16px" }}
              >
                <option value="option1">IDR</option>
                <option value="option2">USD</option>
                <option value="option3">EUR</option>
              </Select>
            </FormControl>
            <NumberInput w="30%">
              <NumberInputField
                h="35px"
                fontSize={{ base: "14px", md: "16px" }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>Nama</FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>
              Deskripsi Singkat
            </FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>
              Deskripsi Lengkap
            </FormLabel>
            <Textarea h="120px" w="100%" resize="none" />
          </FormControl>
        </VStack>
        {/* Angsur */}
        <VStack display={isDetail && price === 2 ? "flex" : "none"} w="100%" spacing={1}>
          <Text fontSize={{ base: "18px", md: "22px" }} fontWeight="500">
            Angsur
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }}>
            Bayar secara berangsur untuk jangka waktu yang tetap
          </Text>
          <HStack w="100%" align="end">
            <FormControl w="80%">
              <FormLabel>
                <HStack w="100%">
                  <Text fontSize={{ base: "14px", md: "16px" }}>Price</Text>
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
              <NumberInputField
                h="35px"
                fontSize={{ base: "14px", md: "16px" }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>
              Banyak Pembayaran
            </FormLabel>
            <NumberInput>
              <NumberInputField
                h="35px"
                fontSize={{ base: "14px", md: "16px" }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>Nama</FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>
              Deskripsi Singkat
            </FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>
              Deskripsi Lengkap
            </FormLabel>
            <Textarea h="120px" w="100%" resize="none" />
          </FormControl>
        </VStack>
        {/* Gratis */}
        <VStack display={isDetail && price === 3 ? "flex" : "none"} w="100%" spacing={1}>
          <Text fontSize={{ base: "18px", md: "22px" }} fontWeight="500">
            Gratis
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }}>Pelanggan mendapat akses tanpa membayar</Text>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>Nama</FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>Deskripsi Singkat</FormLabel>
            <Input h="35px" w="100%" />
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>Deskripsi Lengkap</FormLabel>
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
