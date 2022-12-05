import { forwardRef } from 'react';

import { StyledSwitch } from './styled';
import { SwitchProps } from './types';

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = 'medium', ...props }, ref) => {
    return <StyledSwitch size={size} ref={ref} {...props} />;
  },
);
