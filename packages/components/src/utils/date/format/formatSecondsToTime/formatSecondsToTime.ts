const HOUR = 60 * 60; // 60 сек * 60 мин

/**
 * @description форматирует секунды во время (Например: 100 сек -> 01:40, 5000 сек -> 01:23:20)
 */
export const formatSecondsToTime = (seconds: number): string => {
  let date = new Date(0);

  date.setSeconds(seconds);

  return Intl.DateTimeFormat('ru', {
    second: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
    hour: seconds >= HOUR ? 'numeric' : undefined,
  }).format(date);
};
