import { forwardRef } from 'react';

import { TooltipProps } from './types';
import { StyledTooltip } from './styled';
import { TooltipSizes } from './constants';

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const {
      children,
      placement = 'top',
      size = TooltipSizes.MEDIUM,
      title,
      ...restProps
    } = props;

    if (title) {
      return (
        <StyledTooltip
          ref={ref}
          size={size}
          placement={placement}
          title={title}
          {...restProps}
        >
          {children}
        </StyledTooltip>
      );
    }

    return children;
  }
);
