import { MutableRefObject, forwardRef } from 'react';
import { IMask } from 'react-imask';
import ReactDatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';

import { MaskField } from '../MaskField';

import { StyledDatePickerWrapper } from './styled';
import { DatePickerProps } from './types';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerDay } from './DatePickerDay';

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    const { helperText, label, error, value, placeholder, ...restProps } =
      props;

    // уберкостыль, react-date-picker забирает значение из event.target.value
    const handleMaskFieldAccept = (
      val: string,
      _maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
      _e?: InputEvent,
      onChange?: (value: string) => void
    ) => {
      onChange?.({
        target: {
          value: val,
        },
      } as unknown as string);
    };

    return (
      <StyledDatePickerWrapper>
        <ReactDatePicker
          {...restProps}
          selected={value}
          locale={ru}
          dateFormat="dd.MM.yyyy"
          placeholderText={placeholder}
          renderCustomHeader={(renderProps) => (
            <DatePickerHeader {...renderProps} />
          )}
          renderDayContents={(dayOfMonth: number) => (
            <DatePickerDay dayOfMonth={dayOfMonth} />
          )}
          customInput={
            <MaskField
              mask={Date}
              onAccept={handleMaskFieldAccept}
              label={label}
              error={error}
              helperText={helperText}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarOutlineMd />
                  </InputAdornment>
                ),
              }}
              inputRef={(el: HTMLInputElement | null) => {
                if (ref) {
                  (ref as MutableRefObject<HTMLInputElement | null>).current =
                    el;
                }
              }}
            />
          }
        />
      </StyledDatePickerWrapper>
    );
  }
);

export default DatePicker;
