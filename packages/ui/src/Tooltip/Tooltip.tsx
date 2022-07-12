import { forwardRef } from 'react';
import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

import { WithoutEmotionSpecific } from '../types';

import { TooltipSize } from './types';
import { StyledTooltip } from './styled';
import { TooltipSizes } from './constants';

export type TooltipProps = WithoutEmotionSpecific<MuiTooltipProps> & {
  /**
   * Размер тултипа
   */
  size?: TooltipSize;
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
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
