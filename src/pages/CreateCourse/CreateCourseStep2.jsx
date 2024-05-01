import { useNavigate } from "react-router-dom";
import { Center, Flex, Icon, SimpleGrid, Text, VStack, useToast } from "@chakra-ui/react";
import newCourse from "../../hooks/newCourse";
import { LuX } from "react-icons/lu";
import Color from "../../Color";
import { FcGallery } from "react-icons/fc";

function CreateCourseStep2() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1, midblue2 } =
    Color;

  // Navigate
  const navigate = useNavigate();

  // Zustand
  const { course, setImageChoice, reset } = newCourse();

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
            2/3
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
          Tambahkan Gambar
        </Text>
        <Text w="90%" fontSize="14px" color={darkgray} textAlign="center">
          Gambar akan ditampilkan saat checkout dan selama pelanggan melihat
          produk Unggah satu atau tentukan nanti saja.
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          minH="200px"
          w="100%"
          spacing="15px"
        >
          <VStack
            w="100%"
            h="100%"
            bg={lightgray}
            borderRadius="10px"
            borderWidth={
              course && course.image
                ? course.image.choice === "upload"
                  ? "3px"
                  : "1px"
                : "1px"
            }
            borderColor={
              course && course.image
                ? course.image.choice === "upload"
                  ? midblue2
                  : midgray
                : midgray
            }
            textAlign="center"
            justify="center"
            spacing={1}
            p="20px"
            _hover={{ cursor: "pointer" }}
            onClick={() => setImageChoice("upload")}
          >
            <Icon as={FcGallery} fontSize="30px" />
            <Text fontSize="14px" fontWeight="600">
              Unggah gambar
            </Text>
            <Text fontSize="13px">Rasio Aspek: 16:9</Text>
            <Text fontSize="13px">Ukuran yang direkomendasikan: 1024x576</Text>
            <Text fontSize="13px">
              Gunakan area unggah untuk mengecek gambar
            </Text>
          </VStack>
          <VStack
            w="100%"
            h="100%"
            bg={lightgray}
            borderRadius="10px"
            borderWidth={
              course && course.image ? (course.image.choice === "skip" ? "3px" : "1px") : "1px"
            }
            borderColor={
              course && course.image
                ? course.image.choice === "skip"
                  ? midblue2
                  : midgray
                : "1px"
            }
            textAlign="center"
            justify="center"
            spacing={1}
            p="20px"
            _hover={{ cursor: "pointer" }}
            onClick={() => setImageChoice("skip")}
          >
            <Text fontSize="16px" fontWeight="500">
              Saya tidak punya gambar
            </Text>
            <Text fontSize="13px">
              Lewatkan sekarang, saya akan tambahkan nanti
            </Text>
          </VStack>
        </SimpleGrid>
        <Flex w="100%" justify="space-between" mt="25px">
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={() => navigate("/courses/create/step-1")}
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
              bg: course && course.image
                ? course.image.choice
                  ? midblue1
                  : lightblue1
                : lightblue1,
              cursor: course && course.image
                ? course.image.choice
                  ? "pointer"
                  : "not-allowed"
                : "not-allowed",
            }}
            onClick={
              course && course.image
                ? course.image.choice
                  ? () => navigate("/courses/create/step-3")
                  : undefined
                : undefined
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

export default CreateCourseStep2;
