import { forwardRef } from 'react';
import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

import { WithoutEmotionSpecific } from '../types';

import { TooltipSize } from './types';
import { StyledTooltip, TooltipContentWrapper } from './styles';
import { TooltipSizes } from './constants';

export type TooltipProps = WithoutEmotionSpecific<MuiTooltipProps> & {
  /**
   * Размер тултипа
   */
  size?: TooltipSize;
  /**
   * При значении false оборачивает компонент в div. По-умолчанию true
   * Это позволяет показывать тултипы на задизейбленных компонентах
   * @example <Tooltip withoutContainer={false} ...><Button disabled></Tooltip>
   */
  withoutContainer?: boolean;
};

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
