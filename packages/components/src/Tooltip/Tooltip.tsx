import { forwardRef } from 'react';
import { type TooltipProps as MuiTooltipProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { type TooltipSize } from './types';
import { ContentWrapper, StyledTooltip } from './styles';
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
          arrow
          {...restProps}
        >
          {withoutContainer ? (
            children
          ) : (
            <ContentWrapper>{children}</ContentWrapper>
          )}
        </StyledTooltip>
      );
    }

    return children;
  },
);
