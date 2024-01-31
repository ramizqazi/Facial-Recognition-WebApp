import React from 'react';
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaRegFaceGrinWide } from 'react-icons/fa6';
import { FaRegCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/* =============================================================================
<Welcome />
============================================================================= */

const Welcome = () => {
  return (
    <Center h="full">
      <Box textAlign="center" px={5}>
        <Text fontSize="2xl" fontWeight="semibold">
          Welcome To Facial Recognition App
        </Text>
        <Text fontSize="lg" fontWeight="medium">
          Please select an option from below
        </Text>
        <Flex
          flexDir={['column', 'row', 'row']}
          justify="center"
          mt={8}
          gap={10}
        >
          <Card
            as={Link}
            flex={1}
            shadow="lg"
            to="/users/add-user"
            className='hover'
          >
            <CardBody as={VStack} rowGap={5}>
              <FaRegFaceGrinWide size={35} />
              <Text>Add Face</Text>
            </CardBody>
          </Card>
          <Card
            as={Link}
            flex={1}
            shadow="lg"
            to="/users/face-verification"
            className='hover'
          >
            <CardBody as={VStack} rowGap={5}>
              <FaRegCheckCircle size={35} />
              <Text>Face Verification</Text>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </Center>
  );
};

/* Export
============================================================================= */
export default Welcome;
