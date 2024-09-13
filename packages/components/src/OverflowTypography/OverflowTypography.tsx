import { type ReactNode, forwardRef } from 'react';
import { type PropsWithChildren } from 'react';

import { Tooltip } from '../Tooltip';
import { type TooltipProps as BasicTooltipProps } from '../Tooltip';
import { Typography, type TypographyProps } from '../Typography';

import { StyledTypography, Wrapper } from './styles';
import { useOverflowed } from './hooks';
import { truncateString } from './utils';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export type OverflowedProps = {
  /**
   * @example <OverflowTypography rowsCount={2} />
   * @default 1
   * опорная единица по которой определяется максимально отображаемое количество строк
   */
  rowsCount?: number;
};

type TooltipCustomizable = {
  /**
   * @example <OverflowTypography tooltipProps={{placement: 'top-start'}} />
   * способ кастомизировать тултип при необходимости
   */
  tooltipProps?: Omit<TooltipProps, 'children' | 'title'> & {
    /**
     * Кастомный контент внутри tooltip. Данный props перекрывает дефолтный текст,
     * когда строка не вмещается в контейнер
     */
    title?: ReactNode;
  };
  /**
   * Количество отображаемых после сокращения в конце символов
   */
  visibleLastSymbolsCount?: number;
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
    {
      tooltipProps,
      children,
      rowsCount = DEFAULT_ROWS_COUNT,
      visibleLastSymbolsCount,
      ...props
    },
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

    const canSlice = children && typeof children === 'string';

    if (canSlice && isOverflowed && visibleLastSymbolsCount) {
      const { firstPartLabel, secondPartLabel } = truncateString(
        visibleLastSymbolsCount,
        children,
      );

      const { align = 'left' } = props;

      return (
        <Tooltip title={children} disableInteractive {...tooltipProps}>
          <Wrapper $align={align}>
            <StyledTypography
              component="span"
              children={firstPartLabel}
              ref={ref}
              hasMultipleRows={false}
              rowsCount={1}
              {...props}
            />
            <Typography
              children={secondPartLabel}
              {...props}
              component="span"
            />
          </Wrapper>
        </Tooltip>
      );
    }

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
