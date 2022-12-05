import { ChangeEvent, FocusEvent, SyntheticEvent, forwardRef } from 'react';

import { TextFieldProps } from '../TextField';
import { useForwardedRef, useToggle } from '../hooks';
import { DateMask } from '../utils/date';
import { Reason } from '../types';

import { DatePickerClickAwayListener } from './DatePickerClickAwayListener';
import { DatePickerInput } from './DatePickerInput';
import { DatePickerPopper } from './DatePickerPopper';
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from './MinMaxDateContext';
import { MinMaxDate } from './types';
import { YearMonthDayPicker } from './YearMonthDayPicker';
import {
  useBaseDateInRange,
  useMaskedValue,
  useSelectedBaseDate,
} from './hooks';
import { MondayFirst } from './DayPicker';

export type DatePickerProps = MondayFirst &
  Partial<MinMaxDate> & {
    /**
     * @description Маска для инпута даты
     * @default 'DD.MM.YYYY'
     * */
    mask?: DateMask;
    /**
     * @description Обработчик изменения состояния. Передает только Date object, если дата невалидна, то будет Invalid date
     * */
    onChange?: (date?: Date) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onOpen?: () => void;
    onClose?: (
      event?: SyntheticEvent<Element, Event> | Event,
      reason?: Reason,
    ) => void;
    inputProps?: Omit<TextFieldProps, 'ref' | 'value' | 'onChange'>;
    disabled?: boolean;
    /**
     * @description Принимает только Date object, включая невалидную дату Invalid date
     * */
    value?: Date;
  };

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      onChange,
      onOpen,
      onBlur,
      onClose,
      mask = '`DD.`MM.`YYYY',
      isMondayFirst,
      inputProps,
      disabled,
      value,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const [isActive, openPopper, closePopper] = useToggle({
      onActive: onOpen,
      onInactive: onClose,
    });

    const { maskedValue, onChangeMaskedValue, onChangeMaskedDate } =
      useMaskedValue({
        currentValue: value,
        mask,
        onChangeValue: onChange,
      });

    const baseDate = useBaseDateInRange({ minDate, maxDate });
    const selectedBaseDate = useSelectedBaseDate({
      currentValue: value,
      minDate,
      maxDate,
    });

    const handleDayPick = (date: Date) => {
      onChangeMaskedDate(date);
      closePopper(undefined, 'selectOption');
    };

    const handleBlurMaskInput = (e: FocusEvent<HTMLInputElement>) => {
      onChangeMaskedValue(e.target.value);
      onBlur?.(e);
    };

    const handleChangeMaskInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeMaskedValue(e.target.value);
    };

    return (
      <DatePickerClickAwayListener onClickAway={closePopper}>
        <DatePickerInput
          {...inputProps}
          mask={mask}
          onNativeChange={handleChangeMaskInput}
          onBlur={handleBlurMaskInput}
          disabled={disabled}
          value={maskedValue}
          ref={ref}
          onFocus={openPopper}
        />
        <DatePickerPopper
          open={isActive}
          onClose={closePopper}
          anchorEl={ref?.current}
        >
          <MinMaxDateContextProvider minDate={minDate} maxDate={maxDate}>
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              selectedDate={selectedBaseDate}
              onChange={handleDayPick}
              date={selectedBaseDate || baseDate}
            />
          </MinMaxDateContextProvider>
        </DatePickerPopper>
      </DatePickerClickAwayListener>
    );
  },
);
