import { styled } from '../../../../styles';
import { MaskField } from '../../../../MaskField';

export const DatePickerInputWrapper = styled(MaskField)`
  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-clear-button,
  input[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    appearance: none;
    text-transform: uppercase;
  }
`;
