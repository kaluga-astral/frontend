import { CircularProgress } from '../CircularProgress';

import { StyledButton } from './styled';
import { ButtonProps } from './types';

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
      {children}
      {loading && <CircularProgress />}
      <span>{endIcon}</span>
    </StyledButton>
  );
};
