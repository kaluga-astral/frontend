import { forwardRef } from 'react';
import { type PropsWithChildren } from 'react';

import { Tooltip } from '../Tooltip';
import { type TooltipProps as BasicTooltipProps } from '../Tooltip';
import { type TypographyProps } from '../Typography';

import { StyledTypography } from './styles';
import { useOverflowed } from './hooks';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export type OverflowedProps = {
  /**
   * @example <OverflowTypography rowsCount={2} />
   * @default 1
   * @description опорная единица по которой определяется максимально отображаемое количество строк
   */
  rowsCount?: number;
};

type TooltipCustomizable = {
  /**
   * @example <OverflowTypography tooltipProps={{placement: 'top-start'}} />
   * @description способ кастомизировать тултип при необходимости
   */
  tooltipProps?: Omit<TooltipProps, 'children' | 'title'>;
};

export type OverflowedElementProps = OverflowedProps &
  TooltipCustomizable &
  TypographyProps;

export type OverflowedTypographyProps =
  PropsWithChildren<OverflowedElementProps>;

export const DEFAULT_ROWS_COUNT = 1;

export const OverflowTypography = forwardRef<
  HTMLElement,
  OverflowedTypographyProps
>(
  (
    { tooltipProps, children, rowsCount = DEFAULT_ROWS_COUNT, ...props },
    forwardedRef,
  ) => {
    const { ref, isOverflowed } = useOverflowed(forwardedRef);

    const typographyProps = {
      ...props,
      ref,
      children,
      rowsCount,
      hasMultipleRows: rowsCount > DEFAULT_ROWS_COUNT,
    };

    if (children && isOverflowed) {
      return (
        <Tooltip title={children} disableInteractive {...tooltipProps}>
          <StyledTypography {...typographyProps} />
        </Tooltip>
      );
    }

    return <StyledTypography {...typographyProps} />;
  },
);
