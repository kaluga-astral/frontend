import { MutableRefObject, forwardRef } from 'react';
import { IMask } from 'react-imask';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';

import { MaskField } from '../MaskField';
import { MaskFieldProps } from '../MaskField/types';
import { TextFieldProps } from '../TextField';

import { DatePickerWrapper } from './styled';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerDay } from './DatePickerDay';

type Props = Omit<
  ReactDatePickerProps,
  | 'renderCustomHeader'
  | 'locale'
  | 'dateFormat'
  | 'renderCustomHeader'
  | 'renderDayContents'
  | 'customInput'
  | 'selected'
  | 'value'
  | 'placeholderText'
> & {
  inputProps?: TextFieldProps;
  value: Date | null;
};

export const DatePicker = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, inputProps = {}, ...restProps } = props;
  const { placeholder = undefined, ...restInputProps } = inputProps;

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
    <DatePickerWrapper>
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
            {...(restInputProps as MaskFieldProps)}
            mask={Date}
            autofix="pad"
            onAccept={handleMaskFieldAccept}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarOutlineMd />
                </InputAdornment>
              ),
            }}
            inputRef={(el: HTMLInputElement | null) => {
              if (ref) {
                (ref as MutableRefObject<HTMLInputElement | null>).current = el;
              }
            }}
          />
        }
      />
    </DatePickerWrapper>
  );
});

export default DatePicker;
