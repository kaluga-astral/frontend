import { describe, expect, it } from 'vitest';

import { DateCompareDeep } from '../isDateOutOfRange';

import { checkIsDateBetweenSelectedAndRangeDates } from './checkIsDateBetweenSelectedAndRangeDates';

describe('checkIsDateBetweenSelectedAndRangeDates', () => {
  it('Результат равен true при дате находящейся в промежутке между выбранным датами', () => {
    const sut = checkIsDateBetweenSelectedAndRangeDates({
      date: new Date('2024-01-02T00:00:00.000Z'),
      selectedDate: new Date('2024-01-01T00:00:00.000Z'),
      rangeDate: new Date('2024-01-03T00:00:00.000Z'),
      deep: DateCompareDeep.day,
    });

    expect(sut).toBeTruthy();
  });

  it('Результат равен false при дате не находящейся в промежутке между выбранным датами', () => {
    const sut = checkIsDateBetweenSelectedAndRangeDates({
      date: new Date('2024-01-05T00:00:00.000Z'),
      selectedDate: new Date('2024-01-01T00:00:00.000Z'),
      rangeDate: new Date('2024-01-03T00:00:00.000Z'),
      deep: DateCompareDeep.day,
    });

    expect(sut).toBeFalsy();
  });
});
