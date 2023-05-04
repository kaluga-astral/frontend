import { ChangeEvent } from 'react';

import { useMaskedValue } from '../useMaskedValue';
import { useSelectedBaseDate } from '../useSelectedBaseDate';
import { useBaseDateInRange } from '../useBaseDateInRange';
import { MinMaxDate, PickerProps } from '../../types';

type UseMaskedValueAndSelectedBaseDateOptions = MinMaxDate & {
  mask: string;
  onChange?: (date?: Date) => void;
  currentValue?: Date;
  /**
   * @description смещение базовой даты в месяцах.
   * ожидается использование в DateRangePicker, для создания опорной даты второго календаря,
   * @default 0
   */
  monthOffset?: number;
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
  monthOffset,
  onDatePick,
}: UseMaskedValueAndSelectedBaseDateOptions): UseMaskedValueAndSelectedBaseDateReturn => {
  const baseDate = useBaseDateInRange({ minDate, maxDate, monthOffset });
  const { maskedValue, onMaskedValueChange, onMaskedDateChange } =
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
    onMaskedDateChange(date);
    onDatePick();
  };

  const handleMaskedInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onMaskedValueChange(e.target.value);
  };

  return {
    inputProps: {
      value: maskedValue,
      onNativeChange: handleMaskedInputChange,
    },
    pickerProps: {
      selectedDate: selectedBaseDate,
      onChange: handleDatePick,
      date: selectedBaseDate || baseDate,
    },
  };
};
