import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

import { LineStepperConnector, NextStepperConnector } from './styles';

export type StepperProps = Omit<
  WithoutEmotionSpecific<MuiStepperProps>,
  'orientation'
>;

export const Stepper = (props: StepperProps) => {
  const { alternativeLabel } = props;

  return (
    <MuiStepper
      connector={
        alternativeLabel ? <LineStepperConnector /> : <NextStepperConnector />
      }
      {...props}
    />
  );
};
