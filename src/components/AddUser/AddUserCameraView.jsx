import React from 'react';
import Webcam from 'react-webcam';
import { Box, Img, Text } from '@chakra-ui/react';

/* =============================================================================
<AddUserCameraView />
============================================================================= */
const AddUserCameraView = ({ image }) => {
  return (
    <Box>
      {image ? (
        <Img src="https://avatars.githubusercontent.com/u/77078731?v=4" />
      ) : (
        <Webcam style={{ backgroundColor: 'black' }} height={450} width={450} />
      )}

      <Text align='center' mt={2}>
        {image
          ? 'Click the check button to sumbit'
          : 'Please be in the center of the frame'}
      </Text>
    </Box>
  );
};

/* Export
============================================================================= */
export default AddUserCameraView;
