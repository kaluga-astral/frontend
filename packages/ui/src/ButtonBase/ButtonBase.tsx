import { forwardRef } from 'react';

import { BaseButtonProps } from './types';
import { ButtonColors, ButtonVariants } from './enums';
import { StyledButtonBase } from './styles';

export const ButtonBase = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      children,
      variant = ButtonVariants.Contained,
      color = ButtonColors.Primary,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledButtonBase
        ref={ref}
        {...props}
        customColor={color}
        customVariant={variant}
      >
        {children}
      </StyledButtonBase>
    );
  },
);
