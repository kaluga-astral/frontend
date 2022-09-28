import { ChangeEvent, forwardRef } from 'react';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';

import { MaskFieldProps } from '../../../../MaskField';

import { DatePickerInputWrapper } from './styles';

type DatePickerInputProps = Omit<MaskFieldProps, 'mask' | 'autofix'> & {
  onClean?: () => void;
};

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ onClick, onChange, onClean, ...props }, ref) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e?.target?.value === '') {
      onClean?.();
    }
  };

  return (
    <DatePickerInputWrapper
      {...props}
      ref={ref}
      onClick={onClick}
      mask={Date}
      autofix="pad"
      fullWidth
      InputProps={{
        onChange: handleChange,
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
