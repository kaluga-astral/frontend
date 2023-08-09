import { forwardRef } from 'react';

import { Grid, GridProps } from '../Grid';
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from '../DatePicker/MinMaxDateContext';
import { useForwardedRef, useInputPopover } from '../hooks';
import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { DatePickerPopover } from '../DatePicker/DatePickerPopover';
import { YearMonthDayPicker } from '../DatePicker/YearMonthDayPicker';
import { DatePickerProps } from '../DatePicker';
import { DEFAULT_DATE_MASK } from '../DatePicker/constants/defaultDateMask';
import { useDatePickerOptions } from '../DatePicker/hooks';

import { DateRangePickerSplitter } from './styles';
import { getBoundaryDate } from './utils';

const DEFAULT_SPACING = 2;

type DateItemProps = Pick<DatePickerProps, 'onChange' | 'value' | 'inputProps'>;

export type DateRangePickerProps = Omit<
  DatePickerProps,
  'onChange' | 'value' | 'onBlur' | 'inputProps'
> & {
  /**
   * @description специфичные пропсы для управления датой слева
   */
  startDateProps?: DateItemProps;
  /**
   * @description специфичные пропсы для управления датой справа
   */
  endDateProps?: DateItemProps;
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
      startDateProps = {},
      endDateProps = {},
      onOpen,
      onClose,
      onBlur,
      mask = DEFAULT_DATE_MASK,
      isMondayFirst,
      disabled,
      minDate = DEFAULT_MIN_DATE,
      maxDate = DEFAULT_MAX_DATE,
      spacing = DEFAULT_SPACING,
      size,
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const { isOpenPopover, openPopover, closePopover } = useInputPopover({
      ref,
      onOpen,
      onClose,
      onBlur,
    });

    const handleDayPick = () => {
      if (startDateProps?.value || endDateProps?.value) {
        closePopover(undefined, 'selectOption');
      }
    };

    const startDateOptions = useDatePickerOptions({
      maxDate,
      minDate,
      mask,
      onDatePick: handleDayPick,
      currentValue: startDateProps?.value,
      onChange: startDateProps?.onChange,
    });

    const endDateOptions = useDatePickerOptions({
      maxDate,
      minDate,
      mask,
      onDatePick: handleDayPick,
      currentValue: endDateProps?.value,
      onChange: endDateProps?.onChange,
      // единица здесь означает, что второй пикер будет по умолчанию отличаться от первого на 1 месяц
      monthOffset: 1,
    });

    return (
      <Grid container spacing={spacing} ref={ref} direction="column">
        <DatePickerInput
          {...startDateProps.inputProps}
          mask={mask}
          size={size}
          {...startDateOptions.inputProps}
          disabled={disabled}
          onFocus={openPopover}
          onClick={openPopover}
        />
        <DatePickerInput
          {...endDateProps.inputProps}
          size={size}
          mask={mask}
          {...endDateOptions.inputProps}
          disabled={disabled}
          onFocus={openPopover}
          onClick={openPopover}
        />
        <DatePickerPopover
          open={isOpenPopover}
          anchorEl={ref?.current}
          placement="bottom"
        >
          <MinMaxDateContextProvider
            minDate={minDate}
            // если выбрана дата во втором пикере,
            // то она становится значением максимальной даты для первого пикера,
            // иначе используем изначальную максимальную дату
            // смещение в -1 не позволит выбрать пользователю одну и туже дату в обоих пикерах
            maxDate={getBoundaryDate({
              reserve: maxDate,
              target: endDateProps.value,
              offset: -1,
            })}
          >
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              {...startDateOptions.pickerProps}
              rangeDate={endDateProps.value}
            />
          </MinMaxDateContextProvider>
          <DateRangePickerSplitter />
          <MinMaxDateContextProvider
            // если выбрана дата в первом пикере,
            // то она становится значением минимальной даты для второго пикера,
            // иначе используем изначальную минимальную дату
            // смещение в 1 не позволит выбрать пользователю одну и туже дату в обоих пикерах
            minDate={getBoundaryDate({
              reserve: minDate,
              target: startDateProps.value,
              offset: 1,
            })}
            maxDate={maxDate}
          >
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              {...endDateOptions.pickerProps}
              rangeDate={startDateProps.value}
            />
          </MinMaxDateContextProvider>
        </DatePickerPopover>
      </Grid>
    );
  },
);
