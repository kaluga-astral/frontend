import { formatSecondsToTime } from './formatSecondsToTime';

describe('formatSecondsToTime', () => {
  it('0 секунд', () => {
    const seconds = 0;

    const result = formatSecondsToTime(seconds);

    expect(result).toBe('00:00');
  });

  it('10 секунд', () => {
    const seconds = 10;

    const result = formatSecondsToTime(seconds);

    expect(result).toBe('00:10');
  });

  it('59 секунд', () => {
    const seconds = 59;

    const result = formatSecondsToTime(seconds);

    expect(result).toBe('00:59');
  });

  it('60 секунд (1 минута)', () => {
    const seconds = 60;

    const result = formatSecondsToTime(seconds);

    expect(result).toBe('01:00');
  });

  it('100 секунд', () => {
    const seconds = 100;

    const result = formatSecondsToTime(seconds);

    expect(result).toBe('01:40');
  });

  it('3599 секунд', () => {
    const seconds = 3599;

    const result = formatSecondsToTime(seconds);

    expect(result).toBe('59:59');
  });

  it('3600 секунд (1 час)', () => {
    const seconds = 3600;

    const result = formatSecondsToTime(seconds);

    expect(result).toBe('01:00:00');
  });

  it('5000 секунд', () => {
    const seconds = 5000;

    const result = formatSecondsToTime(seconds);

    expect(result).toBe('01:23:20');
  });
});
