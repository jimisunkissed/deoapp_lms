import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import useCourse from "../../hooks/course";
import Color from "../../Color";
import { FaPencil } from "react-icons/fa6";
import { LuPlusCircle } from "react-icons/lu";
import { FcGallery } from "react-icons/fc";

function CourseSetup() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, midblue1 } =
    Color;

  // Navigate
  const navigate = useNavigate();
  const { id } = useParams();

  // Zustand Course
  const { course, setName } = useCourse();
  const selectedCourse = course.find((c) => c.id === parseInt(id));

  // useState
  const [editName, setEditName] = useState(false);

  return (
    <VStack
      minH="100%"
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
                  onClick={() => navigate(`/courses/${selectedCourse.id}/curriculum`)}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
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
                {selectedCourse.curriculum.length === 0 ? (
                  <>
                    <Flex
                      h="50px"
                      w="100%"
                      bg={lightgray}
                      borderBottomWidth="1px"
                      borderColor={midgray}
                      align="center"
                      p="10px"
                    >
                      <Text fontSize="15px" fontWeight="600">
                        Seksi baru
                      </Text>
                    </Flex>
                    <Flex
                      h="50px"
                      w="100%"
                      bg="white"
                      borderColor={midgray}
                      align="center"
                      p="10px"
                    >
                      <Text fontSize="13px">kosong</Text>
                    </Flex>
                  </>
                ) : undefined}
                {selectedCourse.curriculum.map((data, sectIdx) => (
                  <VStack key={sectIdx} w="100%" spacing={0}>
                    <Flex
                      key={sectIdx}
                      h="50px"
                      w="100%"
                      bg={lightgray}
                      borderBottomWidth="1px"
                      borderColor={midgray}
                      align="center"
                      p="10px"
                    >
                      <Text fontSize="15px" fontWeight="600">
                        {data.sectionTitle}
                      </Text>
                    </Flex>
                    {data.lesson.map((info, lesIdx) => (
                      <Flex
                        key={lesIdx}
                        flexDirection="column"
                        h="50px"
                        w="100%"
                        bg="white"
                        borderBottomWidth={
                          sectIdx === selectedCourse.curriculum.length - 1 &&
                          lesIdx === data.lesson.length - 1
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
                          {info.title}
                        </Text>
                        <Text w="100%">
                          {info.content ? info.content : "Kosong"}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
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
              {selectedCourse.pricePlan.length > 0 ? (
                <VStack
                  w="100%"
                  borderRadius="8px"
                  borderWidth="1px"
                  borderColor={midgray}
                  spacing="0px"
                  overflow="hidden"
                >
                  {selectedCourse.pricePlan.map((data, index) => (
                    <Flex
                      key={index}
                      flexDirection="column"
                      h="50px"
                      w="100%"
                      bg={lightgray}
                      borderBottomWidth={
                        index === selectedCourse.pricePlan.length - 1
                          ? "0px"
                          : "1px"
                      }
                      borderColor={midgray}
                      fontSize="13px"
                      align="baseline"
                      justify="center"
                      p="10px"
                    >
                      <HStack>
                        <Text fontWeight="600">
                          {data.type === "OTP"
                            ? "Sekali Bayar"
                            : data.type === "INS"
                            ? "Angsur"
                            : data.type === "SUB"
                            ? "Langganan"
                            : data.type === "FRE"
                            ? "Gratis"
                            : undefined}{" "}
                        </Text>
                        <Text>
                          {data.type === "INS" ? `${data.nPay} x ` : undefined}
                          {data.type === "FRE"
                            ? undefined
                            : data.currency === "USD"
                            ? "$"
                            : data.currency === "IDR"
                            ? "Rp"
                            : undefined}
                          {data.type != "FRE" ? data.price : undefined}
                          {data.type === "SUB"
                            ? ` per ${data.freq}`
                            : undefined}
                        </Text>
                      </HStack>
                      <Text
                        minH="20px"
                        w="200px"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                      >
                        {data.desc}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              ) : (
                <>
                  <Text w="100%" fontSize={{ base: "12px", md: "14px" }}>
                    Tentukan harga kursus anda dengan beragam sistem yang
                    berbeda sesuai dengan keinginan anda
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
                </>
              )}
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
                  display={editName ? "none" : "flex"}
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => setEditName(true)}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Ubah Judul
                  </Text>
                </HStack>
                <Center
                  display={editName ? "flex" : "none"}
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => setEditName(false)}
                  transition="background-color 0.2s ease"
                >
                  <Text fontSize={{ base: "12px", md: "14px" }}>Simpan</Text>
                </Center>
              </HStack>
              <Text
                display={editName ? "none" : "flex"}
                h="35px"
                w="100%"
                fontSize={{ base: "12px", md: "14px" }}
                alignItems="center"
              >
                {selectedCourse.name ? selectedCourse.name : "Belum ada nama"}
              </Text>
              <Input
                display={editName ? "flex" : "none"}
                h="35px"
                value={selectedCourse.name}
                fontSize={{ base: "12px", md: "14px" }}
                onChange={(e) => setName(e.target.value, parseInt(id))}
              />
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
                  <Icon
                    as={LuPlusCircle}
                    fontSize={{ base: "14px", md: "16px" }}
                  />
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
