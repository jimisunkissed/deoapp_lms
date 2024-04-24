import React, { useEffect } from "react";
import useAuthLogin from "../../hooks/authLogin";
import { Center, HStack, Icon, Input, Text, VStack } from "@chakra-ui/react";
import { MdKey, MdMail } from "react-icons/md";

function Login() {
  // Login
  const { setUser, setIsLoggedIn } = useAuthLogin();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <VStack h="100vh" w="100vw" bg="blue.900" justify="center">
      <VStack
        h="450px"
        w="360px"
        bg="gray.900"
        borderRadius="10px"
        justify="center"
      >
        <HStack fontSize="27px" fontWeight="700" spacing={0} mb="10px">
          <Text color="gray.400">deo</Text>
          <Text display="inline" color="orange">
            app
          </Text>
        </HStack>
        <HStack h="35px" w="80%" spacing={0}>
          <Center
            h="100%"
            aspectRatio="1.2"
            bg="gray.400"
            borderLeftRadius="8px"
          >
            <Icon as={MdMail} fontSize="20px" />
          </Center>
          <Input
            h="100%"
            flexGrow={1}
            bg="white"
            borderLeftRadius="0px"
            borderRightRadius="8px"
            onChange={(e) => setUser(e.target.value)}
          />
        </HStack>
        <HStack h="35px" w="80%" spacing={0}>
          <Center
            h="100%"
            aspectRatio="1.2"
            bg="gray.400"
            borderLeftRadius="8px"
          >
            <Icon as={MdKey} fontSize="20px" />
          </Center>
          <Input
            type="password"
            h="100%"
            flexGrow={1}
            bg="white"
            borderLeftRadius="0px"
            borderRightRadius="8px"
          />
        </HStack>
        <Center
          h="35px"
          w="80px"
          bg="white"
          borderRadius="8px"
          fontSize="13px"
          mt="20px"
          _hover={{ bg: "orange", cursor: "pointer" }}
          transition="background-color 0.2s ease"
          onClick={handleLogin}
        >
          Continue
        </Center>
      </VStack>
    </VStack>
  );
}

export default Login;
