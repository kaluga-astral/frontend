import { ChangeEvent, forwardRef, useState } from 'react';

import { DatePickerClickAwayListener } from '../../common/components/DatePickerClickAwayListener';
import { DatePickerInput } from '../../common/components/DatePickerInput';
import { DatePickerPopper } from '../../common/components/DatePickerPopper';
import { TextFieldProps } from '../../../TextField';
import { useForwardedRef } from '../../common/hooks/useForwardedRef';
import { useToggle } from '../../common/hooks/useToggle/useToggle';
import { MinMaxDateContext } from '../../common/components/MinMaxDateContext';
import { isDate } from '../../common/utils/isDate';
import { buildIsoDateString } from '../../common/utils/buildIsoDateString';
import { dateToSimpleIso } from '../../common/utils/simplifyIsoDate';
import { MinMaxDate } from '../../common/types/minMaxDate';
import { YearMonthDayPicker } from '../../common/components/YearMonthDayPicker';
import { useBaseDateInRange } from '../../common/utils/getBaseDateInRange';

type NewDatePickerProps = Omit<TextFieldProps, 'ref' | 'value'> & MinMaxDate;

export const DatePicker = forwardRef<HTMLInputElement, NewDatePickerProps>(
  (
    {
      onChange,
      minDate = new Date(buildIsoDateString(1900)),
      maxDate = new Date(buildIsoDateString(2099, 12, 31, 23, 59)),
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const [isActive, openPopper, closePopper] = useToggle(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

    const baseDate = useBaseDateInRange({ minDate, maxDate });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(isDate(new Date(e.target.value)), e.target.value);
    };

    const handleDayChange = (date: Date) => {
      console.log(ref?.current, date.toISOString().substring(0, 10));
      setSelectedDate(date);
      ref?.current?.setAttribute('value', dateToSimpleIso(date) || '');
      closePopper();
    };

    return (
      <MinMaxDateContext.Provider value={{ minDate, maxDate }}>
        <DatePickerClickAwayListener onClickAway={closePopper}>
          <DatePickerInput
            {...props}
            onChange={handleInputChange}
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
