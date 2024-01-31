import React, { useState } from 'react';

import AddUserView from './view';
import { useAddUser } from '../../api/mutations';
import { useToast } from '@chakra-ui/react';

/* =============================================================================
<AddUser />
============================================================================= */
const AddUser = () => {
  const toast = useToast();

  const [name, setName] = useState('');
  const [image, setImage] = useState();
  const disabled = !name || !image;

  const { mutateAsync: addUser, isLoading } = useAddUser();

  const _handleSubmit = async () => {
    try {
      if (disabled) {
        return toast({
          title: 'Incomplete Information',
          description: 'Please add all the information needed',
          status: 'error',
          duration: 1500,
          isClosable: true,
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

      setImage('')
      setName('')
    } catch (e) {
      console.log(e);
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
    />
  );
};

/* Export
============================================================================= */
export default AddUser;
