import { type Ref, type SyntheticEvent, useState } from 'react';

import { type DatePickerProps } from '../DatePicker';
import { useForwardedRef, usePopover, useViewportType } from '../../hooks';
import { useDatePickerOptions, useMaskedValue } from '../hooks';
import { DEFAULT_DATE_MASK } from '../constants';
import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from '../MinMaxDateContext';

type UseLogicParams = DatePickerProps & {
  forwardedRef: Ref<HTMLDivElement>;
};

export const useLogic = ({
  label,
  value,
  onOpen,
  onClose,
  onBlur,
  maxDate = DEFAULT_MAX_DATE,
  minDate = DEFAULT_MIN_DATE,
  mask = DEFAULT_DATE_MASK,
  onChange,
  forwardedRef,
}: UseLogicParams) => {
  const ref = useForwardedRef<HTMLDivElement>(forwardedRef);

  const [selectDate, setSelectDate] = useState(value);

  const { maskedValue } = useMaskedValue({
    currentValue: selectDate,
    mask,
    onChangeValue: onChange,
  });

  const { isMobile } = useViewportType();

  const isTitleShow = isMobile && typeof label === 'string';

  const { isOpen, actions } = usePopover();
  const { open, close } = actions;

  const handleOpen = (event: SyntheticEvent) => {
    onOpen?.();
    open(event);
  };

  const handleClose = () => {
    if (isMobile && value !== selectDate) {
      onChange?.(selectDate);
    }

    onBlur?.();
    onClose?.();
    close();
  };

  const handleDayPick = () => {
    if (!isMobile) {
      handleClose();
    }
  };

  const {
    onAccept,
    inputProps: calculatedInputProps,
    pickerProps,
  } = useDatePickerOptions({
    maxDate,
    minDate,
    mask,
    onDatePick: handleDayPick,
    currentValue: value,
    onChange,
  });

  const handleConfirm = () => {
    setSelectDate(value);
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
    disabled: !Boolean(value),
    children: !Boolean(value)
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
