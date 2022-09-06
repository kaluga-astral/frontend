import { FocusEvent, MutableRefObject, forwardRef, useContext } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';
import { isValid } from 'date-fns';

import { MaskField, MaskFieldProps } from '../MaskField';
import { TextFieldProps } from '../TextField';
import { DatePickerContext } from '../DatePickerProvider';

import { DatePickerWrapper } from './styled';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerDay } from './DatePickerDay';

export type DatePickerProps = Omit<
  ReactDatePickerProps,
  | 'locale'
  | 'renderCustomHeader'
  | 'renderDayContents'
  | 'customInput'
  | 'selected'
  | 'value'
  | 'placeholderText'
> & {
  inputProps?: TextFieldProps;
  value?: Date;
};

const MIN_YEAR = 1000;

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      inputProps = {},
      dateFormat = 'dd.MM.yyyy',
      ...restProps
    } = props;
    const { placeholder, ...restInputProps } = inputProps;
    const { locale } = useContext(DatePickerContext);

    const handleMaskFieldAccept = (
      val: string,
      _maskRef: unknown,
      _e?: InputEvent,
      onMaskFieldChange?: (value: string) => void,
    ) => {
      onMaskFieldChange?.({
        target: {
          value: val,
        },
      } as unknown as string);
    };

    const handleChange = (
      date: Date,
      e: FocusEvent<HTMLInputElement, Element>,
    ) => {
      if (!date) {
        onChange(null, e);
      }

      if (isValid(date) && date.getFullYear() >= MIN_YEAR) {
        onChange(date, e);
      }
    };

    return (
      <DatePickerWrapper>
        <ReactDatePicker
          {...restProps}
          locale={locale}
          selected={value}
          openToDate={value ?? undefined}
          dateFormat={dateFormat}
          placeholderText={placeholder}
          onChange={handleChange}
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
                // если передан ref - пишем в ref.current элемент из MaskField (inputRef принимает только функцию)
                if (ref) {
                  (ref as MutableRefObject<HTMLInputElement | null>).current =
                    el;
                }
              }}
            />
          }
        />
      </DatePickerWrapper>
    );
  },
);

export default DatePicker;
