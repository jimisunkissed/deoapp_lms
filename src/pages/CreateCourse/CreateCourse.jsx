import { useState, useEffect } from "react";
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
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import newCourse from "../../hooks/newCourse";
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

  // Change Publish Status
  const changePublish = async (id, index, pubStatus) => {
    try {
      const docRef = doc(db, "lms_course", id);
      await updateDoc(docRef, { isPublished: !pubStatus });
      console.log("Document updated with ID: ", id);
      setCourseList((prev) => {
        const newState = [...prev];
        newState[index].isPublished = !pubStatus;
        return newState;
      });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  // Delete Course
  const [sectionIds, setSectionIds] = useState([]);

  const deleteParent = async (collectionName, id) => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      console.log("Document deleted with ID: ", id);
      setCourseList((prev) => prev.filter((course) => course.id !== id));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  const deleteChildren = async (collectionName, prop, id) => {
    try {
      const q = query(collection(db, collectionName), where(prop, "==", id));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        if (collectionName === "lms_section") {
          setSectionIds((prev) => [...prev, doc.id]);
        }
        console.log(`Document deleted with ${prop}: `, id);
        console.log("Document deleted with ID: ", doc.id);
      });
    } catch (e) {
      console.error("Error deleting documents: ", e);
    }
  };

  const deleteFamily = async (courseId) => {
    try {
      await deleteParent("lms_course", courseId);
      await deleteChildren("lms_section", "courseId", courseId);
      sectionIds.forEach(async (sectionId) => {
        await deleteChildren("lms_lesson", "sectionId", sectionId);
      });
    } catch (e) {
      console.error("Error deleting course and children: ", e);
    }
  };

  // Zustand Course
  const { reset } = newCourse();

  // Table header
  const heading = [
    "Nama",
    "Tanggal",
    "Penjualan",
    "Siswa",
    "Status",
    "Tindakan",
  ];

  // Date Function
  const displayDate = (timestamp) => {
    const dateObject = timestamp.toDate();

    // Extract components
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    return formattedDate;
  };

  // Price Displayer
  const priceStr = (price) => {
    let priceArr = price.toString().split("");
    let i = -3;
    while (i > -priceArr.length) {
      priceArr.splice(i, 0, ".");
      i = i - 4;
    }
    priceArr.splice(0, 0);
    return priceArr.join("");
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
          minW="610px"
          spacing="2px"
          p={{ base: "15px", md: "25px" }}
        >
          {/* Course Header */}
          <Text w="100%" fontSize="24px" fontWeight="600" mb="10px">
            Kursus
          </Text>
          {/* Table Header */}
          <HStack
            h="40px"
            w="100%"
            minW="580px"
            bg={lightblue1}
            borderRadius="8px"
            spacing={0}
          >
            {heading.map((head, index) => (
              <Box
                key={index}
                w={`${100 / heading.length}%`}
                minW={
                  head === "Nama"
                    ? "150px"
                    : head === "Tanggal"
                    ? "90px"
                    : head === "Penjualan"
                    ? "90px"
                    : head === "Siswa"
                    ? "60px"
                    : head === "Status"
                    ? "110px"
                    : head === "Tindakan"
                    ? "80px"
                    : undefined
                }
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
                  minW="90px"
                  fontSize="13px"
                  pl="10px"
                >
                  <Text>{data.date ? displayDate(data.date) : "-"}</Text>
                </Box>
                {/* Table Fill Sales */}
                <Box
                  w={`${100 / heading.length}%`}
                  minW="90px"
                  fontSize="13px"
                  pl="10px"
                >
                  <Text>{data.sale ? `Rp ${priceStr(data.sale)}` : "-"}</Text>
                </Box>
                {/* Table Fill Enrollment */}
                <Box
                  w={`${100 / heading.length}%`}
                  minW="60px"
                  fontSize="13px"
                  pl="10px"
                >
                  <Text>{data.enrollment ? data.enrollment : "-"}</Text>
                </Box>
                {/* Table Fill Publish Status */}
                <Box
                  w={`${100 / heading.length}%`}
                  minW="110px"
                  fontSize="13px"
                  pl="10px"
                >
                  <Center
                    h="24px"
                    w="min-content"
                    bg={lightblue2}
                    borderRadius="12px"
                    fontSize="12px"
                    color={darkblue2}
                    p="0px 8px 0px 8px"
                  >
                    <Text whiteSpace="nowrap">
                      {data.isPublished ? "Ditampilkan" : "Disembunyikan"}
                    </Text>
                  </Center>
                </Box>
                {/* Table Fill Action */}
                <Box w={`${100 / heading.length}%`} minW="80px" pl="10px">
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
                        onClick={() =>
                          changePublish(data.id, index, data.isPublished)
                        }
                      >
                        <Text fontSize="12px" pl="10px">
                          {data.isPublished
                            ? "Sembunyikan kursus"
                            : "Tampilkan kursus"}
                        </Text>
                      </MenuItem>
                      <MenuItem h="30px" borderRadius="5px" p={0}>
                        <Text fontSize="12px" pl="10px">
                          Duplikat kursus
                        </Text>
                      </MenuItem>
                      <MenuItem h="30px" borderRadius="5px" p={0}>
                        <Text
                          fontSize="12px"
                          color="red.600"
                          pl="10px"
                          onClick={() => deleteFamily(data.id)}
                        >
                          Hapus kursus
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
            color={darkgray}
            spacing={0}
            p="2px 0px 2px 0px"
            _hover={{ color: "black", cursor: "pointer" }}
            onClick={() => {
              reset();
              navigate("/courses/create/step-1");
            }}
            transition="color 0.2s ease"
          >
            <Icon as={LuPlusCircle} />
            <Text fontSize="14px" ml="10px">
              Kursus Baru
            </Text>
          </Center>
          {/* <Center h='50px' w='50px' bg='pink' onClick={() => setSectionIds((prev) => [...prev, 'Kambing'])}>
            Press
          </Center>
          {sectionIds.map((data, index) => (
            <Text key={index}>{data}</Text>
          ))} */}
        </VStack>
      </Box>
    </VStack>
  );
}

export default CreateCourse;
