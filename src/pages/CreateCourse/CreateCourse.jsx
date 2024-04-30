import React, { useState, useEffect } from "react";
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
import { db } from "../../../firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import { LuPlusCircle, LuMoreVertical } from "react-icons/lu";
import Color from "../../Color";

function CreateCourse() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, darkblue2 } =
    Color;

  // Navigate
  const navigate = useNavigate();

  // Fetch Data
  const [courseList, setCourseList] = useState(null);

  const getCourseList = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const courses = [];
      querySnapshot.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
      });
      setCourseList(courses);
    } catch (error) {
      console.error("Error fetching course list: ", error);
    }
  };

  useEffect(() => {
    getCourseList("lms_course");
  }, []);

  // Table header
  const heading = ["Name", "Date", "Sales", "Enrollments", "Status", "Actions"];

  // Date Function
  const displayDate = (timestamp) => {
    const dateObject = timestamp.toDate();

    // Extract components
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "short", // Short month name (e.g., "Apr")
      day: "2-digit", // Two-digit day (e.g., "18")
      year: "numeric", // Full year (e.g., "2024")
    });

    return formattedDate;
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
      {/* Overflow Box */}
      <Box
        w="100%"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        overflowX="auto"
      >
        {/* Course Box */}
        <VStack
          h="100%"
          w="100%"
          minW="600px"
          spacing="2px"
          p={{ base: "15px", md: "25px" }}
        >
          {/* Course Header */}
          <Text w="100%" fontSize="24px" fontWeight="600" mb="10px">
            Courses
          </Text>
          {/* Table Header */}
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
          {/* Table Fill */}
          {courseList &&
            courseList.map((data, index) => (
              <HStack
                key={index}
                h="50px"
                w="100%"
                bg={index % 2 === 0 ? "white" : lightblue1}
                borderRadius="8px"
                spacing={0}
                p="2px 0px 2px 0px"
              >
                {/* Table Fill Name */}
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
                    onClick={() => navigate(`/courses/${data.id}/setup`)}
                  >
                    {data.name ? data.name : "-"}
                  </Text>
                </Box>
                {/* Table Fill Date */}
                <Box
                  w={`${100 / heading.length}%`}
                  minW=""
                  fontSize="13px"
                  pl="10px"
                >
                  <Text>{displayDate(data.date)}</Text>
                </Box>
                {/* Table Fill Sales */}
                <Box w={`${100 / heading.length}%`} fontSize="13px" pl="10px">
                  <Text>{data.sale ? data.sale : "-"}</Text>
                </Box>
                {/* Table Fill Enrollment */}
                <Box w={`${100 / heading.length}%`} fontSize="13px" pl="10px">
                  <Text>{data.enrollment ? data.enrollment : "-"}</Text>
                </Box>
                {/* Table Fill Publish Status */}
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
                    {data.isPublished ? "Published" : "Unpublished"}
                  </Center>
                </Box>
                {/* Table Fill Action */}
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
                      <MenuItem
                        h="30px"
                        borderRadius="5px"
                        p={0}
                        // onClick={() => setPublish(data.id)}
                      >
                        <Text fontSize="12px" pl="10px">
                          {data.isPublished
                            ? "Unpublish Course"
                            : "Publish Course"}
                        </Text>
                      </MenuItem>
                      <MenuItem h="30px" borderRadius="5px" p={0}>
                        <Text fontSize="12px" pl="10px">
                          Duplicate Course
                        </Text>
                      </MenuItem>
                      <MenuItem
                        h="30px"
                        borderRadius="5px"
                        p={0}
                        // onClick={() => deleteCourse(data.id)}
                      >
                        <Text fontSize="12px" color="red.600" pl="10px">
                          Delete Course
                        </Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </HStack>
            ))}
          {/* Add Course */}
          <Center
            h="40px"
            w="100%"
            bg={
              courseList
                ? courseList.length % 2 === 0
                  ? "white"
                  : lightblue1
                : "white"
            }
            borderRadius="8px"
            spacing={0}
            p="2px 0px 2px 0px"
          >
            <Icon
              as={LuPlusCircle}
              fontSize="20px"
              color={darkgray}
              _hover={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                // addCourse();
                navigate("/courses/create/step-1");
              }}
              transition="color 0.2s ease"
            />
          </Center>
        </VStack>
      </Box>
    </VStack>
  );
}

export default CreateCourse;
