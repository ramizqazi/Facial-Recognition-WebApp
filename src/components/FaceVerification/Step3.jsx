import React from 'react';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import { Text, Button, VStack } from '@chakra-ui/react';
import { IoCloseSharp } from 'react-icons/io5';

/* =============================================================================
<Step3 />
============================================================================= */
const Step3 = ({ name, onTryAgain }) => {
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

      <Button
        colorScheme="red"
        leftIcon={<IoCloseSharp />}
        onClick={onTryAgain}
      >
        Try Again
      </Button>
    </>
  );
};

/* Export
============================================================================= */
export default Step3;
