import { StepDefaultFillMd } from '@astral/icons';
import { type StepIconProps as MuiStepIconProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

import {
  StepDefaultIcon,
  StepErrorIcon,
  StepSelectIcon,
  StepSuccessIcon,
} from './styles';

export type StepIconProps = {
  /**
   * Является ли шаг в состоянии select
   */
  isSelected?: boolean;
} & WithoutEmotionSpecific<MuiStepIconProps>;

export const StepIcon = (props: StepIconProps) => {
  const { active, completed, error, isSelected } = props;

  if (completed && error && isSelected) {
    return <StepSelectIcon $isError />;
  }

  if (completed && isSelected) {
    return <StepSelectIcon />;
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
