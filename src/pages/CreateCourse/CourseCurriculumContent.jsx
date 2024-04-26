import React, { useState } from "react";
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
  Modal,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  SimpleGrid,
  Spacer,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineMoreVert } from "react-icons/md";
import {
  FcViewDetails,
  FcVideoCall,
  FcImageFile,
  FcAudioFile,
  FcVideoFile,
  FcSpeaker,
} from "react-icons/fc";
import { LuUpload } from "react-icons/lu";
import Color from "../../Color";

function CourseCurriculumContent() {
  // Color Palette
  const { lightgray, midgray, lightblue1, lightblue2 } = Color;

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState(null);
  const [value, setValue] = React.useState("1");

  // Content type
  const content = [
    { type: "TEX", name: "Teks", icon: FcViewDetails },
    { type: "IMG", name: "Gambar", icon: FcImageFile },
    { type: "AUD", name: "Audio", icon: FcSpeaker },
    { type: "VID", name: "Video", icon: FcVideoCall },
  ];

  // Page Interface
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
        <HStack h="40px" w="100%" justify="space-between">
          <Text fontSize={{ base: "20px", md: "24px" }} fontWeight="600">
            Curriculum Content
          </Text>
        </HStack>
        {/* Add Content */}
        <Flex flexDirection={{ base: "column", md: "row" }} w="100%" gap="20px">
          {/* Left Column */}
          <VStack
            minH="250px"
            w={{ base: "100%", md: "60%" }}
            borderRadius="8px"
            borderWidth="1px"
            borderColor={midgray}
            spacing={0}
          >
            <HStack
              h="60px"
              w="100%"
              borderBottomWidth="1px"
              borderColor={midgray}
              p="20px"
              justify="space-between"
            >
              <Text>Lesson 1</Text>
              <Menu>
                <MenuButton
                  h="30px"
                  aspectRatio="1"
                  borderRadius="50%"
                  _hover={{ bg: lightblue2, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Center h="100%" w="100%">
                    <Icon as={MdOutlineMoreVert} fontSize="18px" />
                  </Center>
                </MenuButton>
                <MenuList p="3px">
                  <MenuItem h="30px" borderRadius="5px" p={0}>
                    <Text w="100%" fontSize="12px" pl="10px">
                      Ganti nama
                    </Text>
                  </MenuItem>
                  <MenuItem h="30px" borderRadius="5px" p={0}>
                    <Text w="100%" fontSize="12px" color="red.600" pl="10px">
                      Hapus Materi
                    </Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <Center h="100%" w="100%">
              <Text textAlign="center">Waktunya berbagi pengetahuan anda!</Text>
            </Center>
          </VStack>
          {/* Right Column */}
          <VStack
            w={{ base: "100%", md: "40%" }}
            borderRadius="8px"
            borderWidth="1px"
            borderColor={midgray}
            spacing={0}
          >
            <HStack
              h="60px"
              w="100%"
              borderBottomWidth="1px"
              borderColor={midgray}
              p="20px"
            >
              <Text>Tambah Konten</Text>
            </HStack>
            <SimpleGrid
              columns={3}
              w="100%"
              spacing="10px"
              p={{ base: "15px", sm: "25px", md: "15px", lg: "25px" }}
            >
              {content.map((data, index) => (
                <VStack
                  key={index}
                  w="100%"
                  bg={lightblue1}
                  borderRadius="8px"
                  spacing="0px"
                  p="10px"
                  _hover={{ cursor: "pointer" }}
                  onClick={() => {
                    onOpen();
                    setType(data.type);
                  }}
                >
                  <Icon as={data.icon} fontSize="20px" />
                  <Text fontSize="13px">{data.name}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Flex>
      </VStack>
      {/* Insert Pop Up */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent ml="15px" mr="15px">
          <VStack w="100%" p="15px">
            {/* Insert Text */}
            <VStack display={type === "TEX" ? "flex" : "none"} w="100%">
              <Text fontSize="18px" fontWeight="500">
                Masukkan teks
              </Text>
              <Textarea
                h="250px"
                w="100%"
                placeholder="Tulis teks disini"
                resize="none"
              />
            </VStack>
            {/* Insert Image, Audio, Video */}
            <VStack
              display={
                (type === "IMG") | (type === "AUD") | (type === "VID")
                  ? "flex"
                  : "none"
              }
              w="100%"
            >
              <Text fontSize="18px" fontWeight="500">
                Masukkan{" "}
                {type === "IMG"
                  ? "gambar"
                  : type === "AUD"
                  ? "audio"
                  : type === "VID"
                  ? "video"
                  : undefined}
              </Text>
              <FormControl w="100%">
                <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                  Metode
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
                <Icon as={type === "IMG"
                  ? FcImageFile
                  : type === "AUD"
                  ? FcAudioFile
                  : type === "VID"
                  ? FcVideoFile
                  : undefined} fontSize="40px" />
                <Text
                  fontSize={{ base: "12px", md: "14px" }}
                  w={{ base: "90%", md: "80%" }}
                >
                  File yang diterima: .jpg, .jpeg, .png, .webp, .svg
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
            </VStack>
            {/* Action Button */}
            <HStack h="35px" w="100%" justify="space-between">
              <Center
                h="100%"
                w="70px"
                bg={lightblue1}
                borderRadius="8px"
                fontSize={{ base: "12px", md: "14px" }}
                _hover={{ bg: lightblue2, cursor: "pointer" }}
                onClick={onClose}
                transition="background-color 0.2s ease"
              >
                Batal
              </Center>
              <Center
                h="100%"
                w="70px"
                bg={lightblue1}
                borderRadius="8px"
                fontSize={{ base: "12px", md: "14px" }}
                _hover={{ bg: lightblue2, cursor: "pointer" }}
                onClick={onClose}
                transition="background-color 0.2s ease"
              >
                Simpan
              </Center>
            </HStack>
          </VStack>
        </ModalContent>
      </Modal>
    </VStack>
  );
}

export default CourseCurriculumContent;
