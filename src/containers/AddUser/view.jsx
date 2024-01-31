import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import {
  Box,
  Button,
  HStack,
  IconButton,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoCamera, IoCloseSharp, IoCheckmark } from 'react-icons/io5';

import Input from '../../components/Input';

/* =============================================================================
<AddUserView />
============================================================================= */
const AddUserView = ({
  image,
  name,
  onNameChange,
  onImageClick,
  onSumbit,
  isLoading,
}) => {
  const camRef = useRef();

  const capture = useCallback(() => {
    const imageSrc = camRef.current.getScreenshot();
    onImageClick(imageSrc);
  }, [camRef]);

  const _handleRemoveImg = () => onImageClick('');

  return (
    <VStack py={3} h="full" justify="center">
      <VStack>
        <Box w="700px" h="450px" overflow="hidden" bg="black">
          {image ? (
            <Img src={image} w='full' h='full' />
          ) : (
            <Webcam ref={camRef} width={'100%'} height={'100%'} />
          )}
        </Box>
        <Text align="center" fontSize="xl" my={5}>
          {image
            ? 'Click the check button to sumbit'
            : 'Please be in the center of the frame'}
        </Text>

        <Input
          value={name}
          label="Name"
          placeholder="Enter name"
          onChange={e => onNameChange(e.target.value)}
        />
      </VStack>

      {image ? (
        <HStack>
          <IconButton
            icon={<IoCloseSharp />}
            variant="outline"
            isDisabled={isLoading}
            colorScheme="red"
            rounded="full"
            onClick={_handleRemoveImg}
          />
          <IconButton
            icon={<IoCheckmark />}
            variant="outline"
            isLoading={isLoading}
            colorScheme="green"
            rounded="full"
            onClick={onSumbit}
          />
        </HStack>
      ) : (
        <IconButton
          icon={<IoCamera />}
          colorScheme="green"
          px={8}
          onClick={capture}
        />
      )}
    </VStack>
  );
};

/* Export
============================================================================= */
export default AddUserView;
