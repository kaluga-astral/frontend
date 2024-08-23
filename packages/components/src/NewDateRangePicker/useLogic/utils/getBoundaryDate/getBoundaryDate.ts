import { addDays, isDate } from '../../../../utils/date';

type GetBoundaryDateParams = {
  /**
   * Резервная дата
   */
  reserve: Date;

  /**
   * Целевая дата
   */
  target?: Date | null;

  /**
   * Смещение в днях
   */
  offset?: number;
};

/**
 * Утилита проверки целевой даты.
 * Если целевая дата в наличии, то возвращается дата со смещением равным offset.
 * Если целевая дата отсутствует, то вернется reserve дата.
 */
export const getBoundaryDate = ({
  reserve,
  target,
  offset = 0,
}: GetBoundaryDateParams): Date => {
  if (isDate(target)) {
    return addDays(target, offset);
  }

  return reserve;
};
