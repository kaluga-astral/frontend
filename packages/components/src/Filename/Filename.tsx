import { forwardRef } from 'react';
import { type TypographyVariant } from '@mui/material';

import { type TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';
import { type TypographyProps } from '../Typography';

import { Extension, StyledTypography, Wrapper } from './styles';
import { useLogic } from './useLogic';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export type FileNameProps = Omit<TypographyProps, 'variant'> & {
  /**
   * Название файла
   */
  children: string;
  /**
   * Cпособ кастомизировать тултип при необходимости
   * @example <OverflowTypography tooltipProps={{placement: 'top-start'}} />
   */
  tooltipProps?: Omit<TooltipProps, 'children'>;
  /**
   * Применяет стили оформления темы
   * @default inherit
   */
  variant?: TypographyVariant | 'inherit';
};

export const Filename = forwardRef<HTMLElement, FileNameProps>(
  (props, forwardedRef) => {
    const { typographyProps, isOverflowed, ExtensionProps, children } =
      useLogic({
        ...props,
        ref: forwardedRef,
      });

    const { tooltipProps, style } = props;

    return (
      <Tooltip
        title={isOverflowed && children}
        disableInteractive
        {...tooltipProps}
      >
        <Wrapper style={style}>
          <StyledTypography {...typographyProps} />
          <Extension {...ExtensionProps} />
        </Wrapper>
      </Tooltip>
    );
  },
);
