import { describe, expect, it } from 'vitest';

import { buildDaysCalendarGrid } from './buildDaysCalendarGrid';

describe('buildDaysCalendarGrid', () => {
  describe('При baseDate в котором первый день месяца не понедельник и последний день не воскресенье', () => {
    const sut = buildDaysCalendarGrid({
      minDate: new Date('2000-01-01'),
      maxDate: new Date('2090-01-01'),
      baseDate: new Date('2024-08-01T00:00:00Z'),
    });

    it('Крайние элементы из других месяцев', () => {
      expect(sut[0].date.toISOString()).toBe('2024-07-29T00:00:00.000Z');
      expect(sut[34].date.toISOString()).toBe('2024-09-01T00:00:00.000Z');
    });

    it('Флаг isOutOfAvailableRange равен true для элементов из другого месяца', () => {
      expect(sut[0].isOutOfAvailableRange).toBeTruthy();
      expect(sut[34].isOutOfAvailableRange).toBeTruthy();
    });

    it('Флаг isOutOfAvailableRange равен false для элемента с месяцем базовой даты', () => {
      expect(sut[10].isOutOfAvailableRange).toBeFalsy();
    });

    it('Первый элемент понедельник', () => {
      expect(sut[0].date.getUTCDay()).toBe(1);
    });
  });

  it('Первый элемент воскресенье при baseDate в котором первый день месяца не понедельник и последний день не воскресенье при isMondayFirst=false', () => {
    const sut = buildDaysCalendarGrid({
      minDate: new Date('2000-01-01'),
      maxDate: new Date('2090-01-01'),
      baseDate: new Date('2024-08-01T00:00:00Z'),
      isMondayFirst: false,
    });

    expect(sut[0].date.getUTCDay()).toBe(0);
  });
});
