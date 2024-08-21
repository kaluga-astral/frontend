import { forwardRef } from 'react';
import { type TypographyVariant } from '@mui/material';

import { type TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';
import { Typography, type TypographyProps } from '../Typography';

import { FileBaseName, StyledTypography } from './styles';
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
    const { isOverflowed, suffixWithExtension, baseNameProps } = useLogic({
      ...props,
      ref: forwardedRef,
    });

    const {
      tooltipProps,
      variant = 'inherit',
      children,
      align = 'left',
      ...restProps
    } = props;

    return (
      <Tooltip
        title={isOverflowed && children}
        disableInteractive
        {...tooltipProps}
      >
        <StyledTypography $align={align} variant={variant} {...restProps}>
          <FileBaseName {...baseNameProps} />
          <Typography component="span">{suffixWithExtension}</Typography>
        </StyledTypography>
      </Tooltip>
    );
  },
);
