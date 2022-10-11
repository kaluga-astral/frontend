import {
  ChangeEvent,
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
import {
  DateMask,
  areDatesSame,
  dateToMask,
  isDate,
  maskToDate,
} from '../utils/date';

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

        const date = maskToDate(value);

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

    const handleNativeChange = (e: ChangeEvent<HTMLInputElement>) =>
      checkValue(e.target.value);

    return (
      <DatePickerClickAwayListener onClickAway={closePopper}>
        <DatePickerInput
          {...inputProps}
          mask={mask}
          onNativeChange={handleNativeChange}
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
