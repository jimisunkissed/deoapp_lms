import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { db } from "../../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import newCourse from "../../hooks/newCourse";
import { LuX } from "react-icons/lu";
import { TbHelpCircleFilled } from "react-icons/tb";
import Color from "../../Color";

function CreateCourseStep3() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, midblue1, midblue2 } =
    Color;

  // Navigate
  const navigate = useNavigate();

  // Zustand
  const { course, setPricePlan, reset } = newCourse();

  // Select useState
  const [editPlan, setEditPlan] = useState(false);
  const [type, setType] = useState(null);
  const [plan, setPlan] = useState(null);

  // Create Empty Plan
  const createPlan = (type) => {
    if (type === "OTP") {
      setPlan({ type: "OTP", price: 0, name: "", desc: "" });
    } else if (type === "SUB") {
      setPlan({ type: "SUB", price: 0, freq: "", name: "", desc: "" });
    } else if (type === "FRE") {
      setPlan({ type: "FRE", name: "", desc: "" });
    }
  };

  // Price Plan
  const pricePlan = [
    { type: "OTP", head: "Sekali bayar", detail: "Pelanggan membayar sekali" },
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
    {
      type: "SKP",
      head: "Saya belum tahu",
      detail: "Lewati untuk sekarang, akan saya tambahkan nanti",
    },
  ];

  // Check Form
  function checkForm(form) {
    let isFilled = true;
    if (form.name === "") {
      isFilled = false;
    }
    if (form.desc === "") {
      isFilled = false;
    }
    if (form.type != "OTP") {
      if (form.price <= 0) {
        isFilled = false;
      }
    }
    if (form.type === "SUB") {
      if (form.freq === "") {
        isFilled = false;
      }
    }
    return isFilled;
  }

  const toast = useToast();

  // Create Course
  const createCourse = async (collectionName) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        name: course.name,
        date: course.date,
        sale: course.sale,
        enrollment: course.enrollment,
        isPublished: course.isPublished,
        image: course.image,
        pricePlan: course.pricePlan,
        projectId: course.projectId,
        section: course.section,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate(`/courses/${docRef.id}/setup`);
    } catch (e) {
      console.error("Error adding document: ", e);
      toast({
        title: "Gagal membuat kursus",
        status: "error",
        duration: "3000",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (editPlan) {
      if (course.pricePlan[0].name === plan.name) {
        createCourse("lms_course");
      }
    }
  }, [course.pricePlan]);

  // Page Interface
  return (
    <VStack
      minH="100%"
      w="100%"
      bg={lightgray}
      justify="center"
      p={{ base: "15px", md: "25px" }}
    >
      <VStack
        w="100%"
        maxW="550px"
        bg="white"
        borderRadius="10px"
        borderWidth="1px"
        borderColor={midgray}
        spacing={1}
        p={{ base: "15px", md: "25px" }}
      >
        <Flex w="100%" justify="space-between">
          <Text fontSize="15px" fontWeight="500">
            3/3
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
        {/* Selection */}
        <VStack display={editPlan ? "none" : "flex"} w="100%" p="15px">
          <Text
            w="100%"
            fontSize={{ base: "24px", md: "35px" }}
            fontWeight="500"
            textAlign="center"
          >
            Tentukan harga
          </Text>
          <Text w="90%" fontSize="14px" color={darkgray} textAlign="center">
            Anda bisa mengubahnya nanti
          </Text>
          {pricePlan.map((data, index) => (
            <VStack
              key={index}
              h={{ base: "90px", md: "110px" }}
              w="100%"
              bg={lightgray}
              borderRadius="8px"
              borderWidth={data.type === type ? "3px" : "1px"}
              borderColor={data.type === type ? midblue2 : midgray}
              textAlign="center"
              justify="center"
              spacing="0px"
              p="15px"
              _hover={{ cursor: "pointer" }}
              onClick={() => setType(data.type)}
            >
              <Text
                w="85%"
                fontSize={{ base: "16px", md: "24px" }}
                fontWeight="600"
              >
                {data.head}
              </Text>
              <Text w="85%" fontSize={{ base: "13px", md: "16px" }}>
                {data.detail}
              </Text>
            </VStack>
          ))}
        </VStack>
        <VStack display={editPlan ? "flex" : "none"} w="100%" p="15px">
          <Text fontSize={{ base: "18px", md: "22px" }} fontWeight="500">
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
              : type === "SUB"
              ? "Bayar setiap jangka waktu tertentu untuk mendapatkan akses"
              : type === "FRE"
              ? "Pelanggan mendapat akses tanpa membayar"
              : undefined}
          </Text>
          <FormControl display={type === "FRE" ? "none" : "flex"}>
            <VStack w="100%" align="baseline" spacing={0}>
              <FormLabel>
                <HStack>
                  <Text fontSize={{ base: "14px", md: "16px" }}>Harga</Text>
                  <Center>
                    <Icon as={TbHelpCircleFilled} />
                  </Center>
                </HStack>
              </FormLabel>
              {plan && plan.price !== undefined && plan.price !== null && (
                <InputGroup>
                  <NumberInput
                    w="100%"
                    step={0}
                    min={0}
                    value={plan.price}
                    onChange={(valueString) =>
                      setPlan((prev) => ({
                        ...prev,
                        price: parseInt(valueString) || 0,
                      }))
                    }
                  >
                    <InputLeftElement h="100%" color="gray.600">
                      Rp.
                    </InputLeftElement>
                    <NumberInputField
                      value={plan.price}
                      h="35px"
                      fontSize={{ base: "14px", md: "16px" }}
                      color="gray.600"
                      textIndent="20px"
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper
                        onClick={() =>
                          setPlan((prev) => ({
                            ...prev,
                            price: prev.price + 25000,
                          }))
                        }
                      />
                      <NumberDecrementStepper
                        onClick={() =>
                          setPlan((prev) => ({
                            ...prev,
                            price: prev.price - 25000,
                          }))
                        }
                      />
                    </NumberInputStepper>
                  </NumberInput>
                </InputGroup>
              )}
            </VStack>
          </FormControl>
          {plan && plan.freq !== undefined && plan.freq !== null ? (
            <FormControl display={type === "SUB" ? "flow" : "none"} w="100%">
              <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                Frekuensi
              </FormLabel>
              <Select
                h="35px"
                placeholder="Pilih frekuensi"
                color="gray.600"
                onChange={(e) =>
                  setPlan((prev) => ({ ...prev, freq: e.target.value }))
                }
              >
                <option value="2 minggu">Setiap 2 minggu</option>
                <option value="bulan">Setiap bulan</option>
                <option value="3 bulan">Setiap 3 bulan</option>
              </Select>
            </FormControl>
          ) : undefined}
          {plan && plan.name !== undefined && plan.name !== null && (
            <FormControl w="100%">
              <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                Nama
              </FormLabel>
              <Input
                value={plan.name}
                h="35px"
                w="100%"
                color="gray.600"
                onChange={(e) =>
                  setPlan((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </FormControl>
          )}
          {plan && plan.desc !== undefined && plan.desc !== null && (
            <FormControl w="100%">
              <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                Deskripsi
              </FormLabel>
              <Textarea
                value={plan.desc}
                h="120px"
                w="100%"
                color="gray.600"
                resize="none"
                onChange={(e) =>
                  setPlan((prev) => ({ ...prev, desc: e.target.value }))
                }
              />
            </FormControl>
          )}
        </VStack>
        {/* Navigate Button */}
        <Flex w="100%" justify="space-between" mt="25px">
          <Center
            h="35px"
            w="90px"
            bg={lightblue1}
            borderRadius="8px"
            fontSize="13px"
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={
              editPlan
                ? () => setEditPlan(false)
                : () => navigate("/courses/create/step-2")
            }
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
            _hover={{ bg: midblue1, cursor: "pointer" }}
            onClick={async () => {
              if (type === "SKP") {
                createCourse("lms_course");
              } else if (editPlan && checkForm(plan) === true) {
                setPricePlan(plan);
              } else if (editPlan && checkForm(plan) === false) {
                toast({
                  title: "Formulir belum lengkap",
                  status: "warning",
                  duration: "3000",
                  isClosable: true,
                });
              } else if (type !== null) {
                setEditPlan(true);
                createPlan(type);
              } else if (type === null) {
                toast({
                  title: "Sistem pembayaran belum dipilih",
                  status: "warning",
                  duration: "3000",
                  isClosable: true,
                });
              }
            }}
            transition="background-color 0.2s ease"
          >
            Selanjutnya
          </Center>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default CreateCourseStep3;
