import { type MouseEvent } from 'react';
import { debounce } from 'lodash-es';

import { type ButtonProps } from '../../Button';
import { Fab } from '../../Fab';
import { CircularProgress } from '../../CircularProgress';

import { DataGridInfiniteScrollButtonWrapper } from './styles';

export interface StickyButtonProps extends ButtonProps {
  vertical: 'top' | 'bottom';
  horizontal: 'right' | 'left';
  icon?: JSX.Element;
  isLoading?: boolean;
  delay?: number;
}

const DEFAULT_DELAY = 200;

export const DataGridInfiniteScrollButton = ({
  vertical,
  horizontal,
  icon,
  isLoading,
  disabled,
  onClick,
  delay = DEFAULT_DELAY,
}: StickyButtonProps) => {
  const handleClick = debounce(
    (event: MouseEvent<HTMLButtonElement>) => onClick?.(event),
    delay,
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
