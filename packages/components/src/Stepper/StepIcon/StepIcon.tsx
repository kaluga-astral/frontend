import { StepDefaultFillMd } from '@astral/icons';
import { type StepIconProps as MuiStepIconProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

import { DefaultIcon, ErrorIcon, SelectIcon, SuccessIcon } from './styles';

export type StepIconProps = {
  /**
   * Является ли шаг в состоянии select
   */
  isSelected?: boolean;
} & WithoutEmotionSpecific<MuiStepIconProps>;

export const StepIcon = (props: StepIconProps) => {
  const { active, completed, error, isSelected } = props;

  if (completed && error && isSelected) {
    return <SelectIcon $isError />;
  }

  if (completed && isSelected) {
    return <SelectIcon />;
  }

  if (error) {
    return <ErrorIcon />;
  }

  if (completed) {
    return <SuccessIcon />;
  }

  if (active) {
    return <StepDefaultFillMd color="primary" />;
  }

  return <DefaultIcon />;
};
