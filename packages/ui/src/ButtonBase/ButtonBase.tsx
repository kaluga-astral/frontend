import { forwardRef } from 'react';

import { BaseButtonProps } from './types';
import { ButtonColors, ButtonVariants } from './enums';
import { ButtonBaseWrapper } from './styles';

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
      <ButtonBaseWrapper
        ref={ref}
        {...props}
        customColor={color}
        customVariant={variant}
      >
        {children}
      </ButtonBaseWrapper>
    );
  },
);
