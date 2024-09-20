import { type IMask } from 'react-imask';

import { useMaskedValue } from '../useMaskedValue';
import { useSelectedBaseDate } from '../useSelectedBaseDate';
import { useBaseDateInRange } from '../useBaseDateInRange';
import { type MinMaxDate, type PickerProps } from '../../types';

type UseMaskedValueAndSelectedBaseDateOptions = MinMaxDate & {
  mask: string;

  currentValue?: Date | null;

  /**
   * смещение базовой даты в месяцах.
   * ожидается использование в DateRangePicker, для создания опорной даты второго календаря,
   * @default 0
   */
  monthOffset?: number;

  /**
   * колбэк на выбор даты в пикере
   */
  onDatePick: (date?: Date | null) => void;

  onChange?: (date?: Date | null) => void;
};

type UseMaskedValueAndSelectedBaseDateReturn = {
  onAccept?: (
    value: string,
    maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
    e?: InputEvent | undefined,
    onChange?: (value: string) => void,
  ) => void;
  /**
   * пропсы необходимые для работы пикеров
   */
  pickerProps: PickerProps;
  /**
   * пропсы необходимые для работы инпутов
   */
  inputProps: {
    /**
     * строковое значение даты для инпута с маской
     */
    value: string;
  };
};

/**
 * хук объединяющий повторяющуюся логику в работе DatePicker и RangeDatePicker:
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
    onDatePick(date);
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
