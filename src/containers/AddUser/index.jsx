import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import AddUserView from './view';
import { useAddUser } from '../../api/mutations';

/* =============================================================================
<AddUser />
============================================================================= */
const AddUser = () => {
  const toast = useToast();

  const [name, setName] = useState('');
  const [image, setImage] = useState();

  const { mutateAsync: addUser, isLoading, isSuccess } = useAddUser();

  const _handleSubmit = async () => {
    try {
      if (!name || !image) {
        return toast({
          status: 'error',
          duration: 1500,
          isClosable: true,
          title: 'Incomplete Information',
          description: 'Please add all the information needed',
        });
      }
      
      await addUser({
        name,
        image,
      });

      toast({
        status: 'success',
        title: 'Image Saved',
        isClosable: true,
        duration: 1500,
        description: `Image is saved with ${name} name`
      });

      setImage('');
      setName('');
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
    <AddUserView
      image={image}
      name={name}
      isLoading={isLoading}
      onImageClick={setImage}
      onNameChange={setName}
      onSumbit={_handleSubmit}
      isSuccess={isSuccess}
    />
  );
};

/* Export
============================================================================= */
export default AddUser;
