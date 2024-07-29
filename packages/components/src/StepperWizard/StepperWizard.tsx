import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  type StepperProps,
} from '../Stepper';

import { type StepInfo } from './types';

type StepperWizardProps = Omit<StepperProps, 'children'> & {
  steps: StepInfo[];
};

export const StepperWizard = ({
  steps,
  ...stepperProps
}: StepperWizardProps) => {
  return (
    <Stepper {...stepperProps}>
      {steps.map(({ label, isError, stepContent }, index) => (
        <Step key={index}>
          <StepLabel
            isSelected={stepperProps.activeStep === index}
            error={isError}
          >
            {label}
          </StepLabel>
          <StepContent>{stepContent}</StepContent>
        </Step>
      ))}
    </Stepper>
  );
};
