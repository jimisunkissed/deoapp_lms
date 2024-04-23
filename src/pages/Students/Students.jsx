import { Box, Button, Flex, Text, Image, Center } from '@chakra-ui/react'
import React from 'react'
import { BsFillLightningFill } from 'react-icons/bs'
import { FaExclamationCircle } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

function Students() {
  return (
    <div>
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" margin="1rem" >
        <Text fontSize="4xl" textAlign="center" ml="8px">Student</Text>
        <Flex gap={'5'}>
          <Button colorScheme="teal" variant="outline" size="md" gap={1}>
            <BsFillLightningFill />
            Export CSV
          </Button>
          <Button colorScheme="teal" variant="outline" size="md" gap={1}>
            <BsFillLightningFill />
            Email Students
          </Button>
          <Button colorScheme="teal" variant="solid" size="md">
            Add Students
          </Button>
        </Flex>
      </Flex>

      {/* Body */}
      <Flex justifyContent="center" alignItems="center" margin="1rem" height="100%">
        <Box w="90%" h="30rem" m={10} borderWidth="1px" borderColor="black" borderRadius="10px" alignContent="center">
          <Center>
            <Image src='https://yt3.googleusercontent.com/sVCri3mSSAK7-gjsINUBkbUGloMR7euNurduZzEvpHtjPEF6vJgE5WeWs035xHntb2BgT2qVGy0=s900-c-k-c0x00ffffff-no-rj' boxSize={'10rem'} />
          </Center>
          <Center>
            <Box width='80%' textAlign={'center'}>
              <Text fontWeight={'bold'}>No students at this time</Text>
              <Text >Students will appear here after they enroll in a school. Optionally, owners can manually add or bulk import students to their school.</Text>
            </Box>
          </Center>
        </Box>
      </Flex>


      {/* Footer */}
      <Flex justifyContent="space-between" alignItems={'center'} margin={5}>
        {/* Left side */}
        <Box>
          <Box w={'300px'} marginTop={'2rem'} borderTop={'gray.200'} alignItems={'center'} display={'flex'} gap={'2'}>
            <Text>0/10 students</Text>
            <FaExclamationCircle color='grey' />
            <Flex flex="1" />
            <BsFillLightningFill color='teal' />
            <Text>Upgrade</Text>
          </Box>
        </Box>
        {/* Right side */}
        <Box margin="2rem">
          <Center bg='blue.100' borderRadius={'10px'}>
            <Box display={'flex'} m={'3'} gap={'2'} flexWrap={'wrap'}>
              <HiOutlineQuestionMarkCircle size={'25px'} color='blue' />
              <Text fontSize={'xs'}>Learn more about managing users in the Teachable Knowledge Base</Text>
            </Box>
          </Center>
        </Box>
      </Flex>


      <Center>
        <Box w="50%" h="13rem" m={2} borderWidth={'1px'} borderColor={'gray.300'} borderRadius={'10px'}>
          <Flex flexDirection="column" justifyContent="space-between" h="100%">
            <Flex alignItems="center" justifyContent="center" flex="1">
              <Image src='https://assets.teachablecdn.com/illustrations/design-system/22_big-ideas.png' boxSize={'8rem'} />
              <Flex flexDirection={'column'} gap={3}>
                <Text fontSize={'sm'} fontWeight={'bold'}>
                  Tap into your student base to accelerate growth
                </Text>
                <Text fontSize={'xs'}>
                  Create an affiliate program to create a substantial growth model for your school. Affiliates earn money when they get others to purchase, which helps expand your reach.
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems="center" justifyContent="end" margin='1rem'>
              <Button colorScheme='black' variant='outline' size='sm'>
                Create an affiliate program
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Center>

    </div>
  )
}

export default Students;
