import { BaseButtonProps } from './types';
import { ButtonColors, ButtonVariants } from './constants';
import { StyledButtonBase } from './styled';

export const ButtonBase = ({
  children,
  variant = ButtonVariants.CONTAINED,
  color = ButtonColors.PRIMARY,
  ...props
}: BaseButtonProps) => {
  return (
    <StyledButtonBase {...props} customColor={color} customVariant={variant}>
      {children}
    </StyledButtonBase>
  );
};
