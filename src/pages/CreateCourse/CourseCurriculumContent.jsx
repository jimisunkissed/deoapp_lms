import React from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { MdOutlineMoreVert } from "react-icons/md";
import {
  FcViewDetails,
  FcVideoCall,
  FcImageFile,
  FcSpeaker,
} from "react-icons/fc";
import Color from "../../Color";

function CourseCurriculumContent() {
  // Color Palette
  const { lightgray, midgray, lightblue1, lightblue2 } = Color;

  // Action
  const action = ["Ganti nama", "Duplikat bagian", "Hapus bagian"];

  // Content type
  const content = [
    { name: "Teks", icon: FcViewDetails },
    { name: "Video", icon: FcVideoCall },
    { name: "Gambar", icon: FcImageFile },
    { name: "Audio", icon: FcSpeaker },
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
            w={{base:'100%', md:"60%"}}
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
                  {action.map((text, actIdx) => (
                    <MenuItem key={actIdx} h="30px" borderRadius="5px" p={0}>
                      <Text
                        w="100%"
                        fontSize="12px"
                        color={text === "Hapus bagian" ? "red.600" : "black"}
                        pl="10px"
                        onClick={() =>
                          setIsEdit((prevState) => {
                            const newState = [...prevState];
                            newState[index].title = true;
                            return newState;
                          })
                        }
                      >
                        {text}
                      </Text>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </HStack>
            <VStack p="40px">
              <Text textAlign='center'>Waktunya berbagi pengetahuan anda!</Text>
              <Center
                h="40px"
                w="110px"
                bg={lightblue1}
                borderRadius="8px"
                fontSize="13px"
                _hover={{ bg: lightblue2, cursor:'pointer' }}
                transition="background-color 0.2s ease"
              >
                Tambah konten
              </Center>
            </VStack>
          </VStack>
          {/* Right Column */}
          <VStack
            w={{base:'100%', md:"40%"}}
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
              <Text>Tambah Konten</Text>
              <Icon as={LuX} />
            </HStack>
            <SimpleGrid columns={3} w="100%" spacing="10px" p={{base:'15px', sm:'25px', md:'15px', lg:"25px"}}>
              {content.map((data, index) => (
                <VStack
                key={index}
                  w="100%"
                  bg={lightblue1}
                  borderRadius="8px"
                  spacing='0px'
                  p="10px"
                  _hover={{ cursor: "pointer" }}
                >
                  <Icon as={data.icon} fontSize='20px'/>
                  <Text fontSize='13px'>{data.name}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CourseCurriculumContent;
