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
  Radio,
  RadioGroup,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuUpload, LuX } from "react-icons/lu";
import Color from "../../Color";
import { FcGallery } from "react-icons/fc";

function CreateEfileStep4() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1 } = Color;

  // Navigate
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");

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
        maxW="750px"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        spacing={2}
        p={{ base: "15px", md: "25px" }}
      >
        <Flex w="100%" justify="space-between">
          <Text fontSize="15px" fontWeight="500">
            4/4
          </Text>
          <Center
            _hover={{ cursor: "pointer" }}
            onClick={() => navigate("/efiles")}
          >
            <Icon as={LuX} />
          </Center>
        </Flex>
        <Text
          w="100%"
          fontSize={{ base: "24px", md: "35px" }}
          fontWeight="500"
          textAlign="center"
        >
          Tambahkan Kontenmu
        </Text>
        <Text w="90%" fontSize="14px" color={darkgray} textAlign="center">
          Unggah konten yang ditawarkan
        </Text>
        <FormControl w="100%">
          <FormLabel fontSize={{ base: "14px", md: "16px" }}>Metode</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <HStack direction="row">
              <Radio value="1">
                <Text fontSize={{ base: "14px", md: "16px" }}>Unggah File</Text>
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
            File yang diterima: .pdf, .epub, .txt, .doc, .docx, .jpg, .gif,
            .png, .tif, .webp, .csv, .xls, .xlsx, .ppt, .pptx, .mp3, .m4a, .aac
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
        <Flex w="100%" justify="space-between" mt="25px">
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
            Sebelumnya
          </Center>
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate("/efiles/setup")}
            transition="background-color 0.2s ease"
          >
            Selanjutnya
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateEfileStep4;
