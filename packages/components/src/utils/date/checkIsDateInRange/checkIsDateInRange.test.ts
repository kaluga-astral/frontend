import { describe, expect, it } from 'vitest';

import { DateCompareDeep } from '../isDateOutOfRange';

import { checkIsDateInRange } from './checkIsDateInRange';

describe('checkIsDateInRange', () => {
  it('Результат равен true при дате находящейся в промежутке между выбранным датами', () => {
    const sut = checkIsDateInRange({
      date: new Date('2024-01-02T00:00:00.000Z'),
      dateA: new Date('2024-01-01T00:00:00.000Z'),
      dateB: new Date('2024-01-03T00:00:00.000Z'),
      deep: DateCompareDeep.day,
    });

    expect(sut).toBeTruthy();
  });

  it('Результат равен false при дате не находящейся в промежутке между выбранным датами', () => {
    const sut = checkIsDateInRange({
      date: new Date('2024-01-05T00:00:00.000Z'),
      dateA: new Date('2024-01-01T00:00:00.000Z'),
      dateB: new Date('2024-01-03T00:00:00.000Z'),
      deep: DateCompareDeep.day,
    });

    expect(sut).toBeFalsy();
  });
});
