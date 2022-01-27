import { IconButtonProps } from '../types';
import { StyledIconButton } from '../styled';

export const IconButton = ({
  color,
  variant,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <StyledIconButton {...props} customColor={color} customVariant={variant}>
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
