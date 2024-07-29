import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  type StepperProps,
} from '../Stepper';

import { type Steps } from './types';

type StepperWizardProps = StepperProps & {
  steps: Steps;
};

export const StepperWizard = ({
  steps,
  ...stepperProps
}: StepperWizardProps) => {
  return (
    <Stepper {...stepperProps}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel
            isSelected={stepperProps.activeStep === index}
            error={step.isError}
          >
            {step.label}
          </StepLabel>
          <StepContent>{step.stepContent}</StepContent>
        </Step>
      ))}
    </Stepper>
  );
};
