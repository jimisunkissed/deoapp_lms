import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import useCourse from "../../hooks/course";
import { LuPlusCircle, LuMoreVertical } from "react-icons/lu";
import Color from "../../Color";

function CreateCourse() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, darkblue2 } =
    Color;

  const heading = ["Name", "Date", "Sales", "Enrollments", "Status", "Actions"];

  // Courses
  const { course, addCourse } = useCourse();

  // Menu
  const menu = [
    "Publish Course",
    "Preview Course as Student",
    "Duplicate Course",
    "Delete Course",
  ];

  // Navigate
  const navigate = useNavigate();

  // Page Interface
  return (
    <VStack
      h="100%"
      w="100%"
      bg={lightgray}
      spacing="25px"
      p={{ base: "15px", md: "25px" }}
    >
      <Box
        w="100%"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        overflowX="auto"
      >
        <VStack h="100%" w="100%" minW="600px" p={{ base: "15px", md: "25px" }}>
          <Text w="100%" fontSize="24px" fontWeight="600">
            Courses
          </Text>
          <HStack
            h="40px"
            w="100%"
            bg={lightblue1}
            borderRadius="8px"
            spacing={0}
          >
            {heading.map((head, index) => (
              <Box
                key={index}
                w={`${100 / heading.length}%`}
                minW={head === "Name" ? "150px" : undefined}
                fontSize="12px"
                fontWeight="600"
                color={darkgray}
                pl="10px"
              >
                {head}
              </Box>
            ))}
          </HStack>
          {course.map((data, index) => (
            <HStack
              key={index}
              h="40px"
              w="100%"
              bg={index % 2 === 0 ? "white" : lightblue1}
              borderRadius="8px"
              spacing={0}
              p="2px 0px 2px 0px"
            >
              <Box
                w={`${100 / heading.length}%`}
                minW="150px"
                fontSize="13px"
                pl="10px"
              >
                <Text
                  w="100%"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  _hover={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => navigate("/courses/setup")}
                >
                  {data.name}
                </Text>
              </Box>
              <Box w={`${100 / heading.length}%`} fontSize="13px" pl="10px">
                <Text>{data.date.slice(4, 15)}</Text>
              </Box>
              <Box w={`${100 / heading.length}%`} fontSize="13px" pl="10px">
                <Text>{data.sale}</Text>
              </Box>
              <Box w={`${100 / heading.length}%`} fontSize="13px" pl="10px">
                <Text>{data.enrollment}</Text>
              </Box>
              <Box w={`${100 / heading.length}%`} fontSize="13px" pl="10px">
                <Center
                  h="24px"
                  w="min-content"
                  bg={lightblue2}
                  borderRadius="12px"
                  fontSize="12px"
                  color={darkblue2}
                  p="0px 8px 0px 8px"
                >
                  {data.isPublished ? 'Published' : 'Unpublished'}
                </Center>
              </Box>
              <Box w={`${100 / heading.length}%`} pl="10px">
                <Menu>
                  <MenuButton
                    h="24px"
                    aspectRatio="1"
                    borderRadius="50%"
                    _hover={{ bg: lightblue2, cursor: "pointer" }}
                    transition="background-color 0.2s ease"
                  >
                    <Center h="100%" w="100%">
                      <Icon as={LuMoreVertical} />
                    </Center>
                  </MenuButton>
                  <MenuList p="3px">
                    {menu.map((text, index) => (
                      <MenuItem key={index} h="30px" borderRadius="5px" p={0}>
                        <Text
                          fontSize="12px"
                          color={text === "Delete Course" ? "red.600" : "black"}
                          pl="10px"
                        >
                          {text}
                        </Text>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Box>
            </HStack>
          ))}
          <Center
            h="40px"
            w="100%"
            bg={course.length % 2 === 0 ? "white" : lightblue1}
            borderRadius="8px"
            spacing={0}
            p="2px 0px 2px 0px"
          >
            <Icon
              as={LuPlusCircle}
              fontSize="20px"
              color={darkgray}
              _hover={{ color: "black", cursor: "pointer" }}
              onClick={() => {navigate("/courses/create/step-1"), addCourse()}}
              transition="color 0.2s ease"
            />
          </Center>
        </VStack>
      </Box>
    </VStack>
  );
}

export default CreateCourse;
