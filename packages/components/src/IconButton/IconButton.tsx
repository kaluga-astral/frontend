import { forwardRef } from 'react';

import { BaseButtonProps } from '../ButtonBase';

import { IconButtonWrapper } from './styles';

export const IconButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <IconButtonWrapper {...props} ref={ref}>
        {children}
      </IconButtonWrapper>
    );
  },
);
