import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import useCourse from "../../hooks/course";
import Color from "../../Color";
import { MdDragIndicator, MdOutlineMoreVert } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";

function CourseCurriculum() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2 } = Color;

  // Navigate
  const navigate = useNavigate();
  const { id } = useParams();

  // Zustand Course
  const { course, setNameById } = useCourse();
  const selectedCourse = course.find((c) => c.id === parseInt(id));

  // Display Content Function
  const displayContent = (objectList) => {
    const content = { text: 0, image: 0, audio: 0, video: 0 };

    for (let i = 0; i < objectList.length; i++) {
      if (objectList[i].type === "TEX") {
        content.text = content.text + 1;
      } else if (objectList[i].type === "IMG") {
        content.image = content.image + 1;
      } else if (objectList[i].type === "AUD") {
        content.audio = content.audio + 1;
      } else if (objectList[i].type === "VID") {
        content.video = content.video + 1;
      }
    }

    let display = "";
    if (content.text > 0) {
      display = display + ", " + content.text + " teks";
    }
    if (content.image > 0) {
      display = display + ", " + content.image + " gambar";
    }
    if (content.audio > 0) {
      display = display + ", " + content.audio + " audio";
    }
    if (content.video > 0) {
      display = display + ", " + content.video + " video";
    }

    if (display === "") {
      return "Kosong";
    } else {
      return display.slice(1, undefined);
    }
  };

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
            Curriculum
          </Text>
        </HStack>
        {/* Curriculum Cards Test*/}
        {selectedCourse.curriculum.map((data, sectIdx) => (
          <Flex
            key={sectIdx}
            minH="120px"
            w="100%"
            borderRadius="8px"
            borderWidth="1px"
            borderColor={midgray}
            overflow="hidden"
          >
            {/* Section Drag Box */}
            <VStack h="100%" w="30px" bg={lightblue2} pt="15px">
              <Icon
                as={MdDragIndicator}
                fontSize="18px"
                color={darkgray}
                _hover={{ cursor: "grab" }}
              />
            </VStack>
            <VStack w="100%" spacing={0}>
              <HStack
                h="60px"
                w="100%"
                p={{ base: "10px", md: "20px" }}
                borderBottomWidth="1px"
                borderBottomColor={midgray}
              >
                <Text>{data.sectionTitle}</Text>
                <Spacer />
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
                      <Text fontSize="12px" pl="10px">
                        Ganti nama seksi
                      </Text>
                    </MenuItem>
                    <MenuItem h="30px" borderRadius="5px" p={0}>
                      <Text fontSize="12px" pl="10px">
                        Duplikat seksi
                      </Text>
                    </MenuItem>
                    <MenuItem h="30px" borderRadius="5px" p={0}>
                      <Text fontSize="12px" color="red.600" pl="10px">
                        Hapus seksi
                      </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
              {data.lesson.map((child, lesIdx) => (
                <HStack
                  key={lesIdx}
                  minH="60px"
                  w="100%"
                  borderBottomWidth="1px"
                  borderBottomColor={midgray}
                  pr={{ base: "10px", md: "20px" }}
                >
                  <Center h="100%" w="30px">
                    <Icon
                      as={MdDragIndicator}
                      fontSize="18px"
                      color={darkgray}
                      _hover={{ cursor: "grab" }}
                    />
                  </Center>
                  <VStack
                    h="100%"
                    spacing={0}
                    align="baseline"
                    justify="center"
                    fontSize="14px"
                  >
                    <Text
                      h="30%"
                      fontWeight="600"
                      textDecoration="underline"
                      _hover={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate(`/courses/${id}/curriculum/content`)
                      }
                    >
                      {child.title}
                    </Text>
                    <Text h="30%">{displayContent(child.content)}</Text>
                  </VStack>
                  <Spacer />
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
                        <Text fontSize="12px" pl="10px">
                          Ganti nama materi
                        </Text>
                      </MenuItem>
                      <MenuItem h="30px" borderRadius="5px" p={0}>
                        <Text fontSize="12px" pl="10px">
                          Duplikat materi
                        </Text>
                      </MenuItem>
                      <MenuItem h="30px" borderRadius="5px" p={0}>
                        <Text fontSize="12px" color="red.600" pl="10px">
                          Hapus materi
                        </Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              ))}
              {/* New Lesson */}
              <Center
                h="60px"
                w="100%"
                color={darkgray}
                _hover={{ color: "black", cursor: "pointer" }}
                transition="color 0.2s ease"
              >
                <Icon as={LuPlusCircle} />
                <Text fontSize="14px" ml="10px">
                  Materi baru
                </Text>
              </Center>
            </VStack>
          </Flex>
        ))}

        <Center
          h="60px"
          w="100%"
          borderRadius="8px"
          borderWidth="1px"
          borderColor={midgray}
          color={darkgray}
          _hover={{ color: "black", cursor: "pointer" }}
          transition="color 0.2s ease"
        >
          <Icon as={LuPlusCircle} />
          <Text fontSize="14px" ml="10px">
            Seksi Baru
          </Text>
        </Center>
      </VStack>
    </VStack>
  );
}

export default CourseCurriculum;
