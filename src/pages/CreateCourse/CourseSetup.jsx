import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Color from "../../Color";
import { FaPencil } from "react-icons/fa6";
import { LuPlusCircle } from "react-icons/lu";
import { FcGallery } from "react-icons/fc";

function CourseSetup() {
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
    <VStack
      h="100%"
      w="100%"
      bg={lightgray}
      spacing="25px"
      p={{ base: "15px", md: "25px" }}
    >
      <VStack
        w="100%"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        p={{ base: "15px", md: "25px" }}
      >
        <Text w="100%" fontSize={{ base: "20px", md: "24px" }} fontWeight="600">
          Pengaturan Kursus
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          gap={{ base: "15px", md: "25px" }}
        >
          {/* Left Column */}
          <VStack w={{ base: "100%", md: "60%" }} spacing={2}>
            {/* Kurikulum */}
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Atur Kurikulum
            </Text>
            <VStack w="100%">
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  Pratinjau Kurikulum
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => navigate("/course/curriculum")}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{base:'14px', md:'16px'}} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Ubah Kurikulum
                  </Text>
                </HStack>
              </HStack>
              <VStack
                w="100%"
                borderRadius="8px"
                borderWidth="1px"
                borderColor={midgray}
                spacing="0px"
                overflow="hidden"
              >
                {section.map((data, index) => (
                  <>
                    <Flex
                      key={index}
                      h="50px"
                      w="100%"
                      bg={lightgray}
                      borderBottomWidth="1px"
                      borderColor={midgray}
                      align="center"
                      p="10px"
                    >
                      <Text fontSize="15px" fontWeight="600">
                        {data.title}
                      </Text>
                    </Flex>
                    {data.lesson.map((head, lesIndex) => (
                      <Flex
                        key={lesIndex}
                        flexDirection="column"
                        h="50px"
                        w="100%"
                        bg="white"
                        borderBottomWidth={
                          index === section.length - 1 &&
                          lesIndex === data.lesson.length - 1
                            ? "0px"
                            : "1px"
                        }
                        borderColor={midgray}
                        fontSize="13px"
                        align="baseline"
                        justify="center"
                        p="10px"
                      >
                        <Text w="100%" fontWeight="600">
                          {head}
                        </Text>
                        <Text w="100%">Empty</Text>
                      </Flex>
                    ))}
                  </>
                ))}
              </VStack>
            </VStack>
            {/* Harga */}
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Jual kursus anda
            </Text>
            <VStack w="100%" align="baseline">
              <Text w="100%" fontSize={{ base: "14px", md: "16px" }}>
                Harga
              </Text>
              <Text w="100%" fontSize={{ base: "12px", md: "14px" }}>
                Tentukan harga kursus anda dengan beragam sistem yang berbeda
                sesuai dengan keinginan anda
              </Text>
              <Center
                bg={lightblue2}
                borderRadius="8px"
                fontSize={{ base: "12px", md: "14px" }}
                p="5px 10px 5px 10px"
                _hover={{ bg: midblue1, cursor: "pointer" }}
                transition="background-color 0.2s ease"
              >
                Buat rencana harga
              </Center>
            </VStack>
          </VStack>
          {/* Right Column */}
          <VStack w={{ base: "100%", md: "40%" }} spacing={2}>
            {/* Judul Kursus */}
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Kustomisasi kursus
            </Text>
            <VStack w="100%">
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600" fontSize={{ base: "14px", md: "16px" }}>
                  Judul Kursus
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{base:'14px', md:'16px'}}/>
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Ubah Judul
                  </Text>
                </HStack>
              </HStack>
              <Text w="100%" fontSize={{ base: "12px", md: "14px" }}>
                Kursus HTML
              </Text>
            </VStack>
            <VStack w="100%">
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600" fontSize={{ base: "14px", md: "16px" }}>
                  Gambar
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={LuPlusCircle} fontSize={{base:'14px', md:'16px'}}/>
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Tambah gambar
                  </Text>
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

export default CourseSetup;
