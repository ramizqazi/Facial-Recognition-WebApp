import React, { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

import FaceVerificationView from './view';
import { useVerifyFace } from '../../api/mutations';

/* =============================================================================
<FaceVerification />
============================================================================= */
const FaceVerification = () => {
  const toast = useToast();
  const [name, setName] = useState();
  const [image, setImage] = useState();

  const { mutateAsync: verifyface, data, isLoading } = useVerifyFace();

  useEffect(() => {
    if (data?.Status === 400) {
      toast({
        status: 'error',
        title: 'Error',
        isClosable: true,
        duration: 1500,
        description: data.Response,
      });
    }
    if (data?.Status === 200) {
      setName(data?.Response);
    }
  }, [data]);

  const _handleSubmit = async () => {
    try {
      if (!image) {
        return toast({
          title: 'Image Not Added',
          description: 'Please click an image',
          status: 'error',
          duration: 1500,
          isClosable: true,
        });
      }

      await verifyface(image);
    } catch (e) {
      toast({
        status: 'error',
        title: 'Error',
        isClosable: true,
        duration: 1500,
        description: e?.msg,
      });
    }
  };

  return (
    <FaceVerificationView
      name={name}
      image={image}
      isLoading={isLoading}
      onImageClick={setImage}
      onSumbit={_handleSubmit}
    />
  );
};

/* Export
============================================================================= */
export default FaceVerification;
