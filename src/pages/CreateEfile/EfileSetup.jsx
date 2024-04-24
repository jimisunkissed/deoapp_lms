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
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import Color from "../../Color";
import { FaPencil } from "react-icons/fa6";
import { LuPlusCircle, LuUpload } from "react-icons/lu";
import { FcGallery } from "react-icons/fc";

function EfileSetup() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, midblue1 } =
    Color;

  const [value, setValue] = React.useState("1");

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
          Pengaturan Produk
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          gap={{ base: "15px", md: "25px" }}
        >
          {/* Left Column */}
          <VStack w={{ base: "100%", md: "60%" }} spacing={2}>
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Atur Detil Produk
            </Text>
            <VStack w="100%">
              <FormControl w="100%">
                <FormLabel
                  fontSize={{ base: "14px", md: "16px" }}
                  fontWeight="400"
                >
                  Metode Unggah
                </FormLabel>
                <RadioGroup onChange={setValue} value={value}>
                  <HStack direction="row">
                    <Radio value="1">
                      <Text fontSize={{ base: "14px", md: "16px" }}>
                        Unggah File
                      </Text>
                    </Radio>
                    <Radio value="2">
                      <Text fontSize={{ base: "14px", md: "16px" }}>
                        Alihkan ke URL
                      </Text>
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <VStack
                display={value === "1" ? "flex" : "none"}
                w="100%"
                bg={lightgray}
                borderRadius="8px"
                borderWidth="1px"
                borderColor={midgray}
                p="20px"
              >
                <Icon as={FcGallery} fontSize="40px" />
                <Text
                  fontSize={{ base: "12px", md: "14px" }}
                  w={{ base: "90%", md: "80%" }}
                >
                  File yang diterima: .pdf, .epub, .txt, .doc, .docx, .jpg,
                  .gif, .png, .tif, .webp, .csv, .xls, .xlsx, .ppt, .pptx, .mp3,
                  .m4a, .aac
                </Text>
                <HStack
                  h="25px"
                  bg="white"
                  borderRadius="8px"
                  borderWidth="1px"
                  borderColor={midgray}
                  p="15px"
                  _hover={{ cursor: "pointer" }}
                >
                  <Icon as={LuUpload} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "13px", md: "15px" }}>Unggah</Text>
                </HStack>
              </VStack>
              <VStack display={value === "2" ? "flex" : "none"} w="100%">
                <FormControl w="100%">
                  <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                    URL (Wajib)
                  </FormLabel>
                  <Input
                    h="35px"
                    w="100%"
                    placeholder="https://..."
                    fontSize={{ base: "14px", md: "16px" }}
                  />
                </FormControl>
                <FormControl w="100%">
                  <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                    CTA button text
                  </FormLabel>
                  <Input h="35px" w="100%" />
                </FormControl>
              </VStack>
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  Deskripsi Produk
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Ubah Deskripsi
                  </Text>
                </HStack>
              </HStack>
              <Text fontSize={{ base: "12px", md: "14px" }} w="100%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                sit perspiciatis culpa sunt quidem! Pariatur, dicta debitis.
                Culpa eveniet, harum rerum totam nisi reiciendis ex
                reprehenderit laborum velit eos saepe neque, perspiciatis unde
                sint voluptate assumenda quae, non maxime mollitia perferendis
                corporis illo! Enim excepturi, voluptatibus dolor esse illo
                laudantium.
              </Text>
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  Kategori Produk
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Ubah Kategori
                  </Text>
                </HStack>
              </HStack>
              <Text w="100%" fontSize={{ base: "12px", md: "14px" }}>
                ebook
              </Text>
            </VStack>
            {/* Harga */}
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Jual produk anda
            </Text>
            <VStack w="100%" align="baseline">
              <Text w="100%" fontSize={{ base: "14px", md: "16px" }}>
                Harga
              </Text>
              <Text w="100%" fontSize={{ base: "12px", md: "14px" }}>
                Tentukan harga produk anda dengan beragam sistem yang berbeda
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
                  Nama Produk
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Ubah Judul
                  </Text>
                </HStack>
              </HStack>
              <Text w="100%" fontSize={{ base: "12px", md: "14px" }}>
                SOP & KPI
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

export default EfileSetup;
