import { forwardRef, useEffect, useRef, useState } from 'react';
import { IMask } from 'react-imask';

import { Grid, type GridProps } from '../Grid';
import {
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  MinMaxDateContextProvider,
} from '../DatePicker/MinMaxDateContext';
import { useForwardedRef, useInputPopover } from '../hooks';
import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { DatePickerPopover } from '../DatePicker/DatePickerPopover';
import { YearMonthDayPicker } from '../DatePicker/YearMonthDayPicker';
import { type DatePickerProps } from '../DatePicker';
import { DEFAULT_DATE_MASK } from '../DatePicker/constants/defaultDateMask';
import {
  useBaseDateInRange,
  useMaskedValue,
  useSelectedBaseDate,
} from '../DatePicker/hooks';

import { DateRangePickerSplitter } from './styles';
import { getBoundaryDate } from './utils';

const DEFAULT_SPACING = 1;

export type DateItemProps = Pick<
  DatePickerProps,
  'onChange' | 'value' | 'inputProps'
>;

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
  /**
   * @description Отображать один DatePicker
   */
  isSinglePicker?: boolean;
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
      isSinglePicker,
    },
    forwardedRef,
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const startInputRef = useRef<HTMLInputElement>(null);
    const endInputRef = useRef<HTMLInputElement>(null);

    const { isOpenPopover, openPopover, closePopover } = useInputPopover({
      ref,
      onOpen,
      onClose,
      onBlur,
    });

    /**
     * Была ли выбрана start-дата после открытия поповера
     */
    const [isSelectedStartDate, setIsSelectedStartDate] = useState(false);

    const startBaseDate = useBaseDateInRange({
      minDate,
      maxDate,
      monthOffset: 0,
    });

    const endBaseDate = useBaseDateInRange({
      minDate,
      maxDate,
      // единица здесь означает, что второй пикер будет по умолчанию отличаться от первого на 1 месяц
      monthOffset: 1,
    });

    const selectedStartBaseDate = useSelectedBaseDate({
      currentValue: startDateProps?.value,
      minDate,
      maxDate,
    });

    const selectedEndBaseDate = useSelectedBaseDate({
      currentValue: endDateProps?.value,
      minDate,
      maxDate,
    });

    const {
      maskedValue: startMaskedValue,
      onMaskedValueChange: onMaskedStartValueChange,
      onMaskedDateChange: onMaskedStartDateChange,
    } = useMaskedValue({
      currentValue: startDateProps?.value,
      mask,
      onChangeValue: startDateProps?.onChange,
    });

    const {
      maskedValue: endMaskedValue,
      onMaskedValueChange: onMaskedEndValueChange,
      onMaskedDateChange: onMaskedEndDateChange,
    } = useMaskedValue({
      currentValue: endDateProps?.value,
      mask,
      onChangeValue: endDateProps?.onChange,
    });

    const handleDayPick = (date: Date) => {
      if (isSelectedStartDate) {
        onMaskedEndDateChange(date);
        closePopover(undefined, 'selectOption');
      } else {
        // Если первая дата больше второй даты, устанавливаем вторую дату равной первой
        if (selectedEndBaseDate && date > selectedEndBaseDate) {
          onMaskedEndDateChange(date);
        }

        onMaskedStartDateChange(date);
        setIsSelectedStartDate(true);
      }
    };

    const handleAcceptStart = (
      _: string,
      maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
    ) => {
      onMaskedStartValueChange(maskRef.value);
    };

    const handleAcceptEnd = (
      _: string,
      maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
    ) => {
      onMaskedEndValueChange(maskRef.value);
    };

    useEffect(() => {
      setIsSelectedStartDate(false);
    }, [isOpenPopover]);

    useEffect(() => {
      if (!isOpenPopover) {
        return;
      }

      if (isSelectedStartDate) {
        endInputRef.current?.focus();
      } else {
        startInputRef.current?.focus();
      }
    }, [isSelectedStartDate, isOpenPopover]);

    return (
      <Grid container spacing={spacing} ref={ref} direction="column">
        <DatePickerInput
          {...startDateProps.inputProps}
          ref={startInputRef}
          mask={mask}
          size={size}
          value={startMaskedValue}
          disabled={disabled}
          onAccept={handleAcceptStart}
          onFocus={openPopover}
          onClick={openPopover}
        />
        <DatePickerInput
          {...endDateProps.inputProps}
          ref={endInputRef}
          size={size}
          mask={mask}
          value={endMaskedValue}
          disabled={disabled}
          onAccept={handleAcceptEnd}
          onFocus={openPopover}
          onClick={openPopover}
        />
        <DatePickerPopover
          open={isOpenPopover}
          anchorEl={ref?.current}
          placement="bottom"
        >
          <MinMaxDateContextProvider
            minDate={
              isSelectedStartDate
                ? getBoundaryDate({
                    reserve: minDate,
                    target: startDateProps.value,
                  })
                : minDate
            }
            maxDate={maxDate}
          >
            <YearMonthDayPicker
              isMondayFirst={isMondayFirst}
              selectedDate={selectedStartBaseDate}
              rangeDate={endDateProps.value}
              date={selectedStartBaseDate || startBaseDate}
              onChange={handleDayPick}
              isRange
            />
            {!isSinglePicker && (
              <>
                <DateRangePickerSplitter />
                <YearMonthDayPicker
                  isMondayFirst={isMondayFirst}
                  selectedDate={selectedStartBaseDate}
                  rangeDate={endDateProps.value}
                  date={selectedEndBaseDate || endBaseDate}
                  onChange={handleDayPick}
                  isRange
                />
              </>
            )}
          </MinMaxDateContextProvider>
        </DatePickerPopover>
      </Grid>
    );
  },
);
