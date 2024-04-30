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
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import useEfile from "../../hooks/efile";
import { LuPlusCircle, LuMoreVertical } from "react-icons/lu";
import Color from "../../Color";

function CreateEfile() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, darkblue2 } =
    Color;

  const heading = ["Name", "Date", "Sales", "Enrollments", "Status", "Actions"];

  const { efile, addEfile, deleteEfile, setPublish } = useEfile();

  // Navigate
  const navigate = useNavigate();

  // Page Interface
  return (
    <VStack
      h="100%"
      w="100%"
      bg={lightgray}
      spacing="25px"
      p={{ base: "15px", md: "25px" }}
    >
      <Box
        w="100%"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        overflowX="auto"
      >
        <VStack h="100%" w="100%" minW="600px" spacing='2px' p={{ base: "15px", md: "25px" }}>
          <Text w="100%" fontSize="24px" fontWeight="600" mb='10px'>
            eFiles
          </Text>
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
          {efile.map((data, index) => (
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
                  onClick={() => navigate(`/efiles/${data.id}/setup`)}
                >
                  {data.name ? data.name : "-"}
                </Text>
              </Box>
              {/* Table Fill Date */}
              <Box w={`${100 / heading.length}%`} fontSize="13px" pl="10px">
                <Text>
                  {new Date(data.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
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
                      onClick={() => setPublish(data.id)}
                    >
                      <Text fontSize="12px" pl="10px">
                        {data.isPublished
                          ? "Unpublish eFile"
                          : "Publish eFile"}
                      </Text>
                    </MenuItem>
                    <MenuItem h="30px" borderRadius="5px" p={0}>
                      <Text fontSize="12px" pl="10px">
                        Duplicate eFile
                      </Text>
                    </MenuItem>
                    <MenuItem
                      h="30px"
                      borderRadius="5px"
                      p={0}
                      onClick={() => deleteEfile(data.id)}
                    >
                      <Text fontSize="12px" color="red.600" pl="10px">
                        Delete eFile
                      </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </HStack>
          ))}
          {/* Add eFile */}
          <Center
            h="40px"
            w="100%"
            bg={efile.length % 2 === 0 ? "white" : lightblue1}
            borderRadius="8px"
            spacing={0}
            p="2px 0px 2px 0px"
          >
            <Icon
              as={LuPlusCircle}
              fontSize="20px"
              color={darkgray}
              _hover={{ color: "black", cursor: "pointer" }}
              onClick={() => {navigate("/efiles/create/step-1"); addEfile()}}
              transition="color 0.2s ease"
            />
          </Center>
        </VStack>
      </Box>
    </VStack>
  );
}

export default CreateEfile;