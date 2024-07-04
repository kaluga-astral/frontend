import { forwardRef } from 'react';

import { type TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';
import { type TypographyProps } from '../Typography';
import { useOverflowed } from '../OverflowTypography/hooks';

import { StyledTypography } from './styles';
import { useLogic } from './hooks';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

type TooltipCustomizable = {
  /**
   * Cпособ кастомизировать тултип при необходимости
   * @example <OverflowTypography tooltipProps={{placement: 'top-start'}} />
   */
  tooltipProps?: Omit<TooltipProps, 'children'>;
};

type FileElementProps = TooltipCustomizable & TypographyProps;

export type FileNameProps = FileElementProps & {
  /**
   * Название файла
   */
  children: string;
};

export const Filename = forwardRef<HTMLElement, FileNameProps>(
  ({ tooltipProps, children, ...props }, forwardedRef) => {
    const { ref } = useOverflowed(forwardedRef);
    const truncatedChildren = useLogic(children, ref);

    const typographyProps = {
      ...props,
      ref,
      children: truncatedChildren,
    };

    if (truncatedChildren !== children) {
      return (
        <Tooltip title={children} disableInteractive {...tooltipProps}>
          <StyledTypography {...typographyProps} />
        </Tooltip>
      );
    }

    return <StyledTypography {...typographyProps} />;
  },
);
