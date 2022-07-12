import { forwardRef } from 'react';

import { BaseButtonProps } from './types';
import { ButtonColors, ButtonVariants } from './constants';
import { StyledButtonBase } from './styled';

export const ButtonBase = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      children,
      variant = ButtonVariants.CONTAINED,
      color = ButtonColors.PRIMARY,
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
