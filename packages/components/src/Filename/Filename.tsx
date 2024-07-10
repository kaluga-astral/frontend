import { forwardRef } from 'react';

import { type TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';
import { type TypographyProps } from '../Typography';

import { Extension, StyledTypography, Wrapper } from './styles';
import { useLogic } from './useLogic';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export type FileNameProps = TypographyProps & {
  /**
   * Название файла
   */
  children: string;
  /**
   * Cпособ кастомизировать тултип при необходимости
   * @example <OverflowTypography tooltipProps={{placement: 'top-start'}} />
   */
  tooltipProps?: Omit<TooltipProps, 'children'>;
};

export const Filename = forwardRef<HTMLElement, FileNameProps>(
  ({ tooltipProps, children, ...props }, forwardedRef) => {
    const { typographyProps, isOverflowed, ext } = useLogic(
      children,
      forwardedRef,
      props,
    );

    return (
      <Tooltip
        title={isOverflowed && children}
        disableInteractive
        {...tooltipProps}
      >
        <Wrapper>
          <StyledTypography {...typographyProps} />
          <Extension>{ext}</Extension>
        </Wrapper>
      </Tooltip>
    );
  },
);
