import { zeroPad } from '../../zeroPad';

/**
 * опции для генерации даты без смещения по часовому поясу пользователя
 */
export type BuildIsoDateStringOptions = {
  /**
   * год, обязательный
   */
  year: number;
  /**
   * месяц, опциональный, должен быть нормализован, т.е. начинаться от 1
   */
  month?: number;
  /**
   * день месяца, опциональный
   */
  day?: number;
  /**
   * час, опциональный
   */
  hour?: number;
  /**
   * минута, опциональный
   */
  minute?: number;
  /**
   * секунда, опциональный
   */
  second?: number;
};

/**
 * утилита генерирующая строковую дату в формате ISO
 */
export const buildIsoDateString = ({
  year,
  month = 1,
  day = 1,
  hour = 0,
  minute = 0,
  second = 0,
}: BuildIsoDateStringOptions) => {
  const YYYY = zeroPad(year, 4);
  const MM = zeroPad(month, 2);
  const DD = zeroPad(day, 2);
  const HH = zeroPad(hour, 2);
  const mm = zeroPad(minute, 2);
  const ss = zeroPad(second, 2);

  return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}.000Z`;
};
