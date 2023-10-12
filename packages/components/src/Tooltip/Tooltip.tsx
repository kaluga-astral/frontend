import { forwardRef } from 'react';

import { TooltipProps } from './types';
import { StyledTooltip, TooltipContentWrapper } from './styles';
import { TooltipSizes } from './constants';

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const {
      title,
      placement = 'top',
      size = TooltipSizes.MEDIUM,
      withoutContainer = true,
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
          {withoutContainer ? (
            children
          ) : (
            <TooltipContentWrapper>{children}</TooltipContentWrapper>
          )}
        </StyledTooltip>
      );
    }

    return children;
  },
);
