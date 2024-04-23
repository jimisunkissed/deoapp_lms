import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FcComboChart } from "react-icons/fc";

function SideBar() {
  const navigate = useNavigate();
  const pages = [
    { text: "Dashboard", path: "/" },
    { text: "Students", path: "/students" },
    { text: "Courses", path: "/courses" },
    { text: "eFile", path: "/efile" },
  ];
  return (
    <VStack h="100%" w="120px" borderRightWidth='1px' borderColor='gray.100' p="15px" >
      <Center w="60px" aspectRatio="1" borderRadius="10px" overflow="hidden">
        <Image
          src={
            "https://yt3.googleusercontent.com/sVCri3mSSAK7-gjsINUBkbUGloMR7euNurduZzEvpHtjPEF6vJgE5WeWs035xHntb2BgT2qVGy0=s900-c-k-c0x00ffffff-no-rj"
          }
        />
      </Center>
      {pages.map((info, index) => (
        <Box
          key={index}
          h="25px"
          w="80px"
          bg="gold"
          _hover={{cursor:'pointer'}}
          onClick={() => navigate(info.path)}
        >
          {info.text}
        </Box>
      ))}
    </VStack>
  );
}

export default SideBar;
