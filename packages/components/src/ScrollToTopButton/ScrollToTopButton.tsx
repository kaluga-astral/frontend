import { ChevronUpOutlineMd } from '@astral/icons';

import { styled } from '../styles';
import { Fab } from '../Fab';
import { type ButtonProps } from '../Button';

const StyledFab = styled(Fab)`
  position: absolute;

  ${({ theme }) =>
    `
      bottom: 30px;
      right: ${theme.spacing(3)};

      ${theme.breakpoints.down('sm')} {
        right: ${theme.spacing(9)};
      }
    `}
`;

/**
 * Универсальная кнопка прокрутки содержимого наверх, не содержит логику
 */
export const ScrollToTopButton = ({ disabled, onClick }: ButtonProps) => {
  return (
    <StyledFab
      color="default"
      disabled={disabled}
      onClick={onClick}
      size="small"
    >
      <ChevronUpOutlineMd />
    </StyledFab>
  );
};
