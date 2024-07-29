import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  type StepperProps,
} from '../Stepper';

import { type Steps } from './types';

type StepperWizardProps = Omit<StepperProps, 'children'> & {
  steps: Steps;
};

export const StepperWizard = ({
  steps,
  ...stepperProps
}: StepperWizardProps) => {
  return (
    <Stepper {...stepperProps}>
      {steps.map(({ label, isError }, index) => (
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
