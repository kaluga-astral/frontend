import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { buildDaysCalendarGrid } from './buildDaysCalendarGrid';

describe('buildDaysCalendarGrid', () => {
  beforeAll(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2024-08-20T00:00:00Z'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  describe('При baseDate в котором первый день месяца не понедельник и последний день не воскресенье', () => {
    const sut = buildDaysCalendarGrid({
      baseDate: new Date('2024-08-01T00:00:00Z'),
    });

    it('Крайние элементы относятся к другим месяцам', () => {
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
      baseDate: new Date('2024-08-01T00:00:00Z'),
      isMondayFirst: false,
    });

    expect(sut[0].date.getUTCDay()).toBe(0);
  });

  describe('Флаг isDisabled', () => {
    const sut = buildDaysCalendarGrid({
      minDate: new Date('2024-08-02T00:00:00Z'),
      maxDate: new Date('2024-08-05T00:00:00Z'),
      baseDate: new Date('2024-08-01T00:00:00Z'),
    });

    it('Равен true для дат которые меньше minDate', () => {
      sut
        .slice(0, 3)
        .forEach(({ isDisabled }) => expect(isDisabled).toBeTruthy());
    });

    it('Равен false дат, находящихся в промежутке меньше minDate и maxDate', () => {
      sut
        .slice(4, 8)
        .forEach(({ isDisabled }) => expect(isDisabled).toBeFalsy());
    });

    it('Равен true для дат которые больше maxDate', () => {
      sut.slice(9).forEach(({ isDisabled }) => expect(isDisabled).toBeTruthy());
    });
  });

  it('Счетчик monthDay равен номеру дня в месяце', () => {
    const sut = buildDaysCalendarGrid({
      baseDate: new Date('2024-08-01T00:00:00Z'),
    });

    sut
      .slice(3, 34)
      .forEach(({ monthDay }, index) => expect(monthDay).toBe(index + 1));
  });

  it('Флаг isCurrentInUserLocalTime равен true для дня совпадающего с текущим днем пользователя', () => {
    const sut = buildDaysCalendarGrid({
      baseDate: new Date('2024-08-01T00:00:00Z'),
    });

    expect(sut[22].isCurrentInUserLocalTime).toBeTruthy();
  });

  it('Флаг isInSelectedRange равен true для дней которые попадают в интервал между selectedDate и rangeDate', () => {
    const sut = buildDaysCalendarGrid({
      baseDate: new Date('2024-08-01T00:00:00Z'),
      selectedDate: new Date('2024-08-01T00:00:00Z'),
      rangeDate: new Date('2024-08-10T00:00:00Z'),
    });

    sut
      .slice(3, 12)
      .forEach(({ isInSelectedRange }) =>
        expect(isInSelectedRange).toBeTruthy(),
      );
  });

  it('Флаг isInHoveredRange равен true для дней которые попадают в интервал между selectedDate и hoveredDate', () => {
    const sut = buildDaysCalendarGrid({
      baseDate: new Date('2024-08-01T00:00:00Z'),
      selectedDate: new Date('2024-08-01T00:00:00Z'),
      hoveredDate: new Date('2024-08-10T00:00:00Z'),
    });

    sut
      .slice(3, 12)
      .forEach(({ isInHoveredRange }) => expect(isInHoveredRange).toBeTruthy());
  });

  it('Флаг isSelected равен true для дней совпадающих с rangeDate и selectedDate', () => {
    const sut = buildDaysCalendarGrid({
      baseDate: new Date('2024-08-01T00:00:00Z'),
      selectedDate: new Date('2024-08-01T00:00:00Z'),
      rangeDate: new Date('2024-08-10T00:00:00Z'),
    });

    expect(sut[3].isSelected).toBeTruthy();
    expect(sut[12].isSelected).toBeTruthy();
  });

  it('Значение date равно дате соответствующего дня', () => {
    const sut = buildDaysCalendarGrid({
      baseDate: new Date('2024-08-01T00:00:00Z'),
    });

    sut.forEach(({ date }, index) => {
      expect(date).toStrictEqual(
        //29 июля пн, первый день в календаре для августа
        new Date(2024, 6, 29 + index, 0, -1 * new Date().getTimezoneOffset()),
      );
    });
  });

  it('Значение index равно порядковому номеру в массиве', () => {
    const sut = buildDaysCalendarGrid({
      baseDate: new Date('2024-08-01T00:00:00Z'),
    });

    sut.forEach((item, arrIndex) => {
      expect(item.index).toBe(arrIndex);
    });
  });
});
