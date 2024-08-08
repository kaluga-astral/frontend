import { addDays, isDate } from '../../../utils/date';

type GetBoundaryDateParams = {
  /**
   * резервная дата
   */
  reserve: Date;
  /**
   * целевая дата
   */
  target?: Date | null;
  /**
   * смещение в днях
   */
  offset?: number;
};

/**
 * утилита проверки целевой даты.
 * если целевая дата в наличии, то возвращается дата со смещением равным offset.
 * если целевая дата отсутствует, то вернется reserve дата.
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
