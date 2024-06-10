import { styled } from '../styles';
import { IconButton } from '../IconButton';
import { TextField } from '../TextField';

export const StyledIconButton = styled(IconButton)<{
  isActive: boolean;
}>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

export const StyledTextField = styled(TextField)`
  & .MuiFormHelperText-root {
    /* TODO Убрать после реализации https://track.astral.ru/soft/browse/UIKIT-1333 */
    display: none;
  }
`;
