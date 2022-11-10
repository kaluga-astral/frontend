import { StepDefaultFillMd } from '@astral/icons';
import { StepIconProps } from '@mui/material';

import { StepDefaultIcon, StepErrorIcon, StepSuccessIcon } from './styles';

export const StepIcon = (props: StepIconProps) => {
  const { active, completed, error } = props;

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
