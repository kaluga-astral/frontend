import { type ForwardedRef } from 'react';

import { useOverflowed } from '../hooks';
import { type OverflowedTypographyProps } from '../OverflowTypography';
import { truncateString } from '../utils';

type UseLogicParams = OverflowedTypographyProps & {
  forwardedRef: ForwardedRef<HTMLElement>;
};

export const useLogic = ({
  forwardedRef,
  children,
  visibleLastSymbolsCount,
}: UseLogicParams) => {
  const { ref, isOverflowed } = useOverflowed(forwardedRef);

  const canSlice = children && typeof children === 'string';

  const { firstPartLabel, secondPartLabel } =
    canSlice && isOverflowed && visibleLastSymbolsCount
      ? truncateString(visibleLastSymbolsCount, children)
      : { firstPartLabel: '', secondPartLabel: '' };

  const isTruncatedStringVisible =
    canSlice && isOverflowed && Boolean(visibleLastSymbolsCount);

  return {
    isTruncatedStringVisible,
    isOverflowed,
    ref,
    firstPartLabel,
    secondPartLabel,
  };
};
