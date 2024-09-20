import { type Ref, type SyntheticEvent, useState } from 'react';

import { useForwardedRef, usePopover, useViewportType } from '../../hooks';
import { useDatePickerOptions, useMaskedValue } from '../hooks';
import { DEFAULT_DATE_MASK } from '../constants';
import { type DatePickerProps } from '../DatePicker';
import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from '../MinMaxDateContext';

type UseLogicParams = DatePickerProps & {
  forwardedRef: Ref<HTMLDivElement>;
};

export const useLogic = ({
  label,
  value,
  maxDate = DEFAULT_MAX_DATE,
  minDate = DEFAULT_MIN_DATE,
  mask = DEFAULT_DATE_MASK,
  onOpen,
  onClose,
  onBlur,
  onChange,
  forwardedRef,
}: UseLogicParams) => {
  const ref = useForwardedRef<HTMLDivElement>(forwardedRef);

  const [selectedDate, setSelectedDate] = useState(value);

  const { isOpen, actions } = usePopover();
  const { open, close } = actions;

  const { isMobile } = useViewportType();

  const { maskedValue } = useMaskedValue({
    currentValue: value,
    mask,
    onChangeValue: onChange,
  });

  const isTitleShow = isMobile && typeof label === 'string';

  const handleOpen = (event: SyntheticEvent) => {
    onOpen?.();
    open(event);
  };

  const handleClose = () => {
    onBlur?.();
    onClose?.();
    close();
  };

  const handleDayPick = (date?: Date | null) => {
    if (isMobile) {
      setSelectedDate(date);

      return;
    }

    handleClose();
  };

  const handleChange = (date?: Date | null) => {
    if (!isMobile) {
      onChange?.(date);
    }
  };

  const {
    onAccept,
    inputProps: calculatedInputProps,
    pickerProps,
  } = useDatePickerOptions({
    currentValue: value,
    maxDate,
    minDate,
    mask,
    onDatePick: handleDayPick,
    onChange: handleChange,
  });

  const handleConfirm = () => {
    onChange?.(selectedDate);
    handleClose();
  };

  const datePickerProps = {
    open: isOpen,
    anchorEl: ref.current,
    onClose: handleClose,
    title: isTitleShow ? label : undefined,
  };

  const DatePickerInputProps = {
    value: isMobile ? maskedValue : calculatedInputProps.value,
  };

  const confirmButtonProps = {
    onClick: handleConfirm,
    disabled: !Boolean(selectedDate),
    children: !Boolean(selectedDate)
      ? 'Выберите дату'
      : `Выбрать ${calculatedInputProps.value}`,
  };

  return {
    handleOpen,
    handleClose,
    confirmButtonProps,
    DatePickerInputProps,
    onAccept,
    pickerProps,
    ref,
    isMobile,
    datePickerProps,
  };
};
