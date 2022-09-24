import { forwardRef } from 'react';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';

import { MaskFieldProps } from '../../../../MaskField';

import { DatePickerInputWrapper } from './styles';

type DatePickerInputProps = Omit<MaskFieldProps, 'mask' | 'autofix'>;

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ onClick, onChange, ...props }, ref) => {
  return (
    <DatePickerInputWrapper
      {...props}
      ref={ref}
      onClick={onClick}
      mask={Date}
      autofix="pad"
      fullWidth
      InputProps={{
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
  );
});
