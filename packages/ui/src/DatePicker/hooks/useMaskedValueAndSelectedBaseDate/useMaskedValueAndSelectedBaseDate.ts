import { ChangeEvent, SyntheticEvent } from 'react';

import { useMaskedValue } from '../useMaskedValue';
import { useSelectedBaseDate } from '../useSelectedBaseDate';
import { CloseEventReason } from '../../../types';
import { MinMaxDate, PickerProps } from '../../types';

type UseMaskedValueAndSelectedBaseDateOptions = MinMaxDate & {
  mask: string;
  onChange?: (date?: Date) => void;
  currentValue?: Date;
  closePopper: (
    event?: SyntheticEvent<Element, Event> | Event,
    reason?: CloseEventReason,
  ) => void;
  baseDate: Date;
};

type UseMaskedValueAndSelectedBaseDateReturn = {
  /**
   * @description пропсы необходимые для работы пикеров
   */
  pickerProps: PickerProps;
  /**
   * @description пропсы необходимые для работы инпутов
   */
  inputProps: {
    /**
     * @description строковое значение даты для инпута с маской
     */
    value: string;
    /**
     * @description колбэк вызов на изменение значения в инпуте
     */
    onNativeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

/**
 * @description хук объединяющий повторяющуюся логику в работе DatePicker и RangeDatePicker
 */
export const useMaskedValueAndSelectedBaseDate = ({
  onChange,
  mask,
  currentValue,
  closePopper,
  minDate,
  maxDate,
  baseDate,
}: UseMaskedValueAndSelectedBaseDateOptions): UseMaskedValueAndSelectedBaseDateReturn => {
  const { maskedValue, onChangeMaskedValue, onChangeMaskedDate } =
    useMaskedValue({
      currentValue,
      mask,
      onChangeValue: onChange,
    });
  const selectedBaseDate = useSelectedBaseDate({
    currentValue,
    minDate,
    maxDate,
  });

  const handleDayPick = (date: Date) => {
    onChangeMaskedDate(date);
    closePopper(undefined, 'selectOption');
  };

  const handleChangeMaskInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeMaskedValue(e.target.value);
  };

  return {
    inputProps: {
      value: maskedValue,
      onNativeChange: handleChangeMaskInput,
    },
    pickerProps: {
      selectedDate: selectedBaseDate,
      onChange: handleDayPick,
      date: selectedBaseDate || baseDate,
    },
  };
};
