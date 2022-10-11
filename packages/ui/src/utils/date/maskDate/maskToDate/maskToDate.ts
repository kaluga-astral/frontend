import dayjs from 'dayjs';

/**
 * @description утилита конвертации строковой даты созданной по маске обратно в Date
 */
export const maskToDate = (date: string): Date => dayjs(date).toDate();
