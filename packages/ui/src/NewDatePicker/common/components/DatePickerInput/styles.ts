import { styled } from '../../../../styles';
import { TextField } from '../../../../TextField';

export const DatePickerInputWrapper = styled(TextField)`
  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-clear-button,
  input[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    appearance: none;
    text-transform: uppercase;
  }
`;
