import React, {useState} from "react";
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

function CreateEfileStep2() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1 } = Color;

  // Navigate
  const navigate = useNavigate();

  // Select
  const [ select, setSelect ] = useState(0)

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
            2/4
          </Text>
          <Center
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/efiles")}
          >
            <Icon as={LuX} />
          </Center>
        </Flex>
        <Text w="100%" fontSize="35px" fontWeight="500" textAlign="center">
          Tambahkan Gambar
        </Text>
        <Text w="90%" fontSize="14px" color={darkgray} textAlign="center">
          Gambar akan ditampilkan saat checkout dan selama pelanggan melihat produk Unggah satu atau tentukan nanti saja.
        </Text>
        <SimpleGrid columns={2} w="100%" spacing="15px">
          <VStack
            w="100%"
            h="100%"
            bg={lightgray}
            borderRadius="10px"
            borderWidth="1px"
            borderColor={select === 1 ? 'black' : midgray}
            p="20px"
            onClick={() => setSelect(1)}
          >
            <Text fontWeight="600">Unggah gambar</Text>
            <Text>Rasio Aspek: 16:9</Text>
            <Text>Ukuran yang direkomendasikan: 1024x576</Text>
            <Text>Gunakan area unggah untuk mengecek gambar</Text>
          </VStack>
          <VStack
            w="100%"
            h="100%"
            bg={lightgray}
            borderRadius="10px"
            borderWidth="1px"
            borderColor={select == 2 ? 'black' : midgray}
            p="20px"
            onClick={() => setSelect(2)}
          >
            <Text>Saya tidak punya gambar</Text>
            <Text>Lewatkan sekarang, saya akan tambahkan nanti</Text>
          </VStack>
        </SimpleGrid>
        <Flex w="100%" justify="space-between" mt="25px">
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate("/efiles/create/step-1")}
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
            onClick={() => navigate("/efiles/create/step-3")}
            transition="background-color 0.2s ease"
          >
            Selanjutnya
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateEfileStep2;
