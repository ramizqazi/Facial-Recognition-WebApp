import React from 'react';
import { HStack, VStack, useSteps } from '@chakra-ui/react';

import Steps from '../../components/Steps';
import Step1 from '../../components/FaceVerification/Step1';
import Step2 from '../../components/FaceVerification/Step2';
import Step3 from '../../components/FaceVerification/Step3';

/* =============================================================================
<FaceVerificationView />
============================================================================= */
const FaceVerificationView = ({
  image,
  name,
  onSumbit,
  isLoading,
  onImageClick,
}) => {
  const { activeStep, goToNext, setActiveStep, goToPrevious } = useSteps({
    index: 1,
    count: steps.length,
  });

  const _handleTryAgain = () => setActiveStep(1);

  const _handleImgAdd = url => {
    onImageClick(url);
    goToNext();
  };

  const _handleImgRemove = () => {
    onImageClick('');
    goToPrevious();
  };

  const _handleSubmit = async () => {
    await onSumbit();
    goToNext();
  };

  const renderStepsView = () => {
    switch (activeStep) {
      case 1:
        return <Step1 onImageClick={_handleImgAdd} />;
      case 2:
        return (
          <Step2
            image={image}
            isLoading={isLoading}
            onImgRemove={_handleImgRemove}
            onSumbit={_handleSubmit}
          />
        );
      case 3:
        return <Step3 name={name} onTryAgain={_handleTryAgain} />;
    }
  };

  return (
    <HStack h="full">
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
  { title: 'Third', description: 'Result' },
];

/* Export
============================================================================= */
export default FaceVerificationView;
