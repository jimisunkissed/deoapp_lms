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
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Color from "../../Color";
import { FaPencil } from "react-icons/fa6";
import { LuPlusCircle } from "react-icons/lu";
import { FcGallery } from "react-icons/fc";

function EfileSetup() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, midblue1 } =
    Color;

  // Curriculum
  const [section, setSection] = useState([
    { title: "Section1", lesson: ["Lesson1", "Lesson2"] },
    { title: "Section2", lesson: ["Lesson1", "Lesson2", "Lesson3"] },
  ]);

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
        p="25px"
      >
        <Text w="100%" fontSize="24px" fontWeight="600">
          Pengaturan Efile
        </Text>
        <Flex w="100%" gap="20px">
          {/* Left Column */}
          <VStack w="60%" spacing={2}>
            <Text w="100%" fontSize="18px" fontWeight="600">
              Atur Detil Produk
            </Text>
            <VStack
              w="100%"
              borderRadius="8px"
              borderWidth="1px"
              borderColor={midgray}
              p="15px"
            >
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600">Deskripsi Produk</Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} />
                  <Text fontSize="14px">Ubah Deskripsi</Text>
                </HStack>
              </HStack>
              <Text w="100%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                sit perspiciatis culpa sunt quidem! Pariatur, dicta debitis.
                Culpa eveniet, harum rerum totam nisi reiciendis ex
                reprehenderit laborum velit eos saepe neque, perspiciatis unde
                sint voluptate assumenda quae, non maxime mollitia perferendis
                corporis illo! Enim excepturi, voluptatibus dolor esse illo
                laudantium.
              </Text>
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600">Kategori Produk</Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} />
                  <Text fontSize="14px">Ubah Kategori</Text>
                </HStack>
              </HStack>
              <Text w="100%">
                ebook
              </Text>
            </VStack>
            <Text w="100%" fontSize="18px" fontWeight="600">
              Jual produk anda
            </Text>
            <VStack
              w="100%"
              borderRadius="8px"
              borderWidth="1px"
              borderColor={midgray}
              align="baseline"
              p="15px"
            >
              <Text w="100%" fontWeight="500">
                Harga
              </Text>
              <Text w="100%" fontSize="14px">
                Tentukan harga produk anda dengan beragam sistem yang berbeda
                sesuai dengan keinginan anda
              </Text>
              <Center
                bg={lightblue1}
                borderRadius="8px"
                fontSize="14px"
                p="5px 10px 5px 10px"
                _hover={{ bg: lightblue2, cursor: "pointer" }}
                transition="background-color 0.2s ease"
              >
                Buat rencana harga
              </Center>
            </VStack>
          </VStack>
          {/* Right Column */}
          <VStack w="40%" spacing={2}>
            <Text w="100%" fontSize="18px" fontWeight="600">
              Kustomisasi produk
            </Text>
            <VStack
              w="100%"
              borderRadius="8px"
              borderWidth="1px"
              borderColor={midgray}
              p="15px"
            >
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600">Nama Produk</Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => navigate("/course/curriculum")}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} />
                  <Text fontSize="14px">Ubah Judul</Text>
                </HStack>
              </HStack>
              <Text w="100%">Kursus HTML</Text>
            </VStack>
            <VStack
              w="100%"
              borderRadius="8px"
              borderWidth="1px"
              borderColor={midgray}
              p="15px"
            >
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600">Gambar</Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => navigate("/course/curriculum")}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={LuPlusCircle} />
                  <Text fontSize="14px">Tambah gambar</Text>
                </HStack>
              </HStack>
              <Center w="100%" aspectRatio="1.77" bg={lightgray}>
                <Icon as={FcGallery} fontSize="50px" />
              </Center>
            </VStack>
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default EfileSetup;
