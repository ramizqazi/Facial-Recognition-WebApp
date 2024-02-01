import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import { Text, Button, VStack } from '@chakra-ui/react';
import { IoChevronForward, IoCloseSharp } from 'react-icons/io5';

/* =============================================================================
<Step3 />
============================================================================= */
const Step3 = ({ isSuccess, onTryAgain }) => {
  const navigate = useNavigate();

  const _handleGoToVerify = () => navigate('/users/face-verification');

  return (
    <>
      <VStack>
        {isSuccess ? (
          <CiCircleCheck size={55} color="#38A169" />
        ) : (
          <CiCircleRemove size={55} color="red" />
        )}

        <Text align="center" fontSize="xl" my={5}>
          {isSuccess ? 'Face added successfully' : 'Something went wrong'}
        </Text>
      </VStack>

      {isSuccess ? (
        <Button
          colorScheme="green"
          rightIcon={<IoChevronForward />}
          onClick={_handleGoToVerify}
        >
          Go To Face Verificaion
        </Button>
      ) : (
        <Button
          colorScheme="red"
          leftIcon={<IoCloseSharp />}
          onClick={onTryAgain}
        >
          Try Again
        </Button>
      )}
    </>
  );
};

/* Export
============================================================================= */
export default Step3;
