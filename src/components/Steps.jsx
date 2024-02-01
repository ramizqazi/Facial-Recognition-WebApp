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
  useMediaQuery,
} from '@chakra-ui/react';

const Steps = ({ steps, activeStep }) => {
  const [isLargerThan766] = useMediaQuery('(min-width: 766px)');
  return (
    <Stepper
      index={activeStep}
      display={isLargerThan766 ? 'flex' : 'none'}
      orientation="vertical"
      gap="0px"
      colorScheme='green'
      height="400px"
      pl={10}
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

          <Box flexShrink="0">
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
