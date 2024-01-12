import {
  type SyntheticEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { type IMask } from 'react-imask';

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
import { useMaskedValue, useSelectedBaseDate } from '../DatePicker/hooks';
import { PopoverHoveredContextProvider } from '../DatePicker/PopoverHoveredContext';

import { DateRangePickerSplitter } from './styles';
import { getBoundaryDate } from './utils';
import { type DateRangeInput } from './types';
import { useBaseRangeDates } from './hooks';

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
    const startInputRef = useRef<HTMLInputElement>(null);
    const endInputRef = useRef<HTMLInputElement>(null);

    const { isOpenPopover, openPopover, closePopover } = useInputPopover({
      ref,
      onOpen,
      onClose,
      onBlur,
    });

    const [hoveredDayDate, setHoveredDayDate] = useState<Date>();

    /**
     * Была ли выбрана start/end-дата после открытия поповера
     */
    const [isStartDateSelected, setIsStartDateSelected] = useState(false);
    const [isEndDateSelected, setIsEndDateSelected] = useState(false);

    const [activeInput, setActiveInput] = useState<DateRangeInput>();

    const [isPopoverHovered, setIsPopoverHovered] = useState(false);

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

    const { startBaseDate, endBaseDate } = useBaseRangeDates({
      minDate,
      maxDate,
      shouldReturnPrevValues: isOpenPopover,
      selectedStartDate: selectedStartBaseDate,
      selectedEndDate: selectedEndBaseDate,
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

    const handleOpenPopover = (e: SyntheticEvent) => {
      const isStartDate = e.target === startInputRef.current;
      const isEndDate = e.target === endInputRef.current;

      if (isStartDate) {
        setActiveInput('startDate');
      }

      if (isEndDate) {
        setActiveInput('endDate');
      }

      openPopover();
    };

    const pickStartDate = (pickedDate: Date) => {
      onMaskedStartDateChange(pickedDate);
      setIsStartDateSelected(true);
      setActiveInput('endDate');
      endInputRef.current?.focus();

      if (isEndDateSelected) {
        closePopover(undefined, 'selectOption');
      }
    };

    const pickEndDate = (pickedDate: Date) => {
      onMaskedEndDateChange(pickedDate);
      setIsEndDateSelected(true);
      setActiveInput('startDate');
      startInputRef.current?.focus();

      if (isStartDateSelected) {
        closePopover(undefined, 'selectOption');
      }
    };

    const handleDayPick = (pickedDate: Date) => {
      if (activeInput === 'startDate') {
        pickStartDate(pickedDate);
      }

      if (activeInput === 'endDate') {
        pickEndDate(pickedDate);
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

    const handlePopoverMouseEnter = () => setIsPopoverHovered(true);

    const handlePopoverMouseLeave = () => setIsPopoverHovered(false);

    useEffect(() => {
      setIsStartDateSelected(false);
      setIsEndDateSelected(false);
    }, [isOpenPopover]);

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
          onFocus={handleOpenPopover}
          onClick={handleOpenPopover}
        />
        <DatePickerInput
          {...endDateProps.inputProps}
          ref={endInputRef}
          size={size}
          mask={mask}
          value={endMaskedValue}
          disabled={disabled}
          onAccept={handleAcceptEnd}
          onFocus={handleOpenPopover}
          onClick={handleOpenPopover}
        />
        <PopoverHoveredContextProvider popoverHovered={isPopoverHovered}>
          <DatePickerPopover
            open={isOpenPopover}
            anchorEl={ref?.current}
            placement="bottom"
            onMouseEnter={handlePopoverMouseEnter}
            onMouseLeave={handlePopoverMouseLeave}
          >
            <MinMaxDateContextProvider
              minDate={
                isStartDateSelected
                  ? getBoundaryDate({
                      reserve: minDate,
                      target: startDateProps.value,
                    })
                  : minDate
              }
              maxDate={
                isEndDateSelected
                  ? getBoundaryDate({
                      reserve: maxDate,
                      target: endDateProps.value,
                    })
                  : maxDate
              }
            >
              <YearMonthDayPicker
                isMondayFirst={isMondayFirst}
                selectedDate={selectedStartBaseDate || selectedEndBaseDate}
                rangeDate={endDateProps.value || startDateProps.value}
                date={startBaseDate}
                onChange={handleDayPick}
                isRange
                hoveredDayDate={hoveredDayDate}
                onDayHover={setHoveredDayDate}
              />
              <DateRangePickerSplitter />
              <YearMonthDayPicker
                isMondayFirst={isMondayFirst}
                selectedDate={selectedStartBaseDate || selectedEndBaseDate}
                rangeDate={endDateProps.value || startDateProps.value}
                date={endBaseDate}
                onChange={handleDayPick}
                isRange
                hoveredDayDate={hoveredDayDate}
                onDayHover={setHoveredDayDate}
              />
            </MinMaxDateContextProvider>
          </DatePickerPopover>
        </PopoverHoveredContextProvider>
      </Grid>
    );
  },
);
