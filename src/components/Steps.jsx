import {
  Box,
  Step,
  Stepper,
  StepIcon,
  StepTitle,
  StepNumber,
  StepStatus,
  StepSeparator,
  StepIndicator,
  StepDescription,
} from '@chakra-ui/react';

const Steps = ({ steps, activeStep }) => {
  return (
    <Stepper
      index={activeStep}
      size={['sm', 'sm', 'md']}
      colorScheme="green"
      width={['full', '80%', '65%', '65%']}
      pb={3}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink={0}>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default Steps;
