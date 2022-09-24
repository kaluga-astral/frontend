import { forwardRef, useMemo, useState } from 'react';
import { ReactMaskProps } from 'react-imask/dist/mixin';

import { DatePickerClickAwayListener } from '../../common/components/DatePickerClickAwayListener';
import { DatePickerInput } from '../../common/components/DatePickerInput';
import { DatePickerPopper } from '../../common/components/DatePickerPopper';
import { TextFieldProps } from '../../../TextField';
import { useForwardedRef } from '../../common/hooks/useForwardedRef';
import { useToggle } from '../../common/hooks/useToggle/useToggle';
import { MinMaxDateContext } from '../../common/components/MinMaxDateContext';
import { MinMaxDate } from '../../common/types/minMaxDate';
import { YearMonthDayPicker } from '../../common/components/YearMonthDayPicker';
import { useBaseDateInRange } from '../../common/utils/getBaseDateInRange';
import { dateToMask } from '../../common/utils/dateToMask';
import { buildIsoDate } from '../../common/utils/buildIsoDate';
import { DateMask } from '../../common/types/maskDate';
import { maskToDate } from '../../common/utils/maskToDate';
import { isDateOutOfRange } from '../../common/utils/isDateOutOfRange';

type DatePickerProps = Omit<TextFieldProps, 'ref' | 'value'> &
  MinMaxDate & {
    mask?: DateMask;
  };

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      onChange,
      minDate = buildIsoDate({ year: 1900 }),
      maxDate = buildIsoDate({
        year: 2099,
        month: 12,
        day: 31,
        hour: 23,
        minute: 59,
      }),
      mask = 'DD.MM.YYYY',
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const [isActive, openPopper, closePopper] = useToggle(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const maskedDate = useMemo(
      () => (selectedDate ? dateToMask(selectedDate, mask) : ''),
      [selectedDate],
    );

    const baseDate = useBaseDateInRange({ minDate, maxDate });

    const handleChange: ReactMaskProps['onComplete'] = (value, _, e) => {
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

    const handleDayChange = (date: Date) => {
      setSelectedDate(date);
      closePopper();
    };

    return (
      <MinMaxDateContext.Provider value={{ minDate, maxDate }}>
        <DatePickerClickAwayListener onClickAway={closePopper}>
          <DatePickerInput
            {...props}
            onComplete={handleChange}
            value={maskedDate}
            ref={ref}
            onFocus={openPopper}
          />
          <DatePickerPopper
            open={isActive}
            onClose={closePopper}
            anchorEl={ref?.current || null}
          >
            <YearMonthDayPicker
              selectedDate={selectedDate}
              onChange={handleDayChange}
              date={selectedDate || baseDate}
            />
          </DatePickerPopper>
        </DatePickerClickAwayListener>
      </MinMaxDateContext.Provider>
    );
  },
);
