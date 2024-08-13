import {
  type ForwardedRef,
  type SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useForwardedRef, usePopover } from '../../hooks';
import {
  DEFAULT_DATE_MASK,
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  useMaskedValue,
  useSelectedBaseDate,
} from '../../DatePicker';
import { type DateRangePickerProps } from '../NewDateRangePicker';
import { type DateRangeInput } from '../types';

import { getBoundaryDate } from './utils';
import { useBaseRangeDates } from './hooks';

type UseLogicParams = DateRangePickerProps;

export const useLogic = (
  {
    value,
    minDate = DEFAULT_MIN_DATE,
    maxDate = DEFAULT_MAX_DATE,
    mask = DEFAULT_DATE_MASK,
    onChange,
    onOpen,
    onClose,
    onBlur,
  }: UseLogicParams,
  forwardedRef: ForwardedRef<HTMLDivElement>,
) => {
  const ref = useForwardedRef(forwardedRef);

  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

  const [hoveredDayDate, setHoveredDayDate] = useState<Date>();

  /**
   * Была ли выбрана start/end-дата после открытия поповера
   */
  const [isStartDateSelected, setIsStartDateSelected] = useState(false);
  const [isEndDateSelected, setIsEndDateSelected] = useState(false);

  const [activeInput, setActiveInput] = useState<DateRangeInput>();

  const [isPopoverHovered, setIsPopoverHovered] = useState(false);

  const { isOpen, actions } = usePopover();
  const { open, close } = actions;

  useEffect(() => {
    setIsStartDateSelected(false);
    setIsEndDateSelected(false);
  }, [isOpen]);

  const selectedStartBaseDate = useSelectedBaseDate({
    currentValue: value?.from,
    minDate,
    maxDate,
  });

  const selectedEndBaseDate = useSelectedBaseDate({
    currentValue: value?.to,
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

  const handleChangeStartDate = (startDateValue?: Date | null) =>
    onChange?.({ ...value, from: startDateValue });

  const handleChangeEndDate = (endDateValue?: Date | null) =>
    onChange?.({ ...value, to: endDateValue });

  const {
    maskedValue: startMaskedValue,
    onMaskedValueChange: onMaskedStartValueChange,
    onMaskedDateChange: onMaskedStartDateChange,
  } = useMaskedValue({
    currentValue: value?.from,
    mask,
    onChangeValue: handleChangeStartDate,
  });

  const {
    maskedValue: endMaskedValue,
    onMaskedValueChange: onMaskedEndValueChange,
    onMaskedDateChange: onMaskedEndDateChange,
  } = useMaskedValue({
    currentValue: value?.to,
    mask,
    onChangeValue: handleChangeEndDate,
  });

  const handleOpen = (event: SyntheticEvent) => {
    onOpen?.();
    open(event);
  };

  const handleClose = () => {
    onBlur?.();
    onClose?.();
    close();
  };

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

  return {
    ref,
    startDatePickerInputProps: {
      ref: startInputRef,
      value: startMaskedValue,
      onAccept: handleAcceptStart,
      onClick: handleClickStartInput,
    },
    endDatePickerInputProps: {
      ref: endInputRef,
      value: endMaskedValue,
      onAccept: handleAcceptEnd,
      onClick: handleClickEndInput,
    },
    popoverHoveredContextProviderProps: {
      popoverHovered: isPopoverHovered,
    },
    datePickerPopoverProps: {
      open: isOpen,
      anchorEl: ref.current,
      onMouseEnter: handlePopoverMouseEnter,
      onMouseLeave: handlePopoverMouseLeave,
      onClose: handleClose,
    },
    minMaxDateContextProviderProps: {
      minDate: isStartDateSelected
        ? getBoundaryDate({
            reserve: minDate,
            target: value?.from,
          })
        : minDate,
      maxDate: isEndDateSelected
        ? getBoundaryDate({
            reserve: maxDate,
            target: value?.to,
          })
        : maxDate,
    },
    startYearMonthDayPickerProps: {
      selectedDate: selectedStartBaseDate || selectedEndBaseDate,
      rangeDate: value?.to || value?.from,
      date: startBaseDate,
      hoveredDayDate: hoveredDayDate,
      onDayHover: setHoveredDayDate,
      onChange: handleDayPick,
    },
    endYearMonthDayPickerProps: {
      selectedDate: selectedStartBaseDate || selectedEndBaseDate,
      rangeDate: value?.to || value?.from,
      date: endBaseDate,
      hoveredDayDate: hoveredDayDate,
      onDayHover: setHoveredDayDate,
      onChange: handleDayPick,
    },
  };
};
