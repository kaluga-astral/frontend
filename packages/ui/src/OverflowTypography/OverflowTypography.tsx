import { PropsWithChildren } from 'react';

import { TypographyProps } from '../Typography';
import { TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';

import { OverflowTypographyWrapper } from './styles';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export type OverflowedProps = {
  // опорная единица, по которой определяется max-width в ch по формуле ${overflowLimit / rowsCount},
  // и определяется необходимость монтирования Tooltip
  // по умолчанию равно 64
  overflowLimit?: number;
  // опорная единица по которой определяется максимиально отображаемое колличество строк
  // по умолчанию равно 1
  rowsCount?: number;
};

type TooltipCustomizable = {
  //при необходмисоти можно кастомизировать настройки для Тултипа
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
