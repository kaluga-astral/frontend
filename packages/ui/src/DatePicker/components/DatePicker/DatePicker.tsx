import { forwardRef, useEffect, useMemo, useState } from 'react';
import { ReactMaskProps } from 'react-imask/dist/mixin';

import { DatePickerClickAwayListener } from '../../common/components/DatePickerClickAwayListener';
import { DatePickerInput } from '../../common/components/DatePickerInput';
import { DatePickerPopper } from '../../common/components/DatePickerPopper';
import { TextFieldProps } from '../../../TextField';
import { useForwardedRef } from '../../common/hooks/useForwardedRef';
import { useToggle } from '../../common/hooks/useToggle';
import { MinMaxDateContext } from '../../common/components/MinMaxDateContext';
import { MinMaxDate } from '../../common/types/minMaxDate';
import { YearMonthDayPicker } from '../../common/components/YearMonthDayPicker';
import { useBaseDateInRange } from '../../common/utils/getBaseDateInRange';
import { dateToMask } from '../../common/utils/dateToMask';
import { buildIsoDate } from '../../common/utils/buildIsoDate';
import { DateMask } from '../../common/types/maskDate';
import { maskToDate } from '../../common/utils/maskToDate';
import { isDateOutOfRange } from '../../common/utils/isDateOutOfRange';
import { MondayFirst } from '../../common/components/DayPicker';

export type DatePickerProps = MondayFirst &
  MinMaxDate & {
    mask?: DateMask;
    onChange: (date: Date) => void;
    onOpen: () => void;
    onClose: () => void;
    inputProps?: Omit<TextFieldProps, 'ref' | 'value' | 'onChange'>;
    disabled?: boolean;
  };

const DEFAULT_MIN_DATE = buildIsoDate({ year: 1900 });

const DEFAULT_MAX_DATE = buildIsoDate({
  year: new Date().getUTCFullYear() + 100,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
});

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      onChange,
      onOpen,
      onClose,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
      mask = 'DD.MM.YYYY',
      isMondayFirst,
      inputProps,
      disabled,
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const [isActive, openPopper, closePopper] = useToggle({ onOpen, onClose });
    const [selectedDate, setSelectedDate] = useState<Date | undefined | null>();
    const maskedDate = useMemo(
      () => (selectedDate ? dateToMask(selectedDate, mask) : ''),
      [selectedDate],
    );

    const baseDate = useBaseDateInRange({ minDate, maxDate });

    const handleInputChange: ReactMaskProps['onComplete'] = (value, _, e) => {
      if (Boolean(e)) {
        const date = maskToDate(value, mask);

        if (isDateOutOfRange({ date, minDate })) {
          setSelectedDate(minDate);
        } else if (isDateOutOfRange({ date, maxDate })) {
          setSelectedDate(maxDate);
        } else {
          setSelectedDate(date);
        }
      }
    };

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
      <MinMaxDateContext.Provider value={{ minDate, maxDate }}>
        <DatePickerClickAwayListener onClickAway={closePopper}>
          <DatePickerInput
            {...inputProps}
            disabled={disabled}
            onComplete={handleInputChange}
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
      </MinMaxDateContext.Provider>
    );
  },
);
