import { Box, Button, Flex, Spacer, Stack, Text, Image, Center, Divider, Container } from '@chakra-ui/react'
import React from 'react'
import { BsFillLightningFill } from 'react-icons/bs'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaExclamationCircle } from "react-icons/fa";

function Students() {
  return (
    <div>
      <Stack direction='row' spacing={4} alignItems={'center'} >
        <Text fontSize={'4xl'} textAlign={'center'} ml={'10px'}>Student</Text>
        <Spacer />
        <Button colorScheme='teal' variant='outline' size='md'>
          <BsFillLightningFill />
          Export CSV
        </Button>
        <Button colorScheme='teal' variant='outline' size='md'>
          <BsFillLightningFill />
          Email Students
        </Button>
        <Button colorScheme='teal' variant='solid' size='md'>
          Add Students
        </Button>
      </Stack>

      <Box w="100%" h="30rem" m={2} borderWidth={'1px'} borderColor={'black'} alignContent={'center'}>
        <Center>

          <Image src='https://assets.teachablecdn.com/illustrations/upgrade.png' boxSize={'10rem'} />
        </Center>
        <Center>
          <Box width='80%' textAlign={'center'}>
            <Text fontWeight={'bold'}>No students at this time</Text>
            <Text >Students will appear here after they enroll in a school. Optionally, owners can manually add or bulk import students to their school.</Text>
          </Box>
        </Center>
      </Box>
      <Box w="65rem" h="100px" margin={3}>

        <Flex>
          <Box>
            <Box>
              <Box
                display={'flex'}
                w={'300px'}
                marginTop={'2rem'}
                borderTop={'gray.200'}
                borderTopWidth={'2px'}
                borderTopStyle={'solid'}
                alignItems={'center'}
                gap={'2'}
              >
                <Text>0/10 students</Text>
                <FaExclamationCircle color='grey' />
                <Spacer />
                <BsFillLightningFill color='teal' />
                <Text>Upgrade</Text>
              </Box>


            </Box>
          </Box>
          <Spacer />
          <Box margin={'2rem'}>
            <Center bg='blue.100' gap={'2'} borderRadius={'10px'}>
              <Box display={'flex'} gap={'2'} m={'3'} flexWrap={'wrap'}>
                <HiOutlineQuestionMarkCircle size={'25px'} color='blue' />
                <Text>Learn more about managing users in the Teachable Knowledge Base</Text>
              </Box>

            </Center>
          </Box>
        </Flex>
        <Center>
          <Box w="50%" h="13rem" m={2} borderWidth={'1px'} borderColor={'gray.300'} alignContent={'center'} borderRadius={'10px'}>
            <Flex flexDirection="column" justifyContent="space-between" h="100%">
              <Flex alignItems="center" justifyContent="center" flex="1">
                <Image src='https://assets.teachablecdn.com/illustrations/design-system/22_big-ideas.png' boxSize={'8rem'}></Image>
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

      </Box>


    </div>
  )
}

export default Students