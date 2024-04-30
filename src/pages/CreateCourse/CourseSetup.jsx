import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Skeleton,
  Spacer,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { db } from "../../../firebaseconfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import Color from "../../Color";
import { FaPencil } from "react-icons/fa6";
import { LuPlusCircle, LuMoreVertical } from "react-icons/lu";
import { FcGallery } from "react-icons/fc";
import { TbHelpCircleFilled } from "react-icons/tb";

function CourseSetup() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, midblue1 } =
    Color;

  // Navigate
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch Data Course
  const [course, setCourse] = useState(null);

  const getCourse = async (collectionName, key) => {
    try {
      const docRef = doc(db, collectionName, key);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const courseData = docSnapshot.data();
        setCourse(courseData);
      } else {
        console.log("No such document exists!");
      }
    } catch (error) {
      console.error("Error fetching product: ", error);
    }
  };

  useEffect(() => {
    getCourse("lms_course", id);
  }, [id]);

  // Fetch Data Section
  const [sectionList, setSectionList] = useState(null);
  const [isSectionSorted, setIsSectionSorted] = useState(false);

  const getSectionById = async (collectionName, key) => {
    try {
      const q = query(
        collection(db, collectionName),
        where("courseId", "==", key)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const sections = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSectionList(sections);
      } else {
        setSectionList([]);
        console.log("No such document exists!");
      }
    } catch (error) {
      console.error("Error getting sections:", error);
    }
  };

  useEffect(() => {
    getSectionById("lms_section", id);
  }, [id]);

  useEffect(() => {
    if (sectionList && !isSectionSorted) {
      const sortedSections = [...sectionList].sort((a, b) => a.sort - b.sort);
      setSectionList(sortedSections);
      setIsSectionSorted(true);
    } else if (sectionList && isSectionSorted) {
      {
        sectionList.map((data) => {
          getLessonById("lms_lesson", data.id);
        });
      }
    }
  }, [sectionList, isSectionSorted]);

  // Fetch Data Lesson
  const [lessonList, setLessonList] = useState([]);
  const [isLessonSorted, setIsLessonSorted] = useState(null);

  const getLessonById = async (collectionName, key) => {
    try {
      const q = query(
        collection(db, collectionName),
        where("sectionId", "==", key)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const lessons = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLessonList((prev) => {
          const temp = [...prev];
          temp.push(lessons);
          return temp;
        });
      } else {
        setLessonList((prev) => {
          const temp = [...prev];
          temp.push([]);
          return temp;
        });
        console.log("No such document exists!");
      }
    } catch (error) {
      console.error("Error getting lessons:", error);
    }
  };

  const sortLessonList = () => {
    for (let i = 0; i < lessonList.length; i++) {
      if (!isLessonSorted[i]) {
        const sortedLesson = [...lessonList[i]].sort((a, b) => a.sort - b.sort);
        setLessonList((prev) => {
          const newState = [...prev];
          newState[i] = sortedLesson;
          return newState;
        });
        setIsLessonSorted((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }
    }
  };

  const lessonSorted = () => {
    let temp = true;
    if (isLessonSorted === null) {
      return false;
    } else {
      for (let i = 0; i < isLessonSorted; i++) {
        if (isLessonSorted[i] === false) {
          temp = isLessonSorted[i];
        }
      }
      return temp;
    }
  };

  useEffect(() => {
    const newState = [];
    for (let i = 0; i < lessonList.length; i++) {
      newState.push(false);
    }
    setIsLessonSorted(newState);
    sortLessonList();
  }, [lessonList]);

  // useState
  const [editName, setEditName] = useState(false);
  const [editPlan, setEditPlan] = useState(false);
  const [type, setType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Change Course Name
  const [tempName, setTempName] = useState("");

  const saveName = async (id, newName) => {
    try {
      const docRef = doc(db, "lms_course", id);
      await updateDoc(docRef, { name: newName });
      console.log("Document updated with ID: ", id);
      setCourse((prev) => {
        const newState = { ...prev };
        newState.name = newName;
        return newState;
      });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  // Display Content Function
  const displayContent = (objectList) => {
    const content = { text: 0, image: 0, audio: 0, video: 0 };

    for (let i = 0; i < objectList.length; i++) {
      if (objectList[i].type === "TEX") {
        content.text = content.text + 1;
      } else if (objectList[i].type === "IMG") {
        content.image = content.image + 1;
      } else if (objectList[i].type === "AUD") {
        content.audio = content.audio + 1;
      } else if (objectList[i].type === "VID") {
        content.video = content.video + 1;
      }
    }

    let display = "";
    if (content.text > 0) {
      display = display + ", " + content.text + " teks";
    }
    if (content.image > 0) {
      display = display + ", " + content.image + " gambar";
    }
    if (content.audio > 0) {
      display = display + ", " + content.audio + " audio";
    }
    if (content.video > 0) {
      display = display + ", " + content.video + " video";
    }

    if (display === "") {
      return "Kosong";
    } else {
      return display.slice(1, undefined);
    }
  };

  // Price Plan List
  const pricePlan = [
    { type: "OTP", head: "Sekali bayar", detail: "Pelanggan membayar sekali" },
    {
      type: "INS",
      head: "Angsur",
      detail: "Bayar secara berangsur untuk jangka waktu yang tetap",
    },
    {
      type: "SUB",
      head: "Langganan",
      detail: "Bayar setiap jangka waktu tertentu untuk mendapatkan akses",
    },
    {
      type: "FRE",
      head: "Gratis",
      detail: "Pelanggan mendapat akses tanpa membayar",
    },
  ];

  const handleChangeImage = (value) => {
    console.log(value);
  };

  // Page Interface
  return (
    <VStack
      minH="100%"
      w="100%"
      bg={lightgray}
      spacing="25px"
      p={{ base: "15px", md: "25px" }}
    >
      <VStack
        w="100%"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        p={{ base: "15px", md: "25px" }}
      >
        <Text w="100%" fontSize={{ base: "20px", md: "24px" }} fontWeight="600">
          Pengaturan Kursus
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          gap={{ base: "15px", md: "25px" }}
        >
          {/* Left Column */}
          <VStack w={{ base: "100%", md: "60%" }} spacing={2}>
            {/* Kurikulum */}
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Kurikulum
            </Text>
            <VStack w="100%">
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  Pratinjau Kurikulum
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => navigate(`/courses/${id}/curriculum`)}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Atur Kurikulum
                  </Text>
                </HStack>
              </HStack>
              {!sectionList ? (
                <VStack h="70px" w="100%" spacing="5px">
                  <Skeleton height="20px" w="100%" borderRadius="5px" />
                  <Skeleton height="20px" w="100%" borderRadius="5px" />
                  <Skeleton height="20px" w="100%" borderRadius="5px" />
                </VStack>
              ) : (
                <VStack
                  w="100%"
                  borderRadius="8px"
                  borderWidth="1px"
                  borderColor={midgray}
                  spacing="0px"
                  overflow="hidden"
                >
                  {sectionList.length === 0 ? (
                    <Center
                      h="50px"
                      w="100%"
                      bg={lightgray}
                      fontSize="15px"
                      fontWeight="600"
                      align="center"
                      p="10px"
                    >
                      Kurikulum masih kosong
                    </Center>
                  ) : (
                    sectionList &&
                    isSectionSorted &&
                    sectionList.map((data, sectIdx) => (
                      <VStack key={sectIdx} w="100%" spacing={0}>
                        <Flex
                          h="50px"
                          w="100%"
                          bg={lightgray}
                          borderBottomWidth="1px"
                          borderColor={midgray}
                          align="center"
                          p="10px"
                        >
                          <Text fontSize="15px" fontWeight="600">
                            {data.sectionTitle}
                          </Text>
                        </Flex>
                        {lessonList && lessonSorted() ? (
                          lessonList.length === 0 ? undefined : lessonList[
                              sectIdx
                            ] ? (
                            lessonList[sectIdx].length === 0 ? (
                              <Flex
                                h="50px"
                                w="100%"
                                fontSize="13px"
                                align="center"
                                p="10px"
                                fontWeight="600"
                              >
                                Belum ada materi
                              </Flex>
                            ) : (
                              lessonList[sectIdx].map((child, lesIdx) => (
                                <Flex
                                  key={lesIdx}
                                  flexDirection="column"
                                  h="50px"
                                  w="100%"
                                  bg="white"
                                  borderBottomWidth={
                                    sectIdx === sectionList.length - 1 &&
                                    lesIdx === lessonList[sectIdx].length - 1
                                      ? "0px"
                                      : "1px"
                                  }
                                  borderColor={midgray}
                                  fontSize="13px"
                                  align="baseline"
                                  justify="center"
                                  p="10px"
                                >
                                  <Text w="100%" fontWeight="600">
                                    {child.lessonTitle}
                                  </Text>
                                  <Text w="100%">
                                    {displayContent(child.content)}
                                  </Text>
                                </Flex>
                              ))
                            )
                          ) : undefined
                        ) : undefined}
                      </VStack>
                    ))
                  )}
                </VStack>
              )}
            </VStack>
            {/* Harga */}
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Jual kursus anda
            </Text>
            <VStack w="100%" align="baseline">
              <HStack h="35px" w="100%" justify="space-between">
                <Text w="100%" fontSize={{ base: "14px", md: "16px" }}>
                  Harga
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => {
                    setEditPlan(false);
                    onOpen();
                  }}
                  transition="background-color 0.2s ease"
                >
                  <Icon
                    as={LuPlusCircle}
                    fontSize={{ base: "14px", md: "16px" }}
                  />
                  <Text
                    fontSize={{ base: "12px", md: "14px" }}
                    whiteSpace="nowrap"
                  >
                    Tambah Harga
                  </Text>
                </HStack>
              </HStack>
              {course ? (
                course.pricePlan.length > 0 ? (
                  <VStack
                    w="100%"
                    borderRadius="8px"
                    borderWidth="1px"
                    borderColor={midgray}
                    spacing="0px"
                    overflow="hidden"
                  >
                    {course.pricePlan.map((data, index) => (
                      <Flex
                        key={index}
                        h="50px"
                        w="100%"
                        bg={lightgray}
                        borderBottomWidth={
                          index === course.pricePlan.length - 1 ? "0px" : "1px"
                        }
                        borderColor={midgray}
                        align="center"
                        justify="space-between"
                        p="10px"
                      >
                        <Flex
                          flexDirection="column"
                          h="100%"
                          w="50%"
                          fontSize="13px"
                          align="baseline"
                          justify="center"
                        >
                          <HStack>
                            <Text fontWeight="600">
                              {data.type === "OTP"
                                ? "Sekali Bayar"
                                : data.type === "INS"
                                ? "Angsur"
                                : data.type === "SUB"
                                ? "Langganan"
                                : data.type === "FRE"
                                ? "Gratis"
                                : undefined}{" "}
                            </Text>
                            <Text display={{ base: "none", sm: "flex" }}>
                              {data.type === "INS"
                                ? `${data.nPay} x `
                                : undefined}
                              {data.type === "FRE"
                                ? undefined
                                : data.currency === "USD"
                                ? "$"
                                : data.currency === "IDR"
                                ? "Rp"
                                : undefined}
                              {data.type != "FRE" ? data.price : undefined}
                              {data.type === "SUB"
                                ? ` per ${data.freq}`
                                : undefined}
                            </Text>
                          </HStack>
                          <Text display={{ base: "none", sm: "flex" }}>
                            {data.desc.length > 30
                              ? `${data.desc.slice(0, 30)}...`
                              : data.desc}
                          </Text>
                          <Text display={{ base: "flex", sm: "none" }}>
                            {data.type === "INS"
                              ? `${data.nPay} x `
                              : undefined}
                            {data.type === "FRE"
                              ? undefined
                              : data.currency === "USD"
                              ? "$"
                              : data.currency === "IDR"
                              ? "Rp"
                              : undefined}
                            {data.type != "FRE" ? data.price : undefined}
                            {data.type === "SUB"
                              ? ` per ${data.freq}`
                              : undefined}
                          </Text>
                        </Flex>
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
                              onClick={() => {
                                setType(data.type);
                                setEditPlan(true);
                                onOpen();
                              }}
                            >
                              <Text fontSize="12px" pl="10px">
                                Ganti rencana
                              </Text>
                            </MenuItem>
                            <MenuItem h="30px" borderRadius="5px" p={0}>
                              <Text fontSize="12px" color="red.600" pl="10px">
                                Hapus Rencana
                              </Text>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Flex>
                    ))}
                  </VStack>
                ) : (
                  <Text w="100%" fontSize={{ base: "12px", md: "14px" }}>
                    Tentukan harga kursus anda dengan beragam sistem yang
                    berbeda sesuai dengan keinginan anda
                  </Text>
                )
              ) : (
                <Skeleton h="50px" w="100%" borderRadius="5px" />
              )}
            </VStack>
            {/* Price Pop Up */}
            <Modal
              isOpen={isOpen}
              onClose={() => {
                setType(null);
                onClose();
              }}
            >
              <ModalOverlay />
              <ModalContent ml="15px" mr="15px">
                {/* Sekali bayar */}
                <VStack display={editPlan ? "none" : "flex"} w="100%" p="15px">
                  <Text
                    w="100%"
                    fontSize={{ base: "24px", md: "35px" }}
                    fontWeight="500"
                    textAlign="center"
                  >
                    Tentukan harga
                  </Text>
                  <Text
                    w="90%"
                    fontSize="14px"
                    color={darkgray}
                    textAlign="center"
                  >
                    Anda bisa mengubahnya nanti
                  </Text>
                  {pricePlan.map((data, index) => (
                    <VStack
                      key={index}
                      h={{ base: "80px", md: "100px" }}
                      w="100%"
                      bg={lightgray}
                      borderRadius="8px"
                      borderWidth="1px"
                      borderColor={data.type === type ? "black" : midgray}
                      textAlign="center"
                      justify="center"
                      spacing="0px"
                      p="15px"
                      _hover={{ cursor: "pointer" }}
                      onClick={() => setType(data.type)}
                    >
                      <Text
                        fontSize={{ base: "16px", md: "24px" }}
                        fontWeight="600"
                      >
                        {data.head}
                      </Text>
                      <Text fontSize={{ base: "13px", md: "16px" }}>
                        {data.detail}
                      </Text>
                    </VStack>
                  ))}
                  <Flex w="100%" justify="space-between">
                    <Center
                      h="35px"
                      w="90px"
                      bg={lightblue1}
                      borderRadius="8px"
                      fontSize="13px"
                      _hover={{ bg: midblue1, cursor: "pointer" }}
                      onClick={() => {
                        setType(null);
                        onClose();
                      }}
                      transition="background-color 0.2s ease"
                    >
                      Batal
                    </Center>
                    <Center
                      h="35px"
                      w="90px"
                      bg={lightblue1}
                      borderRadius="8px"
                      fontSize="13px"
                      _hover={{ bg: midblue1, cursor: "pointer" }}
                      onClick={() => setEditPlan(true)}
                      transition="background-color 0.2s ease"
                    >
                      Selanjutnya
                    </Center>
                  </Flex>
                </VStack>
                <VStack display={editPlan ? "flex" : "none"} w="100%" p="15px">
                  <Text
                    fontSize={{ base: "18px", md: "22px" }}
                    fontWeight="500"
                  >
                    {type === "OTP"
                      ? "Sekali Bayar"
                      : type === "INS"
                      ? "Angsur"
                      : type === "SUB"
                      ? "Langganan"
                      : type === "FRE"
                      ? "Gratis"
                      : undefined}
                  </Text>
                  <Text fontSize={{ base: "14px", md: "16px" }}>
                    {type === "OTP"
                      ? "Pelanggan membayar sekali"
                      : type === "INS"
                      ? "Bayar secara berangsur untuk jangka waktu yang tetap"
                      : type === "SUB"
                      ? "Bayar setiap jangka waktu tertentu untuk mendapatkan akses"
                      : type === "FRE"
                      ? "Pelanggan mendapat akses tanpa membayar"
                      : undefined}
                  </Text>
                  <HStack w="100%" align="end">
                    <FormControl w="80%">
                      <FormLabel>
                        <HStack w="100%">
                          <Text fontSize={{ base: "14px", md: "16px" }}>
                            Harga
                          </Text>
                          <Center>
                            <Icon as={TbHelpCircleFilled} />
                          </Center>
                        </HStack>
                      </FormLabel>
                      <Select
                        h="35px"
                        flexGrow={1}
                        placeholder="Pilih Mata Uang"
                        fontSize={{ base: "14px", md: "16px" }}
                      >
                        <option value="option1">IDR</option>
                        <option value="option2">USD</option>
                        <option value="option3">EUR</option>
                      </Select>
                    </FormControl>
                    <NumberInput w="30%">
                      <NumberInputField
                        h="35px"
                        fontSize={{ base: "14px", md: "16px" }}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </HStack>
                  <FormControl
                    display={type === "INS" ? "flow" : "none"}
                    w="100%"
                  >
                    <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                      Banyak Pembayaran
                    </FormLabel>
                    <NumberInput>
                      <NumberInputField
                        h="35px"
                        fontSize={{ base: "14px", md: "16px" }}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                  <FormControl
                    display={type === "SUB" ? "flow" : "none"}
                    w="100%"
                  >
                    <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                      Frekuensi
                    </FormLabel>
                    <Select h="35px" placeholder="">
                      <option value="option1">Every 2 weeks</option>
                      <option value="option2">Every month</option>
                      <option value="option3">Every 3 months</option>
                    </Select>
                  </FormControl>
                  <FormControl w="100%">
                    <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                      Nama
                    </FormLabel>
                    <Input h="35px" w="100%" />
                  </FormControl>
                  <FormControl w="100%">
                    <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                      Deskripsi
                    </FormLabel>
                    <Textarea h="120px" w="100%" resize="none" />
                  </FormControl>
                  <HStack h="35px" w="100%" justify="space-between">
                    <Center
                      h="100%"
                      w="70px"
                      bg={lightblue1}
                      borderRadius="8px"
                      fontSize={{ base: "12px", md: "14px" }}
                      _hover={{ bg: lightblue2, cursor: "pointer" }}
                      onClick={() => {
                        setType(null);
                        onClose();
                      }}
                      transition="background-color 0.2s ease"
                    >
                      Batal
                    </Center>
                    <Center
                      h="100%"
                      w="70px"
                      bg={lightblue1}
                      borderRadius="8px"
                      fontSize={{ base: "12px", md: "14px" }}
                      _hover={{ bg: lightblue2, cursor: "pointer" }}
                      onClick={() => {
                        setType(null);
                        onClose();
                      }}
                      transition="background-color 0.2s ease"
                    >
                      Simpan
                    </Center>
                  </HStack>
                </VStack>
              </ModalContent>
            </Modal>
          </VStack>
          {/* Right Column */}
          <VStack w={{ base: "100%", md: "40%" }} spacing={2}>
            {/* Judul Kursus */}
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Detil
            </Text>
            <VStack w="100%">
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600" fontSize={{ base: "14px", md: "16px" }}>
                  Judul Kursus
                </Text>
                <Spacer />
                <HStack
                  display={editName ? "none" : "flex"}
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => {
                    setEditName(true);
                    setTempName(course?.name || "");
                  }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Atur Judul
                  </Text>
                </HStack>
                <Center
                  display={editName ? "flex" : "none"}
                  h="100%"
                  bg="red.400"
                  borderRadius="8px"
                  color="white"
                  p="10px"
                  _hover={{ bg: "red.500", cursor: "pointer" }}
                  onClick={() => {
                    setEditName(false);
                    setTempName("");
                  }}
                  transition="background-color 0.2s ease"
                >
                  <Text fontSize={{ base: "12px", md: "14px" }}>Batal</Text>
                </Center>
                <Center
                  display={editName ? "flex" : "none"}
                  h="100%"
                  bg="green.400"
                  borderRadius="8px"
                  color="white"
                  p="10px"
                  _hover={{ bg: "green.500", cursor: "pointer" }}
                  onClick={() => {
                    setEditName(false);
                    saveName(id, tempName);
                  }}
                  transition="background-color 0.2s ease"
                >
                  <Text fontSize={{ base: "12px", md: "14px" }}>Simpan</Text>
                </Center>
              </HStack>
              {course ? (
                <Text
                  display={editName ? "none" : "flex"}
                  h="35px"
                  w="100%"
                  fontSize={{ base: "12px", md: "14px" }}
                  alignItems="center"
                >
                  {course.name === "" ? "Belum ada judul" : course.name}
                </Text>
              ) : (
                <Skeleton h="25px" w="100%" borderRadius="5px" />
              )}
              <Input
                display={editName ? "flex" : "none"}
                h="35px"
                value={tempName}
                fontSize={{ base: "12px", md: "14px" }}
                onChange={(e) => setTempName(e.target.value)}
              />
            </VStack>
            <VStack w="100%">
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600" fontSize={{ base: "14px", md: "16px" }}>
                  Gambar
                </Text>
                {/* <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Atur gambar
                  </Text>
                </HStack> */}
              </HStack>
              {course ? (
                <VStack
                  w="100%"
                  aspectRatio="1.77"
                  bg={lightgray}
                  justify="center"
                >
                  <Icon as={FcGallery} fontSize="50px" />
                  {/* <Box position="relative">
                    <Input
                      type="file"
                      h="35px"
                      w="210px"
                      borderWidth="0px"
                      p="2px"
                      opacity="0"
                      onChange={(e) => handleChangeImage(e.target.files)}
                      position="absolute"
                      zIndex="-1"
                    />
                    <Button
                      as="label"
                      htmlFor="fileInput"
                      h="35px"
                      w="210px"
                      borderWidth="0px"
                      p="2px"
                    >
                      {"Choose File"}
                    </Button>
                  </Box> */}
                  <Input
                    type="file"
                    h="35px"
                    w="210px"
                    borderWidth="0px"
                    p="2px"
                    onChange={(e) => handleChangeImage(e.target.files)}
                  />
                </VStack>
              ) : (
                <Skeleton w="100%" aspectRatio="1.77" borderRadius="5px" />
              )}
            </VStack>
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CourseSetup;
