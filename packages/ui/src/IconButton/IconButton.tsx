import { forwardRef } from 'react';

import { BaseButtonProps } from '../ButtonBase';

import { StyledIconButton } from './styles';

export const IconButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledIconButton {...props} ref={ref}>
        {children}
      </StyledIconButton>
    );
  },
);
