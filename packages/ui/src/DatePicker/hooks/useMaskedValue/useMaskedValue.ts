import { useEffect, useState } from 'react';

import { formatDate, isDate, parseDate } from '../../../utils/date';

type Params = {
  currentValue?: Date;
  mask: string;
  /**
   * @description Изменение value для DatePicker
   * */
  onChangeValue?: (date?: Date) => void;
};

type Returned = {
  /**
   * @description Value для MaskField
   * */
  maskedValue: string;
  /**
   * @description Изменение maskedValue по Date
   * */
  onChangeMaskedDate: (date: Date) => void;
  /**
   * @description Изменение maskedValue
   * */
  onChangeMaskedValue: (value: string) => void;
};

/**
 * @description Хук для управления значением для MaskField
 */
export const useMaskedValue = ({
  currentValue,
  mask,
  onChangeValue,
}: Params): Returned => {
  const [maskedValue, setMaskedValue] = useState<string>(() =>
    currentValue ? formatDate(currentValue, mask) : '',
  );

  const handleChangeMaskedValue = (value: string) => {
    setMaskedValue(value);
    onChangeValue?.(parseDate(value, mask));
  };

  const handleChangeMaskedDate = (date: Date) => {
    setMaskedValue(formatDate(date, mask));
    onChangeValue?.(date);
  };

  // здесь происходит реакция на изменение value из вне (управляемый компонент)
  useEffect(() => {
    // если новое значение пустое, то сбрасываем значение MaskField
    if (!currentValue) {
      setMaskedValue('');

      return;
    }

    // здесь обрабатывается сценарий, когда в инпут вводится невалидная дата и при этом currentValue становится Invalid Date
    // в таком случае сравнить даты напрямую не получится
    if (!isDate(currentValue) && maskedValue) {
      return;
    }

    // проверяем равны ли даты
    const isEqualValueAndMaskedDate =
      currentValue.getTime() === parseDate(maskedValue, mask).getTime();

    // если даты не равны, то значит изменился currentValue из вне и надо синхронизировать maskedValue
    if (!isEqualValueAndMaskedDate) {
      setMaskedValue(formatDate(currentValue, mask));
    }
  }, [currentValue]);

  return {
    maskedValue,
    onChangeMaskedValue: handleChangeMaskedValue,
    onChangeMaskedDate: handleChangeMaskedDate,
  };
};
