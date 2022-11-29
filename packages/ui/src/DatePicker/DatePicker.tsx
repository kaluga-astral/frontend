import {
  ChangeEvent,
  FocusEvent,
  SyntheticEvent,
  forwardRef,
  useContext,
  useState,
} from 'react';

import { TextFieldProps } from '../TextField';
import { useForwardedRef, useToggle } from '../hooks';
import { DateMask, formatDate, parseDate } from '../utils/date';
import { Reason } from '../types';

import { DatePickerClickAwayListener } from './DatePickerClickAwayListener';
import { DatePickerInput } from './DatePickerInput';
import { DatePickerPopper } from './DatePickerPopper';
import {
  MinMaxDateContext,
  MinMaxDateContextProvider,
} from './MinMaxDateContext';
import { MinMaxDate } from './types';
import { YearMonthDayPicker } from './YearMonthDayPicker';
import { useBaseDateInRange } from './hooks/useBaseDateInRange';
import { MondayFirst } from './DayPicker';
import { useSelectedBaseDate } from './hooks/useSelectedBaseDate';

export type DatePickerProps = MondayFirst &
  Partial<MinMaxDate> & {
    mask?: DateMask;
    onChange?: (date?: Date) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onOpen?: () => void;
    onClose?: (
      event?: SyntheticEvent<Element, Event> | Event,
      reason?: Reason,
    ) => void;
    inputProps?: Omit<TextFieldProps, 'ref' | 'value' | 'onChange'>;
    disabled?: boolean;
    value?: Date;
  };

const DatePickerInner = forwardRef<
  HTMLInputElement,
  Omit<DatePickerProps, 'minDate' | 'maxDate'>
>(
  (
    {
      onChange,
      onOpen,
      onBlur,
      onClose,
      mask = 'DD.MM.YYYY',
      isMondayFirst,
      inputProps,
      disabled,
      value,
    },
    forwardedRef,
  ) => {
    const { maxDate, minDate } = useContext(MinMaxDateContext);
    const ref = useForwardedRef(forwardedRef);
    const [isActive, openPopper, closePopper] = useToggle({
      onActive: onOpen,
      onInactive: onClose,
    });

    const [maskedDate, setMaskedDate] = useState(() =>
      value ? formatDate(value, mask) : '',
    );

    const baseDate = useBaseDateInRange({ minDate, maxDate });
    const selectedBaseDate = useSelectedBaseDate(value);

    const handleDayPick = (date: Date) => {
      setMaskedDate(formatDate(date, mask));

      if (onChange) {
        onChange(date);
      }

      closePopper(undefined, 'selectOption');
    };

    const handleChangeMaskedValue = (maskedValue: string) => {
      setMaskedDate(maskedValue);

      const date = parseDate(maskedValue, mask);

      if (onChange) {
        onChange(date);
      }
    };

    const handleBlurMaskInput = (e: FocusEvent<HTMLInputElement>) => {
      handleChangeMaskedValue(e.target.value);
      onBlur?.(e);
    };

    const handleChangeMaskInput = (e: ChangeEvent<HTMLInputElement>) => {
      handleChangeMaskedValue(e.target.value);
    };

    return (
      <DatePickerClickAwayListener onClickAway={closePopper}>
        <DatePickerInput
          {...inputProps}
          mask={mask}
          onNativeChange={handleChangeMaskInput}
          onBlur={handleBlurMaskInput}
          disabled={disabled}
          value={maskedDate}
          ref={ref}
          onFocus={openPopper}
        />
        <DatePickerPopper
          open={isActive}
          onClose={closePopper}
          anchorEl={ref?.current}
        >
          <YearMonthDayPicker
            isMondayFirst={isMondayFirst}
            selectedDate={selectedBaseDate}
            onChange={handleDayPick}
            date={selectedBaseDate || baseDate}
          />
        </DatePickerPopper>
      </DatePickerClickAwayListener>
    );
  },
);

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ minDate, maxDate, ...props }, forwardedRef) => (
    <MinMaxDateContextProvider minDate={minDate} maxDate={maxDate}>
      <DatePickerInner {...props} ref={forwardedRef} />
    </MinMaxDateContextProvider>
  ),
);
