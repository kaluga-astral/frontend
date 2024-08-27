import { describe, expect, it } from 'vitest';

import { filterSelectedRanges } from './filterSelectedRanges';

describe('filterSelectedRanges', () => {
  describe('Результат вызова null', () => {
    it('При переданном значении ranges == undefined', () => {
      const sut = filterSelectedRanges(new Date('2024-08-10'), true, undefined);

      expect(sut).toBeNull();
    });

    it('При переданном значении ranges == null', () => {
      const sut = filterSelectedRanges(new Date('2024-08-10'), true, null);

      expect(sut).toBeNull();
    });

    it('При переданном значении ranges в виде пустого массива', () => {
      const sut = filterSelectedRanges(new Date('2024-08-10'), true, []);

      expect(sut).toBeNull();
    });

    it('При переданном значении ranges содержащем только даты, не пересекающиеся с основным диапазоном', () => {
      const sut = filterSelectedRanges(new Date('2024-08-10'), true, [
        {
          dateA: new Date('2024-01-02'),
          dateB: new Date('2024-01-08'),
        },
        {
          dateA: new Date('2024-02-02'),
          dateB: new Date('2024-03-02'),
        },
      ]);

      expect(sut).toBeNull();
    });
  });

  it('Результат вызова содержит только даты, пересекающиеся с основным диапазоном', () => {
    const sut = filterSelectedRanges(new Date('2024-08-10'), true, [
      {
        dateA: new Date('2024-01-02'),
        dateB: new Date('2024-01-08'),
      },
      {
        dateA: new Date('2024-08-02'),
        dateB: new Date('2024-03-02'),
      },
    ]);

    expect(sut).toStrictEqual([
      {
        dateA: new Date('2024-08-02'),
        dateB: new Date('2024-03-02'),
      },
    ]);
  });

  it('Результат вызова содержит даты, находящиеся внутри основного диапазона', () => {
    const sut = filterSelectedRanges(new Date('2024-08-10'), true, [
      {
        dateA: new Date('2024-08-02'),
        dateB: new Date('2024-08-15'),
      },
    ]);

    expect(sut).toStrictEqual([
      {
        dateA: new Date('2024-08-02'),
        dateB: new Date('2024-08-15'),
      },
    ]);
  });
});
