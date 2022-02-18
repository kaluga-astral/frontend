import { forwardRef } from 'react';

import { TooltipProps } from './types';
import { StyledTooltip } from './styled';

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, placement = 'top', size = 'medium', ...props }, ref) => {
    return (
      <StyledTooltip ref={ref} size={size} placement={placement} {...props}>
        {children}
      </StyledTooltip>
    );
  }
);
