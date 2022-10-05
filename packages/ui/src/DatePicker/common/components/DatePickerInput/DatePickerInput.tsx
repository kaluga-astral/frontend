import { ChangeEvent, forwardRef } from 'react';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';

import { MaskFieldProps } from '../../../../MaskField';

import { DatePickerInputWrapper } from './styles';

type DatePickerInputProps = Omit<MaskFieldProps, 'mask' | 'autofix'> & {
  onNativeChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  mask: string;
};

const ALL_LETTERS = /\w/g;

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ onClick, onChange, onNativeChange, mask, ...props }, ref) => (
  <DatePickerInputWrapper
    {...props}
    ref={ref}
    onClick={onClick}
    // заменяем все буквы из маски на нули, потому что MaskField умеет работать только с цифрами
    mask={mask?.replace(ALL_LETTERS, '0')}
    autofix={false}
    fullWidth
    InputProps={{
      onChange: onNativeChange,
      endAdornment: (
        <InputAdornment position="end" disablePointerEvents>
          <CalendarOutlineMd />
        </InputAdornment>
      ),
    }}
    inputProps={{
      ref,
    }}
  />
));
