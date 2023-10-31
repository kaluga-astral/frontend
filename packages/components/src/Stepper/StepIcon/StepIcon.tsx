import { StepDefaultFillMd } from '@astral/icons';
import { StepIconProps } from '@mui/material';

import {
  StepDefaultIcon,
  StepErrorIcon,
  StepSelectIcon,
  StepSuccessIcon,
} from './styles';

export const StepIcon = (props: { step?: number } & StepIconProps) => {
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
