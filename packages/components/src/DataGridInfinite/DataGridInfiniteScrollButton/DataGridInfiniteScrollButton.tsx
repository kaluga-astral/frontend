import { type MouseEvent, useCallback } from 'react';

import { type ButtonProps } from '../../Button';
import { Fab } from '../../Fab';
import { CircularProgress } from '../../CircularProgress';

import { DataGridInfiniteScrollButtonWrapper } from './styles';

export type StickyButtonProps = ButtonProps & {
  vertical: 'top' | 'bottom';
  horizontal: 'right' | 'left';
  icon: JSX.Element;
  isLoading?: boolean;
};

export const DataGridInfiniteScrollButton = ({
  vertical,
  horizontal,
  icon,
  isLoading,
  disabled,
  onClick,
}: StickyButtonProps) => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
    },
    [onClick],
  );

  return (
    <DataGridInfiniteScrollButtonWrapper
      vertical={vertical}
      horizontal={horizontal}
    >
      <Fab
        color="default"
        disabled={disabled}
        onClick={handleClick}
        size="small"
      >
        {isLoading ? <CircularProgress size="small" /> : icon}
      </Fab>
    </DataGridInfiniteScrollButtonWrapper>
  );
};
