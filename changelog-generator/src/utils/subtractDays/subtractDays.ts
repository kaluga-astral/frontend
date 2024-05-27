import dayjs from 'dayjs';

export const subtractDays = (date: string | Date, amount: number) =>
  dayjs(date).subtract(amount, 'day').toDate();
