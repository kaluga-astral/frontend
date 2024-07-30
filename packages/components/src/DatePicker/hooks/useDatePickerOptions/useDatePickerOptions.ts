import { type IMask } from 'react-imask';

import { useMaskedValue } from '../useMaskedValue';
import { useSelectedBaseDate } from '../useSelectedBaseDate';
import { useBaseDateInRange } from '../useBaseDateInRange';
import { type MinMaxDate, type PickerProps } from '../../types';

type UseMaskedValueAndSelectedBaseDateOptions = MinMaxDate & {
  mask: string;
  onChange?: (date?: Date | null) => void;
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
  onAccept?: (
    value: string,
    maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
    e?: InputEvent | undefined,
    onChange?: (value: string) => void,
  ) => void;
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
  };
};

/**
 * @description хук объединяющий повторяющуюся логику в работе DatePicker и RangeDatePicker:
 * опорная дата;
 * значение для маски;
 * обработчик изменения значения маски;
 * выбранную даты;
 * обработчик выбора даты;
 * выбранное значение даты;
 */
export const useDatePickerOptions = ({
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

  const handleMaskedInputChange = (
    _: string,
    maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
  ) => {
    onMaskedValueChange(maskRef.value);
  };

  return {
    onAccept: handleMaskedInputChange,
    inputProps: {
      value: maskedValue,
    },
    pickerProps: {
      selectedDate: selectedBaseDate,
      onChange: handleDatePick,
      date: selectedBaseDate || baseDate,
    },
  };
};
