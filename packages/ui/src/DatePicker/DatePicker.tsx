import { FocusEvent, MutableRefObject, forwardRef, useContext } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';
import { isValid, parse } from 'date-fns';

import { IMask, MaskField, MaskFieldProps } from '../MaskField';
import { TextFieldProps } from '../TextField';
import { DatePickerContext } from '../DatePickerProvider';

import { DatePickerWrapper } from './styled';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerDay } from './DatePickerDay';

export type Props = Omit<
  ReactDatePickerProps,
  | 'renderCustomHeader'
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

export const DatePicker = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    value,
    onChange,
    inputProps = {},
    dateFormat = 'dd.MM.yyyy',
    ...restProps
  } = props;
  const { placeholder, ...restInputProps } = inputProps;
  const { locale } = useContext(DatePickerContext);

  // уберкостыль, react-date-picker забирает значение из event.target.value
  const handleMaskFieldAccept = (
    val: string,
    _maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
    _e?: InputEvent,
    onMaskFieldChange?: (value: string) => void
  ) => {
    onMaskFieldChange?.({
      target: {
        value: val,
      },
    } as unknown as string);
  };

  const handleChangeRaw = (e: FocusEvent<HTMLInputElement, Element>) => {
    const date = parse(e?.target.value, dateFormat as string, new Date());

    // если инпут пустой - кладем в value null
    if (!e?.target.value) {
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
        onChange={onChange}
        onChangeRaw={handleChangeRaw}
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
