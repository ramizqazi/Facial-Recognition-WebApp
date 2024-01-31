import React from 'react';
import { HStack, IconButton, VStack } from '@chakra-ui/react';
import { IoCamera, IoCloseSharp, IoCheckmark } from 'react-icons/io5';
import AddUserCameraView from '../../components/AddUser/AddUserCameraView';

/* =============================================================================
<AddUserView />
============================================================================= */
const AddUserView = ({ image, loading }) => {
  return (
    <VStack p={5} h="full" justify="space-between">
      <AddUserCameraView image={image} />

      {image ? (
        <IconButton icon={<IoCamera />} colorScheme="green" px={8} />
      ) : (
        <HStack>
          <IconButton
            icon={<IoCloseSharp />}
            variant="outline"
            isDisabled={loading}
            colorScheme="red"
            rounded="full"
          />
          <IconButton
            icon={<IoCheckmark />}
            variant="outline"
            isLoading={loading}
            colorScheme="green"
            rounded="full"
          />
        </HStack>
      )}
    </VStack>
  );
};

/* Export
============================================================================= */
export default AddUserView;
