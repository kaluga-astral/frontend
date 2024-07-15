import { forwardRef } from 'react';
import { type TypographyVariant } from '@mui/material';

import { type TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';
import { type TypographyProps } from '../Typography';

import { Extension, FileBaseName, Wrapper } from './styles';
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
    const {
      typographyProps,
      isOverflowed,
      extensionProps,
      baseNameProps,
      children,
    } = useLogic({
      ...props,
      ref: forwardedRef,
    });

    const { tooltipProps } = props;

    return (
      <Tooltip
        title={isOverflowed && children}
        disableInteractive
        {...tooltipProps}
      >
        <Wrapper {...typographyProps}>
          <FileBaseName {...baseNameProps} />
          <Extension {...extensionProps} />
        </Wrapper>
      </Tooltip>
    );
  },
);
