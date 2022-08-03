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
  (props, ref) => {
    const {
      title,
      placement = 'top',
      size = TooltipSizes.MEDIUM,
      children,
      ...restProps
    } = props;

    if (title) {
      return (
        <StyledTooltip
          ref={ref}
          title={title}
          size={size}
          placement={placement}
          {...restProps}
        >
          {children}
        </StyledTooltip>
      );
    }

    return children;
  },
);
