import { forwardRef } from 'react';

import { Tooltip } from '../Tooltip';

import { OverflowTypographyWrapper } from './styles';
import { useOverflowed } from './hooks/useOverflowed';
import { OverflowedTypographyProps } from './types';

export const DEFAULT_ROWS_COUNT = 1;

export const OverflowTypography = forwardRef<
  HTMLElement,
  OverflowedTypographyProps
>(
  (
    { tooltipProps, children, rowsCount = DEFAULT_ROWS_COUNT, ...props },
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

    if (children && isOverflowed) {
      return (
        <Tooltip title={children} disableInteractive {...tooltipProps}>
          <OverflowTypographyWrapper {...typographyProps} />
        </Tooltip>
      );
    }

    return <OverflowTypographyWrapper {...typographyProps} />;
  },
);
