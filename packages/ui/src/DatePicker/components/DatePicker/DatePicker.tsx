import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { DatePickerClickAwayListener } from '../../common/components/DatePickerClickAwayListener';
import { DatePickerInput } from '../../common/components/DatePickerInput';
import { DatePickerPopper } from '../../common/components/DatePickerPopper';
import { TextFieldProps } from '../../../TextField';
import { useForwardedRef } from '../../common/hooks/useForwardedRef';
import { useToggle } from '../../common/hooks/useToggle';
import {
  MinMaxDateContext,
  MinMaxDateContextProvider,
} from '../../common/components/MinMaxDateContext';
import { MinMaxDate } from '../../common/types/minMaxDate';
import { YearMonthDayPicker } from '../../common/components/YearMonthDayPicker';
import { useBaseDateInRange } from '../../common/utils/getBaseDateInRange';
import { dateToMask } from '../../common/utils/dateToMask';
import { DateMask } from '../../common/types/maskDate';
import { maskToDate } from '../../common/utils/maskToDate';
import {
  DateCompareDeep,
  buildDateByDeep,
  isDateOutOfRange,
} from '../../common/utils/isDateOutOfRange';
import { MondayFirst } from '../../common/components/DayPicker';

export type DatePickerProps = MondayFirst &
  Partial<MinMaxDate> & {
    mask?: DateMask;
    onChange?: (date: Date) => void;
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
    const [isActive, openPopper, closePopper] = useToggle({ onOpen, onClose });
    const [selectedDate, setSelectedDate] = useState<Date | undefined | null>();
    const maskedDate = useMemo(
      () => (selectedDate ? dateToMask(selectedDate, mask) : ''),
      [selectedDate],
    );

    const baseDate = useBaseDateInRange({ minDate, maxDate });

    const checkValue = useCallback(
      (value: string) => {
        if (value.length === mask?.length) {
          const date = maskToDate(value, mask);

          if (
            isDateOutOfRange({
              date,
              minDate,
              deep: DateCompareDeep.day,
            })
          ) {
            setSelectedDate(buildDateByDeep(minDate, DateCompareDeep.day));
          } else if (
            isDateOutOfRange({
              date,
              maxDate,
              deep: DateCompareDeep.day,
            })
          ) {
            setSelectedDate(buildDateByDeep(maxDate, DateCompareDeep.day));
          } else {
            setSelectedDate(date);
          }
        } else if (value === '') {
          setSelectedDate(null);
        }
      },
      [mask],
    );

    const handleDayPick = (date: Date) => {
      setSelectedDate(date);
      closePopper();
    };

    useEffect(() => {
      if (selectedDate) {
        onChange?.(selectedDate);
      }
    }, [selectedDate]);

    return (
      <DatePickerClickAwayListener onClickAway={closePopper}>
        <DatePickerInput
          {...inputProps}
          onNativeChange={(e) => checkValue(e.target.value)}
          onBlur={(e) => checkValue(e.target.value)}
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
            selectedDate={selectedDate}
            onChange={handleDayPick}
            date={selectedDate || baseDate}
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
