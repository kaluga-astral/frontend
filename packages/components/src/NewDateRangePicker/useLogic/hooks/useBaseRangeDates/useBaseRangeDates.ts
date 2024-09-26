import { useEffect, useMemo, useState } from 'react';
import { addMonths } from '@astral/utils';

import { useBaseDateInRange } from '../../../../DatePicker/hooks';

type UseBaseRangeDatesOprions = {
  /**
   * Минимальная дата
   */
  minDate: Date;

  /**
   * Максимальная дата
   */
  maxDate: Date;

  /**
   * Выбранная start дата
   */
  selectedStartDate?: Date | null;

  /**
   * Выбранная end дата
   */
  selectedEndDate?: Date | null;

  /**
   * При true хук вернет предыдущие значения, не рассчитывая новые при изменении зависимостей.
   * Используется, что бы при выборе первой даты, второй календарь не менял активный месяц до момента повторного открытия поповера
   */
  shouldReturnPrevValues?: boolean;

  /**
   * Разница между startBaseDate и endBaseDate по умолчанию
   */
  monthOffset?: number;
};

/**
 * Хук возвращает базовые даты, по которым должны рендериться тот или иной месяц в календарях DateRangePicker
 */
export const useBaseRangeDates = ({
  minDate,
  maxDate,
  shouldReturnPrevValues,
  selectedStartDate,
  selectedEndDate,
  monthOffset = 1,
}: UseBaseRangeDatesOprions) => {
  const [startBaseDate, setStartBaseDate] = useState<Date>();
  const [endBaseDate, setEndBaseDate] = useState<Date>();

  const startBaseInitial = useMemo(() => {
    if (!selectedStartDate && selectedEndDate) {
      return addMonths(selectedEndDate, -monthOffset);
    }

    return selectedStartDate;
  }, [monthOffset, selectedEndDate, selectedStartDate]);

  const endBaseInitial = useMemo(() => {
    if (!selectedStartDate && selectedEndDate) {
      return selectedEndDate;
    }

    return addMonths(selectedStartDate || new Date(), monthOffset);
  }, [monthOffset, selectedEndDate, selectedStartDate]);

  const startBaseDateCandidate = useBaseDateInRange({
    minDate,
    maxDate,
    initialDate: startBaseInitial,
  });

  const endBaseDateCandidate = useBaseDateInRange({
    minDate,
    maxDate,
    initialDate: endBaseInitial,
  });

  useEffect(() => {
    if (!shouldReturnPrevValues) {
      setStartBaseDate(startBaseDateCandidate);
      setEndBaseDate(endBaseDateCandidate);
    }

    if (selectedStartDate) {
      setStartBaseDate(selectedStartDate);
    }

    if (selectedEndDate) {
      setEndBaseDate(selectedEndDate);
    }
  }, [
    endBaseDateCandidate,
    selectedEndDate,
    selectedStartDate,
    shouldReturnPrevValues,
    startBaseDateCandidate,
  ]);

  return {
    startBaseDate: startBaseDate || startBaseDateCandidate,
    endBaseDate: endBaseDate || endBaseDateCandidate,
  };
};
