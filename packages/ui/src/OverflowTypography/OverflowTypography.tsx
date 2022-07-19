import { PropsWithChildren } from 'react';

import { TypographyProps } from '../Typography';
import { TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';

import { OverflowTypographyWrapper } from './styles';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export type OverflowedProps = {
  /**
   * @example <OverflowTypography overflowLimit={74} />
   * @default 64
   * @description опорная единица, по которой определяется max-width и необходимость монтирования Tooltip
   */
  overflowLimit?: number;
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

export const DEFAULT_OVERFLOW_OPTION_LENGTH = 64;

export const DEFAULT_ROWS_COUNT = 1;

export const OverflowTypography = ({
  tooltipProps,
  children,
  overflowLimit = DEFAULT_OVERFLOW_OPTION_LENGTH,
  rowsCount = DEFAULT_ROWS_COUNT,
  ...props
}: OverflowedTypographyProps) => {
  const isLongerThanLimit =
    typeof children === 'string' && children.length > overflowLimit;

  if (isLongerThanLimit) {
    return (
      <Tooltip title={children} disableInteractive {...tooltipProps}>
        <OverflowTypographyWrapper
          {...{ ...props, overflowLimit, rowsCount, children }}
        />
      </Tooltip>
    );
  }

  return (
    <OverflowTypographyWrapper
      {...{ ...props, overflowLimit, rowsCount, children }}
    />
  );
};
