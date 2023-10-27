const START_HOURS_INDEX = 11;
const START_MINUTES_INDEX = 14;

const END_INDEX = 19;

const HOUR = 60 * 60; // 60 сек * 60 мин

/**
 * @description форматирует секунды во время (Например: 100 сек -> 01:40, 5000 сек -> 01:23:20)
 */
export const formatSecondsToTime = (seconds: number): string => {
  let date = new Date(0);

  date.setSeconds(seconds);

  if (seconds >= HOUR) {
    return date.toISOString().substring(START_HOURS_INDEX, END_INDEX);
  } else {
    return date.toISOString().substring(START_MINUTES_INDEX, END_INDEX);
  }
};
