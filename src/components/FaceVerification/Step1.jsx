import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { Box, Text, VStack, IconButton } from '@chakra-ui/react';
import { IoCamera } from 'react-icons/io5';

/* =============================================================================
<Step1 />
============================================================================= */
const Step1 = ({ onImageClick }) => {
  const camRef = useRef();

  const capture = useCallback(() => {
    const imageSrc = camRef.current.getScreenshot();
    onImageClick(imageSrc);
  }, [camRef, onImageClick]);

  return (
    <>
      <VStack>
        <Box w="full" h={['350', '350', '400px']} overflow="hidden" bg="black">
          <Webcam ref={camRef} width={'100%'} height={'100%'} />
        </Box>
        <Text align="center" fontSize="xl" my={3}>
          Please be in the center of the frame
        </Text>
      </VStack>

      <IconButton
        icon={<IoCamera />}
        colorScheme="green"
        px={8}
        mb={2}
        onClick={capture}
      />
    </>
  );
};

/* Export
============================================================================= */
export default Step1;
