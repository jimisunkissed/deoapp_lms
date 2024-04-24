import React from 'react';
import { Box, Button, ButtonGroup, Flex, Image, Text } from '@chakra-ui/react';
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ChartDasboard from './ChartDasboard';
import Color from '../../Color'; // Pastikan Color diimpor dari direktori yang benar

function Home() {
  const { lightgray } = Color;

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
    <Box bg={lightgray} w="100%" p="25px">
      <Flex direction={['column', 'column', 'row']} justifyContent='space-between' alignItems='center' gap={['1rem', '1rem', '0.5rem']} flexWrap='wrap' margin={['1rem', '0.5rem']}>
        <Text fontSize='xl'>Dashboard</Text>
        <ButtonGroup>
          <MdOutlineKeyboardVoice />
          <Button colorScheme='teal' variant='outline'>View Your School</Button>
          <Button colorScheme='teal' variant='solid'>Create New Product</Button>
        </ButtonGroup>
      </Flex>

      <Box width="100%" alignItems='center' mx={10}>
        <Box bg='yellow.100' w='80%' p={4} m={['1rem', '0.5rem']} color='black' fontSize='sm' display='flex' alignItems='center' gap={3} borderRadius='10px'>
          <FaExclamationCircle />
          <Text>We don't have an address on file for your account. <Link to="/">Please set an address here</Link></Text>
        </Box>

        <ChartDasboard />

        <Box>
          <Box w="80%" h="13rem" m={['1rem', '0.5rem']} borderWidth='1px' borderColor='gray.300' borderRadius='10px'>
            <Flex flexDirection="column" justifyContent="space-between" h="100%">
              <Flex alignItems="center" justifyContent="center" flex="1">
                <Image src='https://assets.teachablecdn.com/illustrations/design-system/22_big-ideas.png' boxSize={['6rem', '8rem']} /> {/* Mengubah ukuran gambar */}
                <Flex flexDirection='column' gap={3}>
                  <Text fontSize={['md', 'sm']} fontWeight='bold'>Grow your audience</Text> {/* Mengubah ukuran teks */}
                  <Text fontSize={['xs', 'xs']} lineHeight={['1.2', '1.5']}>With a referral program, students can refer a friend to your school, earning them both a discount. This can help organically grow your audience while incentivizing current students to purchase again.</Text> {/* Mengubah ukuran teks */}
                </Flex>
              </Flex>
              <Flex alignItems="center" justifyContent="end" margin={['1rem', '0.5rem']}>
                <Button colorScheme='black' variant='outline' size='sm'>Set up my referral program</Button>
              </Flex>
            </Flex>
          </Box>
        </Box>

        <Flex direction={['column', 'column', 'row']} alignItems={['center', 'center', 'stretch']} justifyItems={['center', 'center', 'space-between']}>
          <Box m={['1rem', '0.5rem']}>
            <Text marginBottom={4}>Today</Text>
            {data.map(item => (
              <Box key={item.id} marginTop={4} width={['100%', '100%', '25rem']} border='2px solid rgba(0, 0, 0, 0.2)' borderRadius='md' padding={4} transition='border-color 0.3s' _hover={{ borderColor: 'gray.400' }}>
                <Text fontWeight='bold' fontSize='xl' marginBottom={2}>{item.value}</Text>
                <Text>{item.label}</Text>
              </Box>
            ))}
          </Box>
          <Box m={['1rem', '0.5rem']}>
            <Flex direction={['column', 'column', 'row']} alignItems={['center', 'center', 'stretch']} justifyItems={['center', 'center', 'space-between']} gap={1}>
              <Text>This month</Text>
              <Text color='gray'>April 2024</Text>
            </Flex>
            {datadua.map(item => (
              <Box key={item.id} marginTop={4} width={['100%', '100%', '25rem']} border='2px solid rgba(0, 0, 0, 0.2)' borderRadius='md' padding={4} transition='border-color 0.3s' _hover={{ borderColor: 'gray.400' }}>
                <Text fontWeight='bold' fontSize='xl' marginBottom={2}>{item.value}</Text>
                <Text>{item.label}</Text>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
