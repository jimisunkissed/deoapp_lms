import React from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import Color from "../../Color";

function CreateEfileStep1() {
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
            1/4
          </Text>
          <Center
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/efiles")}
          >
            <Icon as={LuX} />
          </Center>
        </Flex>
        <Text w="100%" fontSize="35px" fontWeight="500" textAlign="center">
          Informasi tentang e-File kamu
        </Text>
        <Text w="90%" fontSize="14px" color={darkgray} textAlign="center">
          Anda bisa mengubahnya nanti
        </Text>
        <FormControl w="100%">
          <FormLabel>Name Produk</FormLabel>
          <Input h="35px" w="100%" placeholder="Berikan nama" />
        </FormControl>
        <FormControl w="100%">
          <FormLabel>Deskripsi</FormLabel>
          <Input
            h="35px"
            w="100%"
            placeholder="Berikan deskripsi tentang apa yang terkandung di dalam produk eFile anda"
          />
        </FormControl>
        <FormControl w="100%">
          <FormLabel>Kategori</FormLabel>
          <Select
            h="35px"
            placeholder="Tentukan kategori untuk produk eFile anda"
          >
            <option value="option1">eBook</option>
            <option value="option2">Audiobook</option>
            <option value="option3">Gambar</option>
          </Select>
        </FormControl>
        <Flex w="100%" justify="space-between" mt="25px">
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate("/efiles")}
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
            onClick={() => navigate("/efiles/create/step-2")}
            transition="background-color 0.2s ease"
          >
            Selanjutnya
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateEfileStep1;