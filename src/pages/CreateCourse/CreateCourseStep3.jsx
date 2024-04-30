import React, { useState } from "react";
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
} from "@chakra-ui/react";
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
  const { course, reset } = newCourse();

  // Select useState
  const [editPlan, setEditPlan] = useState(false);
  const [type, setType] = useState(null);
  const [plan, setPlan] = useState(false);

  // Create Empty Plan
  const createPlan = (type) => {
    if (type === "OTP") {
      setPlan({ type: "OTP", price: 5000, name: "", desc: "" });
    } else if (type === "SUB") {
      setPlan({ type: "SUB", price: 0, freq: "", name: "", desc: "" });
    } else if (type === "FRE") {
      setPlan({ type: "FRE", name: "", desc: "" });
    }
  };

  // Price Plan
  const pricePlan = [
    { type: "OTP", head: "Sekali bayar", detail: "Pelanggan membayar sekali" },
    // {
    //   type: "INS",
    //   head: "Angsur",
    //   detail: "Bayar secara berangsur untuk jangka waktu yang tetap",
    // },
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
      type: "UNC",
      head: "Saya belum tahu",
      detail: "Lewati untuk sekarang, akan saya tambahkan nanti",
    },
  ];

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
              h={{ base: "80px", md: "100px" }}
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
              <Text fontSize={{ base: "16px", md: "24px" }} fontWeight="600">
                {data.head}
              </Text>
              <Text fontSize={{ base: "13px", md: "16px" }}>{data.detail}</Text>
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
              : type === "INS"
              ? "Bayar secara berangsur untuk jangka waktu yang tetap"
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
              {/* <Select
                h="35px"
                flexGrow={1}
                placeholder="Pilih Mata Uang"
                fontSize={{ base: "14px", md: "16px" }}
              >
                <option value="option1">IDR</option>
                <option value="option2">USD</option>
                <option value="option3">EUR</option>
              </Select> */}
              <InputGroup>
                <NumberInput
                  w="100%"
                  min={0}
                  step={5000}
                  value={plan.price}
                  // onChange={(e) =>
                  //   setPlan((prev) => ({
                  //     ...prev,
                  //     price: e.target.value,
                  //   }))
                  // }
                >
                  <InputLeftElement h="100%" color="gray.600" children="Rp." />
                  <NumberInputField
                    h="35px"
                    fontSize={{ base: "14px", md: "16px" }}
                    color="gray.600"
                    textIndent="20px"
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </InputGroup>
            </VStack>
          </FormControl>
          {/* <FormControl display={type === "INS" ? "flow" : "none"} w="100%">
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
          </FormControl> */}
          <FormControl display={type === "SUB" ? "flow" : "none"} w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>
              Frekuensi
            </FormLabel>
            <Select h="35px" placeholder="" color="gray.600">
              <option value="option1">Setiap 2 minggu</option>
              <option value="option2">Setiap bulan</option>
              <option value="option3">Setiap 3 bulan</option>
            </Select>
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>Nama</FormLabel>
            <Input
              h="35px"
              w="100%"
              value={plan.name}
              color="gray.600"
              onChange={(e) =>
                setPlan((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </FormControl>
          <FormControl w="100%">
            <FormLabel fontSize={{ base: "14px", md: "16px" }}>
              Deskripsi
            </FormLabel>
            <Textarea h="120px" w="100%" color="gray.600" resize="none" />
          </FormControl>
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
            onClick={
              editPlan
                ? () => navigate("/courses/1/setup")
                : type === "UNC"
                ? () => navigate("/courses/1/setup")
                : type === null
                ? undefined
                : () => {
                    setEditPlan(true);
                    createPlan(type);
                  }
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

export default CreateCourseStep3;
