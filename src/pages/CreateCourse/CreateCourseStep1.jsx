import { useNavigate } from "react-router-dom";
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
  VStack,
  useToast
} from "@chakra-ui/react";
import newCourse from "../../hooks/newCourse";
import { LuX } from "react-icons/lu";
import Color from "../../Color";

function CreateCourseStep1() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1 } = Color;

  // Navigate
  const navigate = useNavigate();

  // Zustand
  const { course, setName, reset } = newCourse();

  // Toast
  const toast = useToast()
  // Page Interface
  return (
    <VStack
      h="100%"
      w="100%"
      bg={lightgray}
      justify="center"
      p={{ base: "15px", md: "25px" }}
    >
      <VStack
        w="100%"
        maxW="750px"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        spacing={1}
        p={{ base: "15px", md: "25px" }}
      >
        <Flex w="100%" justify="space-between">
          <Text fontSize="15px" fontWeight="500">
            1/3
          </Text>
          <Center
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/courses");
              reset();
            }}
          >
            <Icon as={LuX} />
          </Center>
        </Flex>
        <Text
          w="100%"
          fontSize={{ base: "24px", md: "35px" }}
          fontWeight="500"
          textAlign="center"
        >
          Informasi tentang kursus kamu
        </Text>
        <Text
          w={{ base: "100%", md: "90%" }}
          fontSize="14px"
          color={darkgray}
          textAlign="center"
        >
          Kami menggunakan informasi ini untuk mengkustomisasi kursus anda. Anda
          bisa mengubahnya nanti
        </Text>
        <FormControl w="100%">
          <FormLabel fontSize="14px">Nama Kursus</FormLabel>
          <Input
            h="35px"
            w="100%"
            placeholder="Berikan nama"
            value={course.name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <Flex w="100%" justify="space-between" mt="25px">
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            userSelect="none"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => {
              navigate("/courses");
              reset();
            }}
            transition="background-color 0.2s ease"
          >
            Sebelumnya
          </Center>
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            userSelect="none"
            _hover={{
              bg: "midblue1",
              cursor: "pointer",
            }}
            onClick={
              course.name != ""
                ? () => navigate("/courses/create/step-2")
                : () => toast({
                  title: "Nama kursus belum diisi",
                  status: "warning",
                  duration: "3000",
                  isClosable: true,
                })
            }
            transition="background-color 0.2s ease"
          >
            Selanjutnya
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateCourseStep1;
