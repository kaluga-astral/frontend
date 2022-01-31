import { ButtonProps } from '../types';
import { CircularProgress } from '../../CircularProgress';

import { StyledButton } from './styled';

export const Button = ({
  children,
  startIcon,
  endIcon,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton loading={loading} {...props}>
      <span>{startIcon}</span>
      {loading ? <CircularProgress /> : children}
      <span>{endIcon}</span>
    </StyledButton>
  );
};
