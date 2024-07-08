import { forwardRef } from 'react';

import { type TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';
import { type TypographyProps } from '../Typography';

import { StyledTypography } from './styles';
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
    const { typographyProps, isTruncated } = useLogic(
      children,
      forwardedRef,
      props,
    );

    if (isTruncated) {
      return (
        <Tooltip title={children} disableInteractive {...tooltipProps}>
          <StyledTypography {...typographyProps} />
        </Tooltip>
      );
    }

    return <StyledTypography {...typographyProps} />;
  },
);
