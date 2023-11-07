import { forwardRef } from 'react';
import { PropsWithChildren } from 'react';

import { Tooltip } from '../Tooltip';
import { TooltipProps as BasicTooltipProps } from '../Tooltip';
import { TypographyProps } from '../Typography';

import { OverflowTypographyWrapper } from './styles';
import { useOverflowed } from './hooks';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export type OverflowedProps = {
  /**
   * @example <OverflowTypography rowsCount={2} />
   * @default 1
   * @description опорная единица по которой определяется максимиально отображаемое колличество строк
   */
  rowsCount?: number;
};

type TooltipCustomizable = {
  /**
   * @example <OverflowTypography tooltipProps={{placement: 'top-start'}} />
   * @description способ кастомизировать тултип при необходимости
   */
  tooltipProps?: Omit<TooltipProps, 'children'>;
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
          <OverflowTypographyWrapper {...typographyProps} />
        </Tooltip>
      );
    }

    return <OverflowTypographyWrapper {...typographyProps} />;
  },
);