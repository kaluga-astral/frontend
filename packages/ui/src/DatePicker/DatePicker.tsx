import { FocusEvent, MutableRefObject, forwardRef } from 'react';
import { IMask } from 'react-imask';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { InputAdornment } from '@mui/material';
import { CalendarOutlineMd } from '@astral/icons';
import { isValid, parse } from 'date-fns';

import { MaskField } from '../MaskField';
import { MaskFieldProps } from '../MaskField/types';
import { TextFieldProps } from '../TextField';

import { DatePickerWrapper } from './styled';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerDay } from './DatePickerDay';

export type Props = Omit<
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

const MIN_YEAR = 1000;

export const DatePicker = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, onChange, inputProps = {}, ...restProps } = props;
  const { placeholder = undefined, ...restInputProps } = inputProps;

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
    const date = parse(e?.target.value, 'dd.MM.yyyy', new Date());

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
        locale={ru}
        selected={value}
        openToDate={value ?? undefined}
        dateFormat="dd.MM.yyyy"
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
