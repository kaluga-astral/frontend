import { lazy } from 'react';
import { PropsWithChildren } from 'react';

import { TypographyProps } from '../Typography';
import { TooltipProps as BasicTooltipProps } from '../Tooltip';

import { OverflowTypographyWrapper } from './styles';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export interface OverflowedProps {
  overflowLimit?: number;
  rowsCount?: number;
}

interface TooltipCustomizable {
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

export type OverflowedElementProps = OverflowedProps &
  TooltipCustomizable &
  TypographyProps;

export type OverflowedTypographyProps =
  PropsWithChildren<OverflowedElementProps>;

const LazyTooltip = lazy(() =>
  import('../Tooltip').then((data) => ({ default: data.Tooltip })),
);

export const DEFAULT_OVERFLOW_OPTION_LENGTH = 64;

export const DEFAULT_ROWS_COUNT = 1;

export const OverflowTypography = ({
  tooltipProps = {} as TooltipProps,
  children,
  overflowLimit = DEFAULT_OVERFLOW_OPTION_LENGTH,
  rowsCount = DEFAULT_ROWS_COUNT,
  ...props
}: OverflowedTypographyProps) => {
  const isLongerThanLimit =
    typeof children === 'string' && children.length > overflowLimit;

  return isLongerThanLimit ? (
    <LazyTooltip
      // @ts-ignore ругается на то что тайтл может быть перезаписан, но на то и расчет, что при необходимости его можно заменить.
      title={children}
      disableInteractive
      {...tooltipProps}
    >
      <OverflowTypographyWrapper
        {...{ ...props, overflowLimit, rowsCount, children }}
      />
    </LazyTooltip>
  ) : (
    <OverflowTypographyWrapper
      {...{ ...props, overflowLimit, rowsCount, children }}
    />
  );
};
