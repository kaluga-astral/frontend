import { PropsWithChildren, forwardRef } from 'react';

import { TypographyProps } from '../Typography';
import { TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';

import { OverflowTypographyWrapper } from './styles';
import { useOverflowed } from './hooks/useOverflowed';

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
