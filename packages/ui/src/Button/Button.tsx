import { ButtonProps } from '../ButtonBase';
import { CircularProgress } from '../CircularProgress';

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
      {children}
      {loading && <CircularProgress />}
      <span>{endIcon}</span>
    </StyledButton>
  );
};
