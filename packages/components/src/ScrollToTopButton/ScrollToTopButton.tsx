import { ChevronUpOutlineMd } from '@astral/icons';

import { type ButtonProps } from '../Button';

import { StyledFab } from './styles';

export type ScrollToTopButtonProps = ButtonProps;

/**
 * Универсальная кнопка прокрутки содержимого наверх, не содержит логику
 */
export const ScrollToTopButton = ({ onClick }: ScrollToTopButtonProps) => {
  return (
    <StyledFab color="default" onClick={onClick} size="small">
      <ChevronUpOutlineMd />
    </StyledFab>
  );
};
