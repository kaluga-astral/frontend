import { forwardRef } from 'react';

import { Grid, GridProps } from '../Grid';
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from '../DatePicker/MinMaxDateContext';
import { useForwardedRef, useInputPopperHooks } from '../hooks';
import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { DatePickerPopper } from '../DatePicker/DatePickerPopper';
import { YearMonthDayPicker } from '../DatePicker/YearMonthDayPicker';
import { DatePickerProps } from '../DatePicker';
import { DEFAULT_DATE_MASK } from '../DatePicker/constants/defaultDateMask';
import { useMaskedValueAndSelectedBaseDate } from '../DatePicker/hooks/useMaskedValueAndSelectedBaseDate';
import { addDays, isDate } from '../utils/date';

import { DateRangePickerSplitter } from './styles';

const DEFAULT_SPACING = 2;

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
  /**
   * @description общий обработчик для обоих инпутов, вызовется только если фокус сработает вне общего дива
   */
  onBlur?: () => void;
};

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      itemA = {},
      itemB = {},
      onOpen,
      onClose,
      onBlur,
      mask = DEFAULT_DATE_MASK,
      isMondayFirst,
      disabled,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
      spacing = DEFAULT_SPACING,
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const { isOpenPopper, handleActivate, closePopper } = useInputPopperHooks({
      ref,
      onOpen,
      onClose,
      onBlur,
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
    });

    const optionsB = useMaskedValueAndSelectedBaseDate({
      maxDate,
      minDate,
      mask,
      onDatePick: handleDayPick,
      currentValue: itemB?.value,
      onChange: itemB?.onChange,
      monthOffset: 1,
    });

    return (
      <Grid container spacing={spacing} ref={ref} autoFlow="column">
        <DatePickerInput
          {...itemA.inputProps}
          mask={mask}
          {...optionsA.inputProps}
          disabled={disabled}
          onFocus={handleActivate}
          onClick={handleActivate}
        />
        <DatePickerInput
          {...itemB.inputProps}
          mask={mask}
          {...optionsB.inputProps}
          disabled={disabled}
          onFocus={handleActivate}
          onClick={handleActivate}
        />
        <DatePickerPopper
          open={isOpenPopper}
          anchorEl={ref?.current}
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
