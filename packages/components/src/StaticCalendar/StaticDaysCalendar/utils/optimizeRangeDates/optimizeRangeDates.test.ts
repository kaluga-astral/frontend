import { describe, expect, it } from 'vitest';

import { optimizeRangeDates } from './optimizeRangeDates';

describe('optimizeRangeDates', () => {
  describe('Рассчитанные dateA и dateB равны null', () => {
    it('При отсутствующем переданном dateA и переданном dateB', () => {
      const sut = optimizeRangeDates({
        baseDate: new Date('2024-08-01T00:00:00.000Z'),
        accumulator: new Map(),
      });

      expect(sut.dateA).toBeNull();
      expect(sut.dateB).toBeNull();
    });

    it('При отсутствующем dateB', () => {
      const sut = optimizeRangeDates({
        baseDate: new Date('2024-08-01T00:00:00.000Z'),
        dateA: new Date('2024-06-019T00:00:00.000Z'),
        accumulator: new Map(),
      });

      expect(sut.dateA).toBeNull();
      expect(sut.dateB).toBeNull();
    });

    it('При отсутствующем dateA', () => {
      const sut = optimizeRangeDates({
        baseDate: new Date('2024-08-01T00:00:00.000Z'),
        dateB: new Date('2024-06-019T00:00:00.000Z'),
        accumulator: new Map(),
      });

      expect(sut.dateA).toBeNull();
      expect(sut.dateB).toBeNull();
    });

    it('При dateA меньше чем значения календаря и при dateB меньше чем значения календаря', () => {
      const sut = optimizeRangeDates({
        baseDate: new Date('2024-08-01T00:00:00.000Z'),
        dateB: new Date('2024-06-10T00:00:00.000Z'),
        dateA: new Date('2024-06-19T00:00:00.000Z'),
        accumulator: new Map(),
      });

      expect(sut.dateA).toBeNull();
      expect(sut.dateB).toBeNull();
    });

    it('При dateA больше чем значения календаря и при dateB больше чем значения календаря', () => {
      const sut = optimizeRangeDates({
        baseDate: new Date('2024-08-01T00:00:00.000Z'),
        dateB: new Date('2024-10-10T00:00:00.000Z'),
        dateA: new Date('2024-10-19T00:00:00.000Z'),
        accumulator: new Map(),
      });

      expect(sut.dateA).toBeNull();
      expect(sut.dateB).toBeNull();
    });
  });

  it('Рассчитанный dateA меньше основного календаря на один день и рассчитанный dateB равен переданному значению при переданном dateB в основном диапазоне и переданном dateA меньше основного диапазона', () => {
    const sut = optimizeRangeDates({
      baseDate: new Date('2024-08-01T00:00:00.000Z'),
      dateA: new Date('2024-06-20T00:00:00.000Z'),
      dateB: new Date('2024-08-19T00:00:00.000Z'),
      accumulator: new Map(),
    });

    expect(sut.dateA).toStrictEqual(new Date('2024-07-27T00:00:00.000Z'));
    expect(sut.dateB).toStrictEqual(new Date('2024-08-19T00:00:00.000Z'));
  });

  it('Рассчитанный dateA на один день больше основного диапазона и рассчитанный dateB равен переданному значению при переданном dateB в основном диапазоне и переданном dateA больше основного диапазона', () => {
    const sut = optimizeRangeDates({
      baseDate: new Date('2024-08-01T00:00:00.000Z'),
      dateA: new Date('2024-09-20T00:00:00.000Z'),
      dateB: new Date('2024-08-19T00:00:00.000Z'),
      accumulator: new Map(),
    });

    expect(sut.dateA).toStrictEqual(new Date('2024-09-08T00:00:00.000Z'));
    expect(sut.dateB).toStrictEqual(new Date('2024-08-19T00:00:00.000Z'));
  });

  it('Рассчитанный dateA равен переданному значению и рассчитанный dateB на один день больше основного диапазона при переданном dateA в основном диапазоне и переданном dateB больше основного диапазона', () => {
    const sut = optimizeRangeDates({
      baseDate: new Date('2024-08-01T00:00:00.000Z'),
      dateA: new Date('2024-08-20T00:00:00.000Z'),
      dateB: new Date('2024-10-19T00:00:00.000Z'),
      accumulator: new Map(),
    });

    expect(sut.dateA).toStrictEqual(new Date('2024-08-20T00:00:00.000Z'));
    expect(sut.dateB).toStrictEqual(new Date('2024-09-08T00:00:00.000Z'));
  });

  it('Рассчитанный dateA равен переданному значению и рассчитанный dateB на один день меньше основного диапазона при переданном dateA в основном диапазоне и переданном dateB меньше основного диапазона', () => {
    const sut = optimizeRangeDates({
      baseDate: new Date('2024-08-01T00:00:00.000Z'),
      dateA: new Date('2024-08-20T00:00:00.000Z'),
      dateB: new Date('2024-05-19T00:00:00.000Z'),
      accumulator: new Map(),
    });

    expect(sut.dateA).toStrictEqual(new Date('2024-08-20T00:00:00.000Z'));
    expect(sut.dateB).toStrictEqual(new Date('2024-07-27T00:00:00.000Z'));
  });

  it('Рассчитанный dateA на один день больше основного диапазона и рассчитанный dateB на один день меньше основного диапазона при переданном dateA больше основного диапазона и переданном dateB меньше основного диапазона', () => {
    const sut = optimizeRangeDates({
      baseDate: new Date('2024-08-01T00:00:00.000Z'),
      dateA: new Date('2024-09-20T00:00:00.000Z'),
      dateB: new Date('2024-05-19T00:00:00.000Z'),
      accumulator: new Map(),
    });

    expect(sut.dateA).toStrictEqual(new Date('2024-09-08T00:00:00.000Z'));
    expect(sut.dateB).toStrictEqual(new Date('2024-07-27T00:00:00.000Z'));
  });

  it('Рассчитанный dateA на один день меньше основного диапазона и рассчитанный dateB на один день больше основного диапазона при переданном dateA меньше основного диапазона и переданном dateB больше основного диапазона', () => {
    const sut = optimizeRangeDates({
      baseDate: new Date('2024-08-01T00:00:00.000Z'),
      dateA: new Date('2024-06-20T00:00:00.000Z'),
      dateB: new Date('2024-09-19T00:00:00.000Z'),
      accumulator: new Map(),
    });

    expect(sut.dateA).toStrictEqual(new Date('2024-07-27T00:00:00.000Z'));
    expect(sut.dateB).toStrictEqual(new Date('2024-09-08T00:00:00.000Z'));
  });
});
