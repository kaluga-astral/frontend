import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from '../DatePicker/MinMaxDateContext';
import { useForwardedRef, useToggle } from '../hooks';
import { useBaseDateInRange } from '../DatePicker/hooks/useBaseDateInRange';
import { useSelectedBaseDate } from '../DatePicker/hooks/useSelectedBaseDate';
import { areDatesSame, formatDate, isDate, parseDate } from '../utils/date';
import { DatePickerClickAwayListener } from '../DatePicker/DatePickerClickAwayListener';
import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { DatePickerPopper } from '../DatePicker/DatePickerPopper';
import { YearMonthDayPicker } from '../DatePicker/YearMonthDayPicker';
import { DatePickerProps } from '../DatePicker';

import { DateRangePickerSplitter } from './styles';

type Value = Date | null | undefined;

export type DateRangePickerProps = Omit<
  DatePickerProps,
  'onChange' | 'value'
> & {
  /**
   * @description колбэк с двумя датами, первый аргумент соответствует выбранной дате в пикере слева,
   * второй выбранной дате в пикере справа, будет вызывать каждый раз при изменении одной из дат
   */
  onChange?: (
    dataA: Date | string | null | undefined,
    dateB: Date | string | null | undefined,
  ) => void;
  /**
   * @description управляемая дата для пикера слева
   */
  valueA?: Value;
  /**
   * @description управляемая дата для пикера справа
   */
  valueB?: Value;
};

const RANGE_SPLITTER = ' - ';

export const DateRangePicker = forwardRef<
  HTMLInputElement,
  DateRangePickerProps
>(
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
      valueA: parentValueA,
      valueB: parentValueB,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
    },
    forwardedRef,
  ) => {
    const baseDate = useBaseDateInRange({ minDate, maxDate });
    const ref = useForwardedRef(forwardedRef);
    const [isActive, openPopper, closePopper] = useToggle({
      onActive: onOpen,
      onInactive: onClose,
    });

    const [maskedDate, setMaskedDate] = useState('');

    const setRangeMaskDate = useCallback(
      (dateA: Value, dateB: Value) => {
        const defaultString = mask?.replace(/\w/g, '_');
        const [dateAByInput, dateBByInput] = maskedDate.split(RANGE_SPLITTER);

        console.log(
          dateAByInput,
          dateBByInput,
          `${
            (dateA && formatDate(dateA, mask)) || dateAByInput || defaultString
          }${RANGE_SPLITTER}${
            (dateB && formatDate(dateB, mask)) || dateBByInput || defaultString
          }`,
        );

        return setMaskedDate(
          `${
            (dateA && formatDate(dateA, mask)) || dateAByInput || defaultString
          }${RANGE_SPLITTER}${
            (dateB && formatDate(dateB, mask)) || dateBByInput || defaultString
          }`,
        );
      },
      [mask, maskedDate],
    );
    const [selectedBaseDateA, selectedDateA, setSelectedDateA] =
      useSelectedBaseDate({ parentValue: parentValueA, minDate, maxDate });

    const [selectedBaseDateB, selectedDateB, setSelectedDateB] =
      useSelectedBaseDate({ parentValue: parentValueB, minDate, maxDate });

    const handleInputValue = useCallback(
      (value: string) => {
        console.log('handleInputValue ', value, value.length);

        if (value === '') {
          setSelectedDateA(null);
          setSelectedDateB(null);
          setMaskedDate('');

          return;
        }

        const [valueA, valueB] = value.split(RANGE_SPLITTER);

        const check = (
          _value: string,
          selected: Value,
          setDate: (date: Value) => void,
        ) => {
          const isString = typeof _value === 'string';

          const date = isString ? parseDate(_value, mask) : null;

          if (isDate(date) && !areDatesSame(date, selected)) {
            setDate(date);
          }
        };

        check(valueA, selectedDateA, setSelectedDateA);
        check(valueB, selectedDateB, setSelectedDateB);
      },
      [mask, selectedDateA, selectedDateB],
    );

    const handleParentValue = useCallback(
      (dateA: Value, dateB: Value) => {
        setRangeMaskDate(dateA, dateB);

        const check = (
          date: Value,
          selectedDate: Value,
          setDate: (date: Value) => void,
        ) => {
          if (areDatesSame(date, selectedDate)) {
            return;
          }

          if (isDate(date)) {
            setDate(date);
          } else {
            setDate(null);
          }
        };

        check(dateA, selectedDateA, setSelectedDateA);
        check(dateB, selectedDateB, setSelectedDateB);
      },
      [mask, selectedDateA, selectedDateB],
    );

    const handleDayPickA = (date: Date) => {
      console.log('day pick A');
      setRangeMaskDate(date, selectedDateB);
      setSelectedDateA(date);
      //console.log('a - ', date, 'b - ', selectedDateB);

      if (selectedDateB) {
        closePopper(undefined, 'selectOption');
      }
    };

    const handleDayPickB = (date: Date) => {
      console.log('day pick B');
      setRangeMaskDate(selectedDateA, date);
      setSelectedDateB(date);
      //console.log('a - ', selectedDateA, 'b - ', date);

      if (selectedDateA) {
        closePopper(undefined, 'selectOption');
      }
    };

    useEffect(() => {
      onChange?.(selectedDateA, selectedDateB);
    }, [selectedDateA, selectedDateB]);

    useEffect(
      () => handleParentValue(parentValueA, parentValueB),
      [parentValueA, parentValueB],
    );

    const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
      handleInputValue(e.target.value);
      onBlur?.(e);
    };

    const handleNativeChange = (e: ChangeEvent<HTMLInputElement>) =>
      handleInputValue(e.target.value);

    return (
      <DatePickerClickAwayListener onClickAway={closePopper}>
        <DatePickerInput
          {...inputProps}
          mask={`${mask}${RANGE_SPLITTER}${mask}`}
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
          <MinMaxDateContextProvider
            minDate={minDate}
            maxDate={selectedDateB || maxDate}
          >
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              selectedDate={selectedBaseDateA}
              onChange={handleDayPickA}
              date={selectedBaseDateA || baseDate}
            />
          </MinMaxDateContextProvider>
          <DateRangePickerSplitter />
          <MinMaxDateContextProvider
            minDate={selectedDateA || minDate}
            maxDate={maxDate}
          >
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              selectedDate={selectedBaseDateB}
              onChange={handleDayPickB}
              date={selectedBaseDateB || baseDate}
            />
          </MinMaxDateContextProvider>
        </DatePickerPopper>
      </DatePickerClickAwayListener>
    );
  },
);
