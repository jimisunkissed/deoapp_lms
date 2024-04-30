import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { db } from "../../../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import Color from "../../Color";
import { FaPencil } from "react-icons/fa6";
import { LuPlusCircle, LuUpload, LuMoreVertical } from "react-icons/lu";
import { FcGallery, FcFile } from "react-icons/fc";
import { TbHelpCircleFilled } from "react-icons/tb";

function EfileSetup() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, midblue1 } =
    Color;

  // Navigate
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch Data Efile
  const [efile, setEfile] = useState(null);

  const getEfile = async (collectionName, key) => {
    try {
      const docRef = doc(db, collectionName, key);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const efileData = docSnapshot.data();
        setEfile(efileData);
      } else {
        console.log("No such document exists!");
      }
    } catch (error) {
      console.error("Error fetching product: ", error);
    }
  };

  useEffect(() => {
    getEfile("lms_efile", id);
  }, [id]);

  // useState
  const [value, setValue] = React.useState("1");
  const [editName, setEditName] = useState(false);
  const [editCat, setEditCat] = useState(false);
  const [editPlan, setEditPlan] = useState(false);
  const [type, setType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Price Plan List
  const pricePlan = [
    { type: "OTP", head: "Sekali bayar", detail: "Pelanggan membayar sekali" },
    {
      type: "INS",
      head: "Angsur",
      detail: "Bayar secara berangsur untuk jangka waktu yang tetap",
    },
    {
      type: "FRE",
      head: "Gratis",
      detail: "Pelanggan mendapat akses tanpa membayar",
    },
  ];

  return (
    <VStack
      h="100%"
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
          Pengaturan Produk
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          gap={{ base: "15px", md: "25px" }}
        >
          {/* Left Column */}
          <VStack w={{ base: "100%", md: "60%" }} spacing={2}>
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Atur Detil Produk
            </Text>
            <VStack w="100%">
              <FormControl w="100%">
                <FormLabel
                  fontSize={{ base: "14px", md: "16px" }}
                  fontWeight="400"
                >
                  Metode Unggah
                </FormLabel>
                <RadioGroup onChange={setValue} value={value}>
                  <HStack direction="row">
                    <Radio value="1">
                      <Text fontSize={{ base: "14px", md: "16px" }}>
                        Unggah File
                      </Text>
                    </Radio>
                    <Radio value="2">
                      <Text fontSize={{ base: "14px", md: "16px" }}>
                        Alihkan ke URL
                      </Text>
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <VStack
                display={value === "1" ? "flex" : "none"}
                w="100%"
                bg={lightgray}
                borderRadius="8px"
                borderWidth="1px"
                borderColor={midgray}
                p="20px"
              >
                <Icon as={FcFile} fontSize="40px" />
                <Text
                  fontSize={{ base: "12px", md: "14px" }}
                  w={{ base: "90%", md: "80%" }}
                >
                  File yang diterima: .pdf, .epub, .txt, .doc, .docx, .jpg,
                  .gif, .png, .tif, .webp, .csv, .xls, .xlsx, .ppt, .pptx, .mp3,
                  .m4a, .aac
                </Text>
                <HStack
                  h="25px"
                  bg="white"
                  borderRadius="8px"
                  borderWidth="1px"
                  borderColor={midgray}
                  p="15px"
                  _hover={{ cursor: "pointer" }}
                >
                  <Icon as={LuUpload} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "13px", md: "15px" }}>Unggah</Text>
                </HStack>
              </VStack>
              <VStack display={value === "2" ? "flex" : "none"} w="100%">
                <FormControl w="100%">
                  <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                    URL (Wajib)
                  </FormLabel>
                  <Input
                    h="35px"
                    w="100%"
                    placeholder="https://..."
                    fontSize={{ base: "14px", md: "16px" }}
                  />
                </FormControl>
                <FormControl w="100%">
                  <FormLabel fontSize={{ base: "14px", md: "16px" }}>
                    CTA button text
                  </FormLabel>
                  <Input h="35px" w="100%" />
                </FormControl>
              </VStack>
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  Deskripsi Produk
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Atur Deskripsi
                  </Text>
                </HStack>
              </HStack>
              <Box fontSize={{ base: "12px", md: "14px" }} w="100%">
                {efile ? (
                  efile.description === "" ? (
                    "Belum ada deskripsi"
                  ) : (
                    <Text>{efile.description}</Text>
                  )
                ) : (
                  <Skeleton h="80px" w="100%" borderRadius="5px" />
                )}
              </Box>
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  Kategori Produk
                </Text>
                <HStack
                  display={editCat ? "none" : "flex"}
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  // onClick={() => setEditCat(true)}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Atur Kategori
                  </Text>
                </HStack>
                <Center
                  display={editCat ? "flex" : "none"}
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  // onClick={() => setEditCat(false)}
                  transition="background-color 0.2s ease"
                >
                  <Text fontSize={{ base: "12px", md: "14px" }}>Simpan</Text>
                </Center>
              </HStack>
              <Box
                display={editCat ? "none" : "flex"}
                h="35px"
                w="100%"
                fontSize={{ base: "12px", md: "14px" }}
                alignItems="center"
              >
                {efile ? (
                  efile.category === "" ? (
                    "Belum pilih kategori"
                  ) : (
                    <Text>{efile.category}</Text>
                  )
                ) : (
                  <Skeleton h="25px" w="100%" borderRadius="5px" />
                )}
              </Box>
              <Select
                display={editCat ? "flex" : "none"}
                h="35px"
                placeholder="Pilih Kategori"
                fontSize={{ base: "12px", md: "14px" }}
                onChange={(e) => setCategory(e.target.value, parseInt(id))}
              >
                <option value="eBook">eBook</option>
                <option value="Audiobook">Audiobook</option>
                <option value="Gambar">Gambar</option>
              </Select>
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
              {efile ? (
                efile.pricePlan.length > 0 ? (
                  <VStack
                    w="100%"
                    borderRadius="8px"
                    borderWidth="1px"
                    borderColor={midgray}
                    spacing="0px"
                    overflow="hidden"
                  >
                    {efile.pricePlan.map((data, index) => (
                      <Flex
                        key={index}
                        h="50px"
                        w="100%"
                        bg={lightgray}
                        borderBottomWidth={
                          index === efile.pricePlan.length - 1 ? "0px" : "1px"
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
                          <Text
                            display={{ base: "none", sm: "flex" }}
                          >
                            {data.desc.length > 30 ? `${data.desc.slice(0, 30)}...` : data.desc}
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
              Kustomisasi kursus
            </Text>
            <VStack w="100%">
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600" fontSize={{ base: "14px", md: "16px" }}>
                  Nama Produk
                </Text>
                <HStack
                  display={editName ? "none" : "flex"}
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  // onClick={() => setEditName(true)}
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
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  // onClick={() => setEditName(false)}
                  transition="background-color 0.2s ease"
                >
                  <Text fontSize={{ base: "12px", md: "14px" }}>Simpan</Text>
                </Center>
              </HStack>
              {efile ? (
                <Text
                  display={editName ? "none" : "flex"}
                  h="35px"
                  w="100%"
                  fontSize={{ base: "12px", md: "14px" }}
                  alignItems="center"
                >
                  {efile.name === "" ? "Belum ada judul" : efile.name}
                </Text>
              ) : (
                <Skeleton h="25px" w="100%" borderRadius="5px" />
              )}
              {/* <Input
                display={editName ? "flex" : "none"}
                h="35px"
                value={selectedEfile.name}
                fontSize={{ base: "12px", md: "14px" }}
                onChange={(e) => setName(e.target.value, parseInt(id))}
              /> */}
            </VStack>
            <VStack w="100%">
              <HStack h="35px" w="100%" justify="space-between">
                <Text fontWeight="600" fontSize={{ base: "14px", md: "16px" }}>
                  Gambar
                </Text>
                <HStack
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  transition="background-color 0.2s ease"
                >
                  <Icon
                    as={LuPlusCircle}
                    fontSize={{ base: "14px", md: "16px" }}
                  />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Tambah gambar
                  </Text>
                </HStack>
              </HStack>
              {efile ? (
                <Center w="100%" aspectRatio="1.77" bg={lightgray}>
                  <Icon as={FcGallery} fontSize="50px" />
                </Center>
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

export default EfileSetup;
