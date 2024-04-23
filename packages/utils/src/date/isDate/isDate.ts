import dayjs from 'dayjs';

type Unknown = null | undefined | string | number | Date;

/**
 * Утилита проверки значения на валидность даты
 * @param {Unknown} value Значение, которое нужно проверить на валидность к дате
 * @return {Boolean} Возвращает boolean проверки валидности
 */
export const isDate = (value: Unknown): boolean =>
  Boolean(value) && dayjs(value).isValid();
