import { type MouseEvent, useCallback } from 'react';
import { ChevronUpOutlineMd } from '@astral/icons';

import { Fab } from '../Fab';
import { CircularProgress } from '../CircularProgress';
import { type ButtonProps } from '../Button';

import { ButtonWrapper } from './styles';

export type ScrollToTopButtonProps = ButtonProps & {
  isLoading?: boolean;
};

/**
 * Универсальная кнопка прокрутки содержимого наверх, не содержит логику
 */
export const ScrollToTopButton = ({
  isLoading,
  disabled,
  onClick,
}: ScrollToTopButtonProps) => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
    },
    [onClick],
  );

  return (
    <ButtonWrapper vertical={'bottom'} horizontal={'right'}>
      <Fab
        color="default"
        disabled={disabled}
        onClick={handleClick}
        size="small"
      >
        {isLoading ? <CircularProgress size="small" /> : <ChevronUpOutlineMd />}
      </Fab>
    </ButtonWrapper>
  );
};
