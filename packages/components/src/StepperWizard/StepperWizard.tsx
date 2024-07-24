import { Step, StepLabel, Stepper, type StepperProps } from '../Stepper';

import { type Steps } from './types';

type StepperWizardProps = StepperProps & {
  steps: Steps;
};

export const StepperWizard = (props: StepperWizardProps) => {
  return (
    <Stepper {...props}>
      {props.steps.map((step, index) => (
        <Step key={index} completed={step.completed}>
          <StepLabel isSelected={props.activeStep === index} error={step.error}>
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
