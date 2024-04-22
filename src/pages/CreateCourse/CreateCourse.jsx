import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuPlusCircle, LuMoreVertical } from "react-icons/lu";
import Color from "../../Color";

function CreateCourse() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, darkblue2 } =
    Color;

  // Heading
  const heading = [
    { text: "Name", width: "30%" },
    { text: "Date", width: "15%" },
    { text: "Sales", width: "15%" },
    { text: "Enrollments", width: "15%" },
    { text: "Status", width: "15%" },
    { text: "Actions", width: "10%" },
  ];

  // Courses
  const course = [
    {
      name: "Front End Development",
      date: Date(2024, 4, 18),
      sale: 63,
      enrollment: 9,
      status: "Published",
      width: ["30%", "15%", "15%", "15%", "15%", "10%"],
    },
    {
      name: "Back End Development",
      date: Date(2024, 4, 21),
      sale: 15,
      enrollment: 5,
      status: "Published",
      width: ["30%", "15%", "15%", "15%", "15%", "10%"],
    },
  ];

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
    <VStack h="100%" w="100%" bg={lightgray} spacing="25px" p="25px">
      <Box
        w="100%"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        overflowX="auto"
      >
        <VStack h="100%" w="100%" bg="white" p="15px">
          <Text w='100%' fontSize='24px' fontWeight='600'>Courses</Text>
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
                w={head.width}
                fontSize="12px"
                fontWeight="600"
                color={darkgray}
                pl="10px"
              >
                {head.text}
              </Box>
            ))}
          </HStack>
          {course.map((info, index) => (
            <HStack
              key={index}
              h="40px"
              w="100%"
              bg={index % 2 === 0 ? "white" : lightblue1}
              borderRadius="8px"
              spacing={0}
              p="2px 0px 2px 0px"
            >
              <Box width={info.width[0]} fontSize="13px" pl="10px">
                {info.name}
              </Box>
              <Box width={info.width[1]} fontSize="13px" pl="10px">
                {info.date.slice(4, 15)}
              </Box>
              <Box width={info.width[2]} fontSize="13px" pl="10px">
                {info.sale}
              </Box>
              <Box width={info.width[3]} fontSize="13px" pl="10px">
                {info.enrollment}
              </Box>
              <Box width={info.width[4]} fontSize="13px" pl="10px">
                <Center
                  h="24px"
                  w="min-content"
                  bg={lightblue2}
                  borderRadius="12px"
                  fontSize="12px"
                  color={darkblue2}
                  p="0px 8px 0px 8px"
                >
                  {info.status}
                </Center>
              </Box>
              <Box width={info.width[5]} pl="10px">
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
                        <Text fontSize="12px" color={text === 'Delete Course' ? 'red.600' : 'black'}pl='10px'>{text}</Text>
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
              onClick={() => navigate('/create/course/step-1')}
              transition="color 0.2s ease"
            />
          </Center>
        </VStack>
      </Box>
    </VStack>
  );
}

export default CreateCourse;
