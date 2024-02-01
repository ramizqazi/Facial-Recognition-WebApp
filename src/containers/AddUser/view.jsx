import React, { useCallback, useRef } from 'react';
import { HStack, VStack, useSteps } from '@chakra-ui/react';

import Steps from '../../components/Steps';
import Step1 from '../../components/AddUser/Step1';
import Step2 from '../../components/AddUser/Step2';
import Step3 from '../../components/AddUser/Step3';

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
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 1,
    count: steps.length,
  });

  const _handleImgAdd = url => {
    onImageClick(url);
    goToNext();
  };

  const _handleImgRemove = () => {
    onImageClick('');
    goToPrevious();
  };

  const _handleSubmit = () => {
    if (name) {
      goToNext();
    }
    onSumbit();
  };

  const renderStepsView = () => {
    switch (activeStep) {
      case 1:
        return (
          <Step1
            name={name}
            onImageClick={_handleImgAdd}
            onNameChange={onNameChange}
          />
        );
      case 2:
        return (
          <Step2
            name={name}
            image={image}
            isLoading={isLoading}
            onImgRemove={_handleImgRemove}
            onSumbit={_handleSubmit}
            onNameChange={onNameChange}
          />
        );
      case 3:
        return <Step3 />;
    }
  };

  return (
    <HStack h='full'>
      <Steps activeStep={activeStep} steps={steps} />
      <VStack w="full" py={3} h="full" justify="center">
        {renderStepsView()}
      </VStack>
    </HStack>
  );
};

const steps = [
  { title: 'First', description: 'Click a image' },
  { title: 'Second', description: 'Confirm the image' },
  { title: 'Third', description: 'Completed' },
];

/* Export
============================================================================= */
export default AddUserView;
