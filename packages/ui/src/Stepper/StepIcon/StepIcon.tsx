import {
  CircleErrorFillMd,
  StepDefaultFillMd,
  SuccessFillMd,
} from '@astral/icons';
import { StepIconProps } from '@mui/material';

export const StepIcon = (props: StepIconProps) => {
  const { active, completed, error } = props;

  if (error) {
    return <CircleErrorFillMd color="error" />;
  }

  if (completed) {
    return <SuccessFillMd color="success" />;
  }

  if (active) {
    return <StepDefaultFillMd color="primary" />;
  }

  return <StepDefaultFillMd color="disabled" />;
};
