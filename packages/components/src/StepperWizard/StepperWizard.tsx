import { Step, StepLabel, Stepper, type StepperProps } from '../Stepper';

import { type StepWizard } from './types';

export type StepperWizardProps = Omit<StepperProps, 'children'> & {
  steps: StepWizard[];
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
            error={isError}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
