import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

import { ArrowConnector } from './ArrowConnector';

export type StepperProps = WithoutEmotionSpecific<MuiStepperProps>;

export const Stepper = (props: StepperProps) => <MuiStepper {...props} />;

Stepper.ArrowConnector = ArrowConnector;
