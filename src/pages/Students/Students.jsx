import { Box, Button, Flex, Text, Image, Center, HStack } from '@chakra-ui/react'
import React from 'react'
import Color from '../../Color';
import { BsFillLightningFill } from 'react-icons/bs'
import { FaExclamationCircle } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

function Students() {
  const { lightgray, midgray, darkgray, lightblue1, lightblue2, midblue1 } = Color;
  return (
    <div>

      <Box h="100%" bg={lightgray} w="100%" spacing="25px" p="25px">


        <Flex justifyContent="space-between" alignItems="center" margin="1rem" flexDirection={['column', 'row']}>
          <Text fontSize={['xl', '2xl']} textAlign={['center', 'left']} ml={[0, '4px']} mr={[0, '4px']} mb={['8px', 0]}>
            Student
          </Text>
          <Flex gap={3} flexDirection={['column', 'row']} ml={[0, '1rem']} mr={[0, '1rem']}>
            <Button colorScheme="teal" variant="outline" size={['sm', 'md']} gap={1}>
              <BsFillLightningFill />
              Export CSV
            </Button>
            <Button colorScheme="teal" variant="outline" size={['sm', 'md']} gap={1}>
              <BsFillLightningFill />
              Email Students
            </Button>
            <Button colorScheme="teal" variant="solid" size={['sm', 'md']}>
              Add Students
            </Button>
          </Flex>
        </Flex>


        <Flex justifyContent="center" alignItems="center" margin="1rem" height="100%">
          <Box position="relative" w="90%" h="30rem" m={10} borderWidth="1px" borderColor="black" borderRadius="10px" alignContent="center">
            <Center>
              <Image src='https://yt3.googleusercontent.com/sVCri3mSSAK7-gjsINUBkbUGloMR7euNurduZzEvpHtjPEF6vJgE5WeWs035xHntb2BgT2qVGy0=s900-c-k-c0x00ffffff-no-rj' boxSize={['6rem', '8rem']} />
            </Center>
            <Center>
              <Box width={['100%', '80%']} textAlign={'center'}>
                <Text fontWeight={'bold'} fontSize={['xl', '2xl']} mb={[2, 4]}>
                  No students at this time
                </Text>
                <Text fontSize={['xs', 'md']} >
                  Students will appear here after they enroll in a school. Optionally, owners can manually add or bulk import students to their school.
                </Text>
              </Box>
            </Center>
            <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="rgba(0, 0, 0, 0.5)" borderRadius="10px" display={['block', 'none']} />
          </Box>
        </Flex>


        <Flex justifyContent="space-between" alignItems="center" margin={5} flexDirection={['column', 'row']} flexWrap={['wrap', 'nowrap']}>

          <Box marginBottom={['1rem', 0]}>
            <Box w={['100%', '300px']} marginTop={['1rem', '2rem']} borderTop={'gray.200'} alignItems={'center'} display={'flex'} gap={'1'} flexDirection={['column', 'row']} justifyContent={['center', 'flex-start']}>
              <Text fontSize={['sm', 'md']}>0/10 students</Text>
              <FaExclamationCircle color='grey' />
              <Flex flex="1" />
              <BsFillLightningFill color='teal' />
              <Text fontSize={['sm', 'md']} ml={['0', '0.5rem']}>Upgrade</Text>
            </Box>

          </Box>
          <Box margin={['1rem', '2rem']}>
            <Center bg='blue.100' borderRadius={'10px'} p={'1'}>
              <Flex m={'1'} gap={'1'} flexWrap={'wrap'} alignItems={'center'}>
                <HiOutlineQuestionMarkCircle size={'20px'} color='blue' />
                <Text fontSize={['xs', 'sm']} ml={[0, '0.5rem']}>
                  Learn more about managing users in the Teachable Knowledge Base
                </Text>
              </Flex>
            </Center>
          </Box>
        </Flex>

        <Center>
          <Box maxW={['100%', '80%']} h="13rem" m={2} borderWidth={'1px'} borderColor={'gray.300'} borderRadius={'10px'}>
            <Flex flexDirection="column" justifyContent="space-between" h="100%">
              <Flex alignItems="center" justifyContent="center" flex="1">
                <Image src='https://assets.teachablecdn.com/illustrations/design-system/22_big-ideas.png' boxSize={['6rem', '8rem']} />
                <Flex flexDirection={'column'} gap={3}>
                  <Text fontSize={['md', 'sm']} fontWeight={'bold'} wordWrap="break-word">
                    Tap into your student base to accelerate growth
                  </Text>
                  <Text fontSize={['sm', 'xs']} overflowWrap="break-word">
                    Create an affiliate program to create a substantial growth model for your school. Affiliates earn money when they get others to purchase, which helps expand your reach.
                  </Text>
                </Flex>
              </Flex>
              <Flex alignItems="center" justifyContent="end" margin='1rem'>
                <Button colorScheme='black' variant='outline' size='sm' overflowWrap="break-word">
                  Create an affiliate program
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Center>



      </Box>

    </div>
  )
}

export default Students;
