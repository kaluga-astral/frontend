import { PropsWithChildren } from 'react';

import { TooltipProps as BasicTooltipProps } from '../Tooltip';
import { TypographyProps } from '../Typography';

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
