import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Center, Image, VStack } from "@chakra-ui/react";
import { FcFile, FcReadingEbook } from "react-icons/fc";
import { FcHome, FcManager } from "react-icons/fc";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";

function SideBar() {
  const navigate = useNavigate();
  const pages = [
    { text: "Dashboard", path: "/", icon: FcHome },
    { text: "Students", path: "/students", icon: FcManager },
    { text: "Courses", path: "/courses", icon: FcReadingEbook },
    { text: "E-Files", path: "/efiles", icon: FcFile },
    { text: "Setting", path: "", icon: IoMdSettings },
    { text: "LogOut", path: "", icon: IoIosLogOut },

  ];

  return (
    <VStack
      h="100%"
      w="120px"
      borderRightWidth='1px'
      borderColor='gray.100'
      p="15px"
      spacing={4}
      bg={'white'}
    >
      <Center w="60px" aspectRatio="1" borderRadius="10px" overflow="hidden">
        <Image
          src="https://yt3.googleusercontent.com/sVCri3mSSAK7-gjsINUBkbUGloMR7euNurduZzEvpHtjPEF6vJgE5WeWs035xHntb2BgT2qVGy0=s900-c-k-c0x00ffffff-no-rj"
          alt="Logo"
          boxSize="100%"
        />
      </Center>
      <Box mt={5}>
        {pages.map((info, index) => (
          <Box
            key={index}
            align="center"
            w="100%"
            h="50px"
            marginY={2}
            _hover={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => navigate(info.path)}
          >
            <Box m={3}>
              <Box as={info.icon} boxSize={'2rem'} />
              <Box fontSize={'xs'}>{info.text}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </VStack >
  );
}

export default SideBar;