import dayjs from 'dayjs';

type Unknown = null | undefined | string | number | Date;

/**
 * @description функция проверки значения на дату
 */
export const isDate = (value: Unknown): value is Date => dayjs(value).isValid();
