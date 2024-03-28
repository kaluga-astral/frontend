import { styled } from '../styles';
import { FormControlLabel } from '../FormControlLabel';
import { Checkbox } from '../Checkbox';

/**
 * Выравнивает элементы по вертикали
 */
export const StyledFormControlledLabel = styled(FormControlLabel)`
  align-items: flex-start;
`;

/**
 * Уменьшает padding сверху, чтобы чекбокс не был ниже текста
 */
export const StyledCheckbox = styled(Checkbox)`
  padding-top: 3px;
`;
