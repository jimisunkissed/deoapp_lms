import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import useEfile from "../../hooks/efile";
import Color from "../../Color";
import { FaPencil } from "react-icons/fa6";
import { LuPlusCircle, LuUpload } from "react-icons/lu";
import { FcGallery, FcFile } from "react-icons/fc";

function EfileSetup() {
  // Color Palette
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, midblue1 } =
    Color;

  // Navigate
  const navigate = useNavigate();
  const { id } = useParams();

  // Zustand eFile
  const { efile, setCategory, setName } = useEfile();
  const selectedEfile = efile.find((c) => c.id === parseInt(id));

  // useState
  const [value, setValue] = React.useState("1");
  const [editName, setEditName] = useState(false);
  const [editCat, setEditCat] = useState(false);

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
                    Ubah Deskripsi
                  </Text>
                </HStack>
              </HStack>
              <Text fontSize={{ base: "12px", md: "14px" }} w="100%">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                sit perspiciatis culpa sunt quidem! Pariatur, dicta debitis.
                Culpa eveniet, harum rerum totam nisi reiciendis ex
                reprehenderit laborum velit eos saepe neque, perspiciatis unde
                sint voluptate assumenda quae, non maxime mollitia perferendis
                corporis illo! Enim excepturi, voluptatibus dolor esse illo
                laudantium.
              </Text>
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
                  onClick={() => setEditCat(true)}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Ubah Kategori
                  </Text>
                </HStack>
                <Center
                  display={editCat ? "flex" : "none"}
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => setEditCat(false)}
                  transition="background-color 0.2s ease"
                >
                  <Text fontSize={{ base: "12px", md: "14px" }}>Simpan</Text>
                </Center>
              </HStack>
              <Text
                display={editCat ? "none" : "flex"}
                h="35px"
                w="100%"
                fontSize={{ base: "12px", md: "14px" }}
                alignItems="center"
              >
                ebook
              </Text>
              <Select
                display={editCat ? "flex" : "none"}
                h="35px"
                placeholder="Pilih Kategori"
                fontSize={{ base: "12px", md: "14px" }}
                onChange={(e) => setCategory(e.target.value, parseInt(id))}
              >
                <option value="ebook">eBook</option>
                <option value="audiobook">Audiobook</option>
                <option value="gambar">Gambar</option>
              </Select>
            </VStack>
            {/* Harga */}
            <Text
              w="100%"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
            >
              Jual produk anda
            </Text>
            <VStack w="100%" align="baseline">
              <Text w="100%" fontSize={{ base: "14px", md: "16px" }}>
                Harga
              </Text>
              {selectedEfile.pricePlan.length > 0 ? (
                <VStack
                  w="100%"
                  borderRadius="8px"
                  borderWidth="1px"
                  borderColor={midgray}
                  spacing="0px"
                  overflow="hidden"
                >
                  {selectedEfile.pricePlan.map((data, index) => (
                    <Flex
                      key={index}
                      flexDirection="column"
                      h="50px"
                      w="100%"
                      bg={lightgray}
                      borderBottomWidth={
                        index === selectedEfile.pricePlan.length - 1
                          ? "0px"
                          : "1px"
                      }
                      borderColor={midgray}
                      fontSize="13px"
                      align="baseline"
                      justify="center"
                      p="10px"
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
                        <Text>
                          {data.type === "INS" ? `${data.nPay} x ` : undefined}
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
                        minH="20px"
                        w="200px"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                      >
                        {data.desc}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              ) : (
                <>
                  <Text w="100%" fontSize={{ base: "12px", md: "14px" }}>
                    Tentukan harga kursus anda dengan beragam sistem yang
                    berbeda sesuai dengan keinginan anda
                  </Text>
                  <Center
                    bg={lightblue2}
                    borderRadius="8px"
                    fontSize={{ base: "12px", md: "14px" }}
                    p="5px 10px 5px 10px"
                    _hover={{ bg: midblue1, cursor: "pointer" }}
                    transition="background-color 0.2s ease"
                  >
                    Buat rencana harga
                  </Center>
                </>
              )}
            </VStack>
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
                  onClick={() => setEditName(true)}
                  transition="background-color 0.2s ease"
                >
                  <Icon as={FaPencil} fontSize={{ base: "14px", md: "16px" }} />
                  <Text fontSize={{ base: "12px", md: "14px" }}>
                    Ubah Judul
                  </Text>
                </HStack>
                <Center
                  display={editName ? "flex" : "none"}
                  h="100%"
                  bg={lightblue2}
                  borderRadius="8px"
                  p="10px"
                  _hover={{ bg: midblue1, cursor: "pointer" }}
                  onClick={() => setEditName(false)}
                  transition="background-color 0.2s ease"
                >
                  <Text fontSize={{ base: "12px", md: "14px" }}>Simpan</Text>
                </Center>
              </HStack>
              <Text
                display={editName ? "none" : "flex"}
                h="35px"
                w="100%"
                fontSize={{ base: "12px", md: "14px" }}
                alignItems="center"
              >
                {selectedEfile.name ? selectedEfile.name : "Belum ada nama"}
              </Text>
              <Input
                display={editName ? "flex" : "none"}
                h="35px"
                value={selectedEfile.name}
                fontSize={{ base: "12px", md: "14px" }}
                onChange={(e) => setName(e.target.value, parseInt(id))}
              />
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
              <Center w="100%" aspectRatio="1.77" bg={lightgray}>
                <Icon as={FcGallery} fontSize="50px" />
              </Center>
            </VStack>
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  );
}

export default EfileSetup;
