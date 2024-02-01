import React from 'react';
import { Img, Box, Text, HStack, Button, VStack } from '@chakra-ui/react';
import { IoCloseSharp, IoCheckmark } from 'react-icons/io5';

import Input from '../../components/Input';

/* =============================================================================
<Step2 />
============================================================================= */
const Step2 = ({
  image,
  name,
  onImgRemove,
  onNameChange,
  onSumbit,
  isLoading,
}) => {
  return (
    <>
      <VStack>
        <Box w="full" h={['350', '350', '400px']} overflow="hidden" bg="black">
          <Img src={image} w="full" h="full" />
        </Box>
        <Text align="center" fontSize="xl" my={3}>
          Click the check button to sumbit
        </Text>

        <Input
          value={name}
          label="Name"
          placeholder="Enter name"
          onChange={e => onNameChange(e.target.value)}
        />
      </VStack>

      <HStack mb={2}>
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
