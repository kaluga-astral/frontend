import { ChangeEvent, forwardRef } from 'react';

import { Grid } from '../Grid';
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from '../DatePicker/MinMaxDateContext';
import { useClickAwayEffect, useForwardedRef, useToggle } from '../hooks';
import {
  useBaseDateInRange,
  useMaskedValue,
  useSelectedBaseDate,
} from '../DatePicker/hooks';
import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { DatePickerPopper } from '../DatePicker/DatePickerPopper';
import { YearMonthDayPicker } from '../DatePicker/YearMonthDayPicker';
import { DatePickerProps } from '../DatePicker';
import { DEFAULT_DATE_MASK } from '../DatePicker/constants/defaultDateMask';

import { DateRangePickerSplitter } from './styles';

export type DateRangePickerProps = Omit<
  DatePickerProps,
  'onChange' | 'value'
> & {
  /**
   * @description управляемая дата для пикера слева
   */
  valueA?: Date;
  /**
   * @description управляемая дата для пикера справа
   */
  valueB?: Date;
  /**
   * @description Обработчик изменения состояния первой даты.
   * Передает только Date object, если дата невалидна, то будет Invalid date
   */
  onChangeA?: (value?: Date) => void;
  /**
   * @description Обработчик изменения состояния второй даты.
   * Передает только Date object, если дата невалидна, то будет Invalid date
   */
  onChangeB?: (value?: Date) => void;
};

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      onChangeA,
      onChangeB,
      onOpen,
      onBlur,
      onClose,
      mask = DEFAULT_DATE_MASK,
      isMondayFirst,
      inputProps,
      disabled,
      valueA,
      valueB,
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

    useClickAwayEffect({ ref, onClickAway: closePopper, isActive });

    const {
      maskedValue: maskedValueA,
      onChangeMaskedValue: onChangeMaskedValueA,
      onChangeMaskedDate: onChangeMaskedDateA,
    } = useMaskedValue({
      currentValue: valueA,
      mask,
      onChangeValue: onChangeA,
    });

    const {
      maskedValue: maskedValueB,
      onChangeMaskedValue: onChangeMaskedValueB,
      onChangeMaskedDate: onChangeMaskedDateB,
    } = useMaskedValue({
      currentValue: valueB,
      mask,
      onChangeValue: onChangeB,
    });

    const selectedBaseDateA = useSelectedBaseDate({
      currentValue: valueA,
      minDate,
      maxDate,
    });

    const selectedBaseDateB = useSelectedBaseDate({
      currentValue: valueB,
      minDate,
      maxDate,
    });

    const handleDayPickA = (date: Date) => {
      onChangeMaskedDateA(date);
      closePopper(undefined, 'selectOption');
    };

    const handleDayPickB = (date: Date) => {
      onChangeMaskedDateB(date);
      closePopper(undefined, 'selectOption');
    };

    const handleChangeMaskInputA = (e: ChangeEvent<HTMLInputElement>) =>
      onChangeMaskedValueA(e.target.value);

    const handleChangeMaskInputB = (e: ChangeEvent<HTMLInputElement>) =>
      onChangeMaskedValueB(e.target.value);

    return (
      <>
        <Grid container spacing={2} ref={ref}>
          <DatePickerInput
            {...inputProps}
            mask={mask}
            onNativeChange={handleChangeMaskInputA}
            disabled={disabled}
            value={maskedValueA}
            onFocus={openPopper}
          />
          <DatePickerInput
            {...inputProps}
            mask={mask}
            onNativeChange={handleChangeMaskInputB}
            disabled={disabled}
            value={maskedValueB}
            onFocus={openPopper}
          />
        </Grid>
        <DatePickerPopper
          open={isActive}
          onClose={closePopper}
          anchorEl={ref?.current}
        >
          <MinMaxDateContextProvider
            minDate={minDate}
            maxDate={valueB || maxDate}
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
            minDate={valueA || minDate}
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
      </>
    );
  },
);
