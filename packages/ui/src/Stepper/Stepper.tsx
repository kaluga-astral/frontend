import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

import { StepperConnector } from './styles';

export type StepperProps = Pick<
  WithoutEmotionSpecific<MuiStepperProps>,
  'activeStep' | 'children'
>;

export const Stepper = (props: StepperProps) => {
  return <MuiStepper connector={<StepperConnector />} {...props} />;
};
