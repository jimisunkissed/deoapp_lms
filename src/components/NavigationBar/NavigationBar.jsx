import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FcFile, FcReadingEbook } from "react-icons/fc";
import { FcHome, FcManager } from "react-icons/fc";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";

function NavigationBar() {
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
    <Flex h='100px' w='100%' align="center" gap={3} bg={'white'} overflowX="auto">
      <Image
        src="https://yt3.googleusercontent.com/sVCri3mSSAK7-gjsINUBkbUGloMR7euNurduZzEvpHtjPEF6vJgE5WeWs035xHntb2BgT2qVGy0=s900-c-k-c0x00ffffff-no-rj"
        alt="Logo"
        borderRadius='full'
        boxSize='50px'
        m='3'
      />

      <Flex>
        {pages.map((info, index) => (
          <Box
            key={index}
            m={1}
            display="flex"
            background={'white'}
            flexDirection="column"
            alignItems="center"
            _hover={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => navigate(info.path)}
            padding={1}
            fontSize="xs"
          >
            <Box as={info.icon} boxSize={'1.5rem'} />
            <Box whiteSpace='nowrap' textOverflow='ellipsis'>{info.text}</Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
