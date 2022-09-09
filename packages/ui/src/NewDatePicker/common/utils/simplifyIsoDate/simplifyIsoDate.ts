export const dateToSimpleIso = (date?: Date) =>
  date?.toISOString().substring(0, 10);
