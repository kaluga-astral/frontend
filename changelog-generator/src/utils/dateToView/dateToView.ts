import dayjs from 'dayjs';

export const dateToView = (date: string | Date) => dayjs(date).format('DD.MM.YYYY');
