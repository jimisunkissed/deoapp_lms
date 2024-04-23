import React, { useState, useEffect } from "react";
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
import Color from "../../Color";
import { MdDragIndicator, MdOutlineMoreVert } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";

function CourseCurriculum() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2 } = Color;

  // Action
  const action = ["Ganti nama", "Duplikat bagian", "Hapus bagian"];

  const [section, setSection] = useState([
    { title: "Section1", lesson: ["Lesson1", "Lesson2"] },
    { title: "Section2", lesson: ["Lesson1", "Lesson2", "Lesson3"] },
  ]);

  const [isEdit, setIsEdit] = useState(() =>
    section.map(({ title, lesson }) => ({
      title: false,
      lesson: Array(lesson.length).fill(false),
    }))
  );

  function newSection () {
    const newSect = {title:"New Section", lesson:[]}
    setSection((prevState))
  }

  return (
    <VStack h="100%" w="100%" bg={lightgray} spacing="25px" p="25px">
      <VStack
        w="100%"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        p="15px"
      >
        <HStack h="40px" w="100%" justify="space-between">
          <Text fontSize="24px" fontWeight="600">
            Curriculum
          </Text>
        </HStack>
        {/* Section Box */}
        {section.map((info, index) => (
          <Flex
            key={index}
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
            {/* Section Content Box */}
            <VStack w="100%" spacing={0}>
              {/* Section Content Name */}
              <HStack
                h="60px"
                w="100%"
                p="20px"
                borderBottomWidth="1px"
                borderBottomColor={midgray}
              >
                <Text display={isEdit[index].title ? "none" : "flex"}>
                  {info.title}
                </Text>
                <Input
                  display={isEdit[index].title ? "flex" : "none"}
                  h="30px"
                  maxW="500px"
                  fontSize="14px"
                  value={section[index].title}
                  onChange={(e) =>
                    setSection((prevState) => {
                      const newState = [...prevState];
                      newState[index].title = e.target.value;
                      return newState;
                    })
                  }
                />
                <Spacer />
                {/* When Not Editing Section Name*/}
                <Menu>
                  <MenuButton
                    display={isEdit[index].title ? "none" : "flex"}
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
                {/* When Editing Section Name*/}
                <Center
                  display={isEdit[index].title ? "flex" : "none"}
                  h="35px"
                  w="70px"
                  bg={lightblue1}
                  borderRadius="8px"
                  fontSize="13px"
                  _hover={{ bg: lightblue2, cursor: "pointer" }}
                  onClick={() =>
                    setIsEdit((prevState) => {
                      const newState = [...prevState];
                      newState[index].title = false;
                      return newState;
                    })
                  }
                  transition="background-color 0.2s ease"
                >
                  Save
                </Center>
              </HStack>
              {/* Section Lesson Box */}
              {info.lesson.map((title, lesIdx) => (
                <HStack
                  key={lesIdx}
                  minH="60px"
                  w="100%"
                  borderBottomWidth="1px"
                  borderBottomColor={midgray}
                  pr="20px"
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
                      display={isEdit[index].lesson[lesIdx] ? "none" : "flex"}
                      h="30%"
                      fontWeight="600"
                      textDecoration="underline"
                      _hover={{ cursor: "pointer" }}
                    >
                      {title}
                    </Text>
                    <Input
                      display={isEdit[index].lesson[lesIdx] ? "flex" : "none"}
                      h="30px"
                      maxW="500px"
                      fontSize="14px"
                      value={title}
                      onChange={(e) =>
                        setSection((prevState) => {
                          const newState = [...prevState];
                          newState[index].lesson[lesIdx] = e.target.value;
                          return newState;
                        })
                      }
                    />
                    <Text
                      display={isEdit[index].lesson[lesIdx] ? "none" : "flex"}
                      h="30%"
                    >
                      Empty
                    </Text>
                  </VStack>
                  <Spacer />
                  <Menu>
                    <MenuButton
                      display={isEdit[index].lesson[lesIdx] ? "none" : "flex"}
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
                        <MenuItem
                          key={actIdx}
                          h="30px"
                          borderRadius="5px"
                          p={0}
                        >
                          <Text
                            w="100%"
                            fontSize="12px"
                            color={
                              text === "Hapus bagian" ? "red.600" : "black"
                            }
                            pl="10px"
                            onClick={
                              text === "Ganti nama"
                                ? () =>
                                    setIsEdit((prevState) => {
                                      const newState = [...prevState];
                                      newState[index].lesson[lesIdx] = true;
                                      return newState;
                                    })
                                : undefined
                            }
                          >
                            {text}
                          </Text>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                  <Center
                    display={isEdit[index].lesson[lesIdx] ? "flex" : "none"}
                    h="35px"
                    w="70px"
                    bg={lightblue1}
                    borderRadius="8px"
                    fontSize="13px"
                    _hover={{ bg: lightblue2, cursor: "pointer" }}
                    onClick={() =>
                      setIsEdit((prevState) => {
                        const newState = [...prevState];
                        newState[index].lesson[lesIdx] = false;
                        return newState;
                      })
                    }
                    transition="background-color 0.2s ease"
                  >
                    Save
                  </Center>
                </HStack>
              ))}
              <Center
                h="60px"
                w="100%"
                color={darkgray}
                _hover={{ color: "black", cursor: "pointer" }}
                transition="color 0.2s ease"
              >
                <Icon as={LuPlusCircle} />
                <Text fontSize="14px" ml="10px">
                  Kursus Baru
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
