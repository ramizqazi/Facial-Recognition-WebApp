import React from 'react';
import { Img, Box, Text, HStack, Button, VStack } from '@chakra-ui/react';
import { IoCloseSharp, IoCheckmark } from 'react-icons/io5';

/* =============================================================================
<Step2 />
============================================================================= */
const Step2 = ({ image, onImgRemove, onSumbit, isLoading }) => {
  return (
    <>
      <VStack>
        <Box w="700px" h="450px" overflow="hidden" bg="black">
          <Img src={image} w="full" h="full" />
        </Box>
        <Text align="center" fontSize="xl" my={5}>
          Click the check button to sumbit
        </Text>
      </VStack>

      <HStack>
        <Button
          colorScheme="red"
          leftIcon={<IoCloseSharp />}
          isDisabled={isLoading}
          onClick={onImgRemove}
        >
          Try Again
        </Button>
        <Button
          colorScheme="green"
          onClick={onSumbit}
          isLoading={isLoading}
          leftIcon={<IoCheckmark />}
        >
          Submit
        </Button>
      </HStack>
    </>
  );
};

/* Export
============================================================================= */
export default Step2;
