import { StepDefaultFillMd } from '@astral/icons';
import { StepIconProps as MuiStepIconProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';

import {
  StepDefaultIcon,
  StepErrorIcon,
  StepSelectIcon,
  StepSuccessIcon,
} from './styles';

export type StepIconProps = {
  /**
   * Номер текущего шага
   */
  step?: number;
} & WithoutEmotionSpecific<MuiStepIconProps>;

export const StepIcon = (props: StepIconProps) => {
  const { active, completed, error, step, icon } = props;

  if (step !== undefined) {
    if (completed && error && step + 1 === icon) {
      return <StepSelectIcon $isError />;
    }

    if (completed && step + 1 === icon) {
      return <StepSelectIcon />;
    }
  }

  if (error) {
    return <StepErrorIcon />;
  }

  if (completed) {
    return <StepSuccessIcon />;
  }

  if (active) {
    return <StepDefaultFillMd color="primary" />;
  }

  return <StepDefaultIcon />;
};
