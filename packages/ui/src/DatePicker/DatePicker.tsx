import {
  FocusEvent,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { TextFieldProps } from '../TextField';
import { useForwardedRef } from '../hooks/useForwardedRef';
import { useToggle } from '../hooks/useToggle';
import { areDatesSame } from '../utils/areDatesSame';
import { isDate } from '../utils/isDate';
import { dateToMask } from '../utils/maskDate/dateToMask';
import { maskToDate } from '../utils/maskDate/maskToDate';
import { DateMask } from '../utils/maskDate/maskDate';

import { DatePickerClickAwayListener } from './components/DatePickerClickAwayListener';
import { DatePickerInput } from './components/DatePickerInput';
import { DatePickerPopper } from './components/DatePickerPopper';
import {
  MinMaxDateContext,
  MinMaxDateContextProvider,
} from './components/MinMaxDateContext';
import { MinMaxDate } from './types';
import { YearMonthDayPicker } from './components/YearMonthDayPicker';
import { useBaseDateInRange } from './hooks/useBaseDateInRange';
import { MondayFirst } from './components/DayPicker';
import { useSelectedBaseDate } from './hooks/useSelectedBaseDate';

export type DatePickerProps = MondayFirst &
  Partial<MinMaxDate> & {
    mask?: DateMask;
    onChange?: (date: Date | string | null | undefined) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onOpen?: () => void;
    onClose?: () => void;
    inputProps?: Omit<TextFieldProps, 'ref' | 'value' | 'onChange'>;
    disabled?: boolean;
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
    },
    forwardedRef,
  ) => {
    const { maxDate, minDate } = useContext(MinMaxDateContext);
    const ref = useForwardedRef(forwardedRef);
    const [isActive, openPopper, closePopper] = useToggle({
      onActive: onOpen,
      onInactive: onClose,
    });
    const [selectedDate, setSelectedDate] = useState<Date | undefined | null>();
    const [maskedDate, setMaskedDate] = useState('');

    const baseDate = useBaseDateInRange({ minDate, maxDate });
    const selectedBaseDate = useSelectedBaseDate(selectedDate);

    const checkValue = useCallback(
      (value: string) => {
        setMaskedDate(value);

        const date = maskToDate(value, mask);

        if (value === '' || !isDate(date)) {
          setSelectedDate(null);
        } else if (!areDatesSame(date, selectedDate)) {
          setSelectedDate(date);
        }
      },
      [mask, selectedDate],
    );

    const handleDayPick = (date: Date) => {
      setMaskedDate(dateToMask(date, mask));
      setSelectedDate(date);
      closePopper();
    };

    useEffect(
      () => onChange?.(selectedDate || maskedDate),
      [selectedDate, maskedDate],
    );

    const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
      checkValue(e.target.value);
      onBlur?.(e);
    };

    return (
      <DatePickerClickAwayListener onClickAway={closePopper}>
        <DatePickerInput
          {...inputProps}
          mask={mask}
          onNativeChange={(e) => checkValue(e.target.value)}
          onBlur={blurHandler}
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
