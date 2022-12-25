import { forwardRef } from 'react';

import { Grid, GridProps } from '../Grid';
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from '../DatePicker/MinMaxDateContext';
import { useClickAwayEffect, useForwardedRef, useToggle } from '../hooks';
import { useBaseDateInRange } from '../DatePicker/hooks';
import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { DatePickerPopper, OffsetTuple } from '../DatePicker/DatePickerPopper';
import { YearMonthDayPicker } from '../DatePicker/YearMonthDayPicker';
import { DatePickerProps } from '../DatePicker';
import { DEFAULT_DATE_MASK } from '../DatePicker/constants/defaultDateMask';
import { useMaskedValueAndSelectedBaseDate } from '../DatePicker/hooks/useMaskedValueAndSelectedBaseDate';
import { addDays, addMonths, isDate } from '../utils/date';

import { DateRangePickerSplitter } from './styles';

const DEFAULT_SPACING = 2;

const POPPER_OFFSET: OffsetTuple = [
  0, /**
   * @description минус 12, потому что мы используем в качестве рефа грид,
   * в котором создают лишние отступы плейсхолдеры для ошибок валидации
   */ -12,
];

type DateItemProps = Pick<DatePickerProps, 'onChange' | 'value' | 'inputProps'>;

export type DateRangePickerProps = Omit<
  DatePickerProps,
  'onChange' | 'value' | 'onBlur' | 'inputProps'
> & {
  /**
   * @description специфичные пропсы для управления датой слева
   */
  itemA?: DateItemProps;
  /**
   * @description специфичные пропсы для управления датой справа
   */
  itemB?: DateItemProps;
  /**
   * @description отступ между инпутами дат
   * @default 2
   */
  spacing?: GridProps['spacing'];
};

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      itemA = {},
      itemB = {},
      onOpen,
      onClose,
      mask = DEFAULT_DATE_MASK,
      isMondayFirst,
      disabled,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
      spacing = DEFAULT_SPACING,
    },
    forwardedRef,
  ) => {
    const baseDate = useBaseDateInRange({ minDate, maxDate });
    const ref = useForwardedRef(forwardedRef);
    const [isOpenPopper, openPopper, closePopper] = useToggle({
      onActive: onOpen,
      onInactive: onClose,
    });

    useClickAwayEffect({
      ref,
      onClickAway: closePopper,
      isActive: isOpenPopper,
    });

    const handleDayPick = () => {
      if (itemA?.value || itemB?.value) {
        closePopper(undefined, 'selectOption');
      }
    };

    const optionsA = useMaskedValueAndSelectedBaseDate({
      maxDate,
      minDate,
      mask,
      onDatePick: handleDayPick,
      currentValue: itemA?.value,
      onChange: itemA?.onChange,
      baseDate,
    });

    const optionsB = useMaskedValueAndSelectedBaseDate({
      maxDate,
      minDate,
      mask,
      onDatePick: handleDayPick,
      currentValue: itemB?.value,
      onChange: itemB?.onChange,
      baseDate: addMonths(baseDate, 1),
    });

    return (
      <Grid container spacing={spacing} ref={ref} autoFlow="column">
        <DatePickerInput
          {...itemA.inputProps}
          mask={mask}
          {...optionsA.inputProps}
          disabled={disabled}
          onFocus={openPopper}
        />
        <DatePickerInput
          {...itemB.inputProps}
          mask={mask}
          {...optionsB.inputProps}
          disabled={disabled}
          onFocus={openPopper}
        />
        <DatePickerPopper
          open={isOpenPopper}
          onClose={closePopper}
          anchorEl={ref?.current}
          offset={POPPER_OFFSET}
          placement="bottom"
        >
          <MinMaxDateContextProvider
            minDate={minDate}
            maxDate={isDate(itemB.value) ? addDays(itemB.value, -1) : maxDate}
          >
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              {...optionsA.pickerProps}
              rangeDate={itemB.value}
            />
          </MinMaxDateContextProvider>
          <DateRangePickerSplitter />
          <MinMaxDateContextProvider
            minDate={isDate(itemA.value) ? addDays(itemA.value, 1) : minDate}
            maxDate={maxDate}
          >
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              {...optionsB.pickerProps}
              rangeDate={itemA.value}
            />
          </MinMaxDateContextProvider>
        </DatePickerPopper>
      </Grid>
    );
  },
);
