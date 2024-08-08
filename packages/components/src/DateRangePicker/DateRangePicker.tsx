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
import { useForwardedRef, usePopover } from '../hooks';
import { DatePickerInput } from '../DatePicker/DatePickerInput';
import { DatePickerPopover } from '../DatePicker/DatePickerPopover';
import { YearMonthDayPicker } from '../DatePicker/YearMonthDayPicker';
import { type DatePickerProps } from '../DatePicker';
import { DEFAULT_DATE_MASK } from '../DatePicker/constants';
import { useMaskedValue, useSelectedBaseDate } from '../DatePicker/hooks';
import { PopoverHoveredContextProvider } from '../DatePicker/PopoverHoveredContext';

import { PickerSplitter } from './styles';
import { getBoundaryDate } from './utils';
import { type DateRangeInput } from './types';
import { useBaseRangeDates } from './hooks';

const DEFAULT_SPACING = 1;

export type DateItemProps = Pick<
  DatePickerProps,
  'onChange' | 'value' | 'inputProps' | 'startAdornment'
>;

export type DateRangePickerProps = Omit<
  DatePickerProps,
  'onChange' | 'value' | 'inputProps'
> & {
  /**
   * Специфичные пропсы для управления датой слева
   */
  startDateProps?: DateItemProps;

  /**
   * Специфичные пропсы для управления датой справа
   */
  endDateProps?: DateItemProps;

  /**
   * Отступ между инпутами дат
   * @default 2
   */
  spacing?: GridProps['spacing'];
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

    const [hoveredDayDate, setHoveredDayDate] = useState<Date>();

    const { isOpen, actions } = usePopover();
    const { open, close } = actions;

    const handleOpen = (event: SyntheticEvent) => {
      onOpen?.();
      open(event);
    };

    const handleClose = () => {
      onBlur?.();
      onClose?.();
      close();
    };

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
      shouldReturnPrevValues: isOpen,
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

    const handleClickStartInput = (e: SyntheticEvent) => {
      setActiveInput('startDate');

      if (!isOpen) {
        handleOpen(e);
      }
    };

    const handleClickEndInput = (e: SyntheticEvent) => {
      setActiveInput('endDate');

      if (!isOpen) {
        handleOpen(e);
      }
    };

    const pickStartDate = (pickedDate: Date) => {
      onMaskedStartDateChange(pickedDate);
      setIsStartDateSelected(true);
      setActiveInput('endDate');
      endInputRef.current?.focus();

      if (isEndDateSelected) {
        handleClose();
      }
    };

    const pickEndDate = (pickedDate: Date) => {
      onMaskedEndDateChange(pickedDate);
      setIsEndDateSelected(true);
      setActiveInput('startDate');
      startInputRef.current?.focus();

      if (isStartDateSelected) {
        handleClose();
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
    }, [isOpen]);

    return (
      <Grid container spacing={spacing} ref={ref} direction="column">
        <DatePickerInput
          {...startDateProps.inputProps}
          ref={startInputRef}
          startAdornment={startDateProps.startAdornment}
          mask={mask}
          size={size}
          value={startMaskedValue}
          disabled={disabled}
          onAccept={handleAcceptStart}
          onClick={handleClickStartInput}
        />
        <DatePickerInput
          {...endDateProps.inputProps}
          startAdornment={endDateProps.startAdornment}
          ref={endInputRef}
          size={size}
          mask={mask}
          value={endMaskedValue}
          disabled={disabled}
          onAccept={handleAcceptEnd}
          onClick={handleClickEndInput}
        />
        <PopoverHoveredContextProvider popoverHovered={isPopoverHovered}>
          <DatePickerPopover
            open={isOpen}
            anchorEl={ref.current}
            onMouseEnter={handlePopoverMouseEnter}
            onMouseLeave={handlePopoverMouseLeave}
            onClose={handleClose}
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
              <PickerSplitter />
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
