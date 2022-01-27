import { ButtonProps } from '../types';
import { StyledButton } from '../styled';

export const Button = ({ color, variant, children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} customVariant={variant} customColor={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
