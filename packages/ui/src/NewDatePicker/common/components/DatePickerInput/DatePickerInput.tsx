import { MouseEvent, forwardRef, useContext } from 'react';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';

import { TextFieldProps } from '../../../../TextField';
import { dateToSimpleIso } from '../../utils/simplifyIsoDate';
import { MinMaxDateContext } from '../MinMaxDateContext';

import { DatePickerInputWrapper } from './styles';

type DatePickerInputProps = TextFieldProps;

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ onClick, ...props }, ref) => {
  const { maxDate, minDate } = useContext(MinMaxDateContext);
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // preventDefault для предотвращения открытия нативного календаря
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <DatePickerInputWrapper
      {...props}
      type="date"
      onClick={handleClick}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" disablePointerEvents>
            <CalendarOutlineMd />
          </InputAdornment>
        ),
      }}
      inputProps={{
        min: dateToSimpleIso(minDate),
        max: dateToSimpleIso(maxDate),
        ref,
        // required здесь нужен, чтобы скрыть нативный крестик очистки в мозиле
        required: true,
      }}
    />
  );
});
