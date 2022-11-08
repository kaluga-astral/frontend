import { SuccessFillMd } from '@astral/icons';
import { StepIconProps } from '@mui/material';

import { ErrorIcon } from './ErrorIcon';
import { ActiveIcon, DefaultIcon } from './styles';

export const StepIcon = (props: StepIconProps) => {
  const { active, completed, error } = props;

  if (error) {
    return <ErrorIcon />;
  }

  if (completed) {
    return <SuccessFillMd color="success" />;
  }

  if (active) {
    return <ActiveIcon />;
  }

  return <DefaultIcon />;
};
