import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiCircleCheck } from 'react-icons/ci';
import { Text, Button, VStack, Box, Flex } from '@chakra-ui/react';
import { IoChevronForward } from 'react-icons/io5';

/* =============================================================================
<Step3 />
============================================================================= */
const Step3 = () => {
  const navigate = useNavigate();

  const _handleGoToVerify = () => navigate('/users/face-verification');

  return (
    <Box>
      <VStack>
        <CiCircleCheck size={55} color="#38A169" />
        <Text align="center" fontSize="xl" my={5}>
          Face Added Successfully
        </Text>
      </VStack>

      <Button
        colorScheme="green"
        rightIcon={<IoChevronForward />}
        onClick={_handleGoToVerify}
      >
        Go To Face Verificaion
      </Button>
    </Box>
  );
};

/* Export
============================================================================= */
export default Step3;
