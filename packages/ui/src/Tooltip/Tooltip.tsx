import { forwardRef } from 'react';

import { WithoutEmotionSpecific } from '../types';

import { TooltipProps } from './types';
import { StyledTooltip } from './styled';
import { TooltipSizes } from './constants';

export const Tooltip = forwardRef<
  HTMLDivElement,
  WithoutEmotionSpecific<TooltipProps>
>(
  (
    { children, placement = 'top', size = TooltipSizes.MEDIUM, ...props },
    ref,
  ) => {
    return (
      <StyledTooltip ref={ref} size={size} placement={placement} {...props}>
        {children}
      </StyledTooltip>
    );
  },
);
