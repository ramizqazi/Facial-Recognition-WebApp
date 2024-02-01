import React from 'react';
import { IoChevronForward, IoCloseSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Text, Button, VStack } from '@chakra-ui/react';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';

/* =============================================================================
<Step3 />
============================================================================= */
const Step3 = ({ name, onTryAgain }) => {
  const navigate = useNavigate();

  const _handleGoToVerify = () => navigate('/users/add-user');
  return (
    <>
      <VStack>
        {name ? (
          <CiCircleCheck size={55} color="#38A169" />
        ) : (
          <CiCircleRemove size={55} color="red" />
        )}

        <Text align="center" fontSize="xl" my={5}>
          {name ? 'Face found successfully' : 'Face Not Found'}
        </Text>
      </VStack>

      {name ? (
        <Button
          colorScheme="green"
          rightIcon={<IoChevronForward />}
          onClick={_handleGoToVerify}
        >
          Add another user
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
