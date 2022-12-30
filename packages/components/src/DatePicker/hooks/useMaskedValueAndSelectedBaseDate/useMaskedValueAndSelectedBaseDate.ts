import { ChangeEvent } from 'react';

import { useMaskedValue } from '../useMaskedValue';
import { useSelectedBaseDate } from '../useSelectedBaseDate';
import { MinMaxDate, PickerProps } from '../../types';

type UseMaskedValueAndSelectedBaseDateOptions = MinMaxDate & {
  mask: string;
  onChange?: (date?: Date) => void;
  currentValue?: Date;
  baseDate: Date;
  /**
   * @description колбэк на выбор даты в пикере
   */
  onDatePick: () => void;
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
  minDate,
  maxDate,
  baseDate,
  onDatePick,
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

  const handleDatePick = (date: Date) => {
    onChangeMaskedDate(date);
    onDatePick();
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
      onChange: handleDatePick,
      date: selectedBaseDate || baseDate,
    },
  };
};
