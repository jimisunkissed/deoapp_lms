import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useAuthLogin from "../../hooks/authLogin";
import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import { FcBusinessman, FcFile, FcReadingEbook } from "react-icons/fc";
import { FcHome, FcManager } from "react-icons/fc";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";

function SideBar() {
  const navigate = useNavigate();
  const { user, isLoggedIn, setIsLoggedIn } = useAuthLogin();

  // Log Out
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  const pages = [
    { text: "Dashboard", path: "/", icon: FcHome },
    { text: "Students", path: "/students", icon: FcManager },
    { text: "Courses", path: "/courses", icon: FcReadingEbook },
    { text: "E-Files", path: "/efiles", icon: FcFile },
    { text: "Setting", path: "", icon: IoMdSettings },
    { text: user, path: "", icon: FcBusinessman },
    { text: "Log Out", path: "", icon: IoIosLogOut },
  ];

  return (
    <VStack
      h="100%"
      w="120px"
      bg="white"
      borderRightWidth="1px"
      borderColor="gray.100"
      spacing={4}
      p="15px"
      overflow="auto"
    >
      <Center
        h="60px"
        minH="60px"
        aspectRatio="1"
        borderRadius="10px"
        overflow="hidden"
        mb="20px"
      >
        <Image
          src="https://yt3.googleusercontent.com/sVCri3mSSAK7-gjsINUBkbUGloMR7euNurduZzEvpHtjPEF6vJgE5WeWs035xHntb2BgT2qVGy0=s900-c-k-c0x00ffffff-no-rj"
          alt="Logo"
          boxSize="100%"
        />
      </Center>
      {pages.map((info, index) => (
        <Box
          key={index}
          align="center"
          w="100%"
          h="50px"
          marginY={2}
          _hover={{ cursor: "pointer", fontWeight: "bold" }}
          onClick={
            info.text === 'Log Out' ? handleLogOut : () => navigate(info.path)
          }
        >
          <Box m={3}>
            <Box as={info.icon} boxSize={"2rem"} />
            <Box fontSize={"xs"}>{info.text}</Box>
          </Box>
        </Box>
      ))}
    </VStack>
  );
}

export default SideBar;
