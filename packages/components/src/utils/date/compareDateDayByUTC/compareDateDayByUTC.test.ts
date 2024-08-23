import { describe, expect, it } from 'vitest';

import { compareDateDayByUTC } from './compareDateDayByUTC';

describe('compareDateDayByUTC', () => {
  it('Результат вызова равен true при использовании одинаковых дат', () => {
    const sut = compareDateDayByUTC(new Date(), new Date());

    expect(sut).toBeTruthy();
  });

  it('Результат вызова равен true при использовании дат совпадающих только днем', () => {
    const sut = compareDateDayByUTC(
      new Date('2024-01-01T00:00:00.000Z'),
      new Date('2024-01-01T23:59:59.999Z'),
    );

    expect(sut).toBeTruthy();
  });

  it('Результат вызова равен false при использовании дат не совпадающих днем', () => {
    const sut = compareDateDayByUTC(
      new Date('2024-01-01T00:00:00.000Z'),
      new Date('2024-01-02T00:00:00.000Z'),
    );

    expect(sut).toBeFalsy();
  });
});
