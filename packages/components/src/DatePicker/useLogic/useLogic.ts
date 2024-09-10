import { type Ref, type SyntheticEvent } from 'react';

import { type DatePickerProps } from '../DatePicker';
import { useForwardedRef, usePopover, useViewportType } from '../../hooks';
import { useDatePickerOptions } from '../hooks';
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

  const { isMobile } = useViewportType();

  const isTitleShow = isMobile && typeof label === 'string';

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

  const isDisabledButton = !Boolean(value);

  const datePickerProps = {
    open: isOpen,
    anchorEl: ref.current,
    onClose: handleClose,
    title: isTitleShow ? label : undefined,
  };

  return {
    handleOpen,
    handleClose,
    isDisabledButton,
    onAccept,
    pickerProps,
    calculatedInputProps,
    ref,
    isMobile,
    datePickerProps,
  };
};
