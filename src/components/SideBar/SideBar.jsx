import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { FcComboChart } from "react-icons/fc";

function SideBar() {
  const navigate = useNavigate()
  const pages = [
    { text: "Dashboard", path: "/" },
    { text: "Students", path: "/students" },
    { text: "Courses", path: "/create/course" },
    { text: "eFile", path: "/create/efile" },
  ];
  return (
    <VStack h="100%" w="150px" bg="pink.100">
      {pages.map((info, index) => (
        <Box key={index} h='25px' w='80px' bg='gold' onClick={() => navigate(info.path)}>{info.text}</Box>
      ))}
    </VStack>
  );
}

export default SideBar;
