import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Center, Flex, HStack, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ChartDasboard from './ChartDasboard';

function Home() {

  const data = [
    { id: 1, value: 0, label: 'New Signups' },
    { id: 2, value: 0, label: 'Active Students' },
    { id: 3, value: 0, label: 'Lesson Completions' },
    { id: 4, value: 0, label: 'Course Completions' }
  ];

  const datadua = [
    { id: 1, value: 1, label: 'New Signups' },
    { id: 2, value: 0, label: 'Active Students' },
    { id: 3, value: 0, label: 'Lesson Completions' },
    { id: 4, value: 0, label: 'Course Completions' }
  ];

  return (
    <>
      <Box>
        <HStack>
          <Box>
            <Flex direction='row' justifyContent='space-between' margin='1rem' gap={'40rem'}>
              <Text fontSize='xl'>Dashboard</Text>
              <ButtonGroup>
                <MdOutlineKeyboardVoice />
                <Button colorScheme='teal' variant='outline'>
                  View Your School
                </Button>
                <Button colorScheme='teal' variant='solid'>
                  Create New Product
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
        </HStack>

        <Box>

          <Box>
            <Box bg='yellow.100' w='100%' p={4} m={2} color='black' fontSize={'sm'} display={'flex'} alignItems={'center'} gap={3} borderRadius={'10px'} >
              <FaExclamationCircle />
              We don't have an address on file for your account.<Link>Please set an address here</Link>
            </Box>
          </Box>



          <Box>

            <ChartDasboard />





            <Box w="100%" h="13rem" m={2} borderWidth={'1px'} borderColor={'gray.300'} alignContent={'center'} borderRadius={'10px'}>
              <Flex flexDirection="column" justifyContent="space-between" h="100%">
                <Flex alignItems="center" justifyContent="center" flex="1">
                  <Image src='https://assets.teachablecdn.com/illustrations/design-system/22_big-ideas.png' boxSize={'8rem'}></Image>
                  <Flex flexDirection={'column'} gap={3}>
                    <Text fontSize={'sm'} fontWeight={'bold'}>
                      Grow your audiance
                    </Text>
                    <Text fontSize={'xs'}>
                      With a referral program, students can refear a friend to your school, earning them both a discount. this can help orginacally grow your audience while inecentivzing current students to purchase again.
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems="center" justifyContent="end" margin='1rem'>
                  <Button colorScheme='black' variant='outline' size='sm'>
                    Set up my referral program
                  </Button>
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Box w="100%" h="30rem" m={2} alignContent={'center'}>
                <Flex>
                  <Box m={2} >
                    <Text marginBottom={4}>Today</Text>
                    {/* Mapping data array */}
                    {data.map(item => (
                      <Box key={item.id} marginTop={4} width={'25rem'} border={'2px solid rgba(0, 0, 0, 0.2)'} borderRadius={'md'} padding={4} transition={'border-color 0.3s'} _hover={{ borderColor: 'gray.400' }}>
                        <Text fontWeight={'bold'} fontSize={'xl'} marginBottom={2}>
                          {item.value}
                        </Text>
                        <Text>{item.label}</Text>
                      </Box>
                    ))}
                  </Box>

                  <Box m={2}>
                    <Flex gap={1}>
                      <Text>This month</Text>
                      <Text color={'gray'}>April 2024</Text>
                    </Flex>

                    {/* Mapping data array */}
                    {datadua.map(item => (
                      <Box key={item.id} marginTop={4} width={'25rem'} border={'2px solid rgba(0, 0, 0, 0.2)'} borderRadius={'md'} padding={4} transition={'border-color 0.3s'} _hover={{ borderColor: 'gray.400' }}>
                        <Text fontWeight={'bold'} fontSize={'xl'} marginBottom={2}>
                          {item.value}
                        </Text>
                        <Text>{item.label}</Text>
                      </Box>
                    ))}
                  </Box>
                  <Box></Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
