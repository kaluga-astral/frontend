import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { SecondsCountDown } from './SecondsCountDown';

describe('SecondsCountDown tests', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date', 'setTimeout'] });
    vi.setSystemTime('2022-02-10T00:00:00.000Z');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Значение таймера при создании равно разнице текущей даты и указанной даты', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
    });

    expect(sut.textTime).toBe('00:50');
  });

  it('Значение таймера при создании равно указанным секундам', () => {
    const sut = new SecondsCountDown({
      seconds: 50,
    });

    expect(sut.textTime).toBe('00:50');
  });

  it('Значение seconds игнорируется и значение таймера при создании равно разнице текущей даты и указанной даты, и значение seconds игнорируется', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
      seconds: 60,
    });

    expect(sut.textTime).toBe('00:50');
  });

  it('Значение таймера уменьшается с течением времени', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
    });

    vi.runOnlyPendingTimers();
    expect(sut.textTime).toBe('00:49');
  });

  it('Значение таймера обнуляется по истечении времени', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
    });

    // эмулируем ожидание
    for (let i = 0; i < 50; i++) {
      vi.runOnlyPendingTimers();
    }

    expect(sut.textTime).toBe('00:00');
  });

  it('Значение таймера равно нулю при targetDate меньше текущей', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-09T00:00:00.000Z'),
    });

    expect(sut.textTime).toBe('00:00');
  });

  it('Флаг активности таймера по умолчанию true', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
    });

    expect(sut.isTimerActive).toBeTruthy();
  });

  it('Флаг активности false при targetDate меньше текущей', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-09T00:00:00.000Z'),
    });

    expect(sut.isTimerActive).toBeFalsy();
  });

  it('Флаг активности таймера переключается в false по истечении времени', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
    });

    // эмулируем ожидание
    for (let i = 0; i < 50; i++) {
      vi.runOnlyPendingTimers();
    }

    expect(sut.isTimerActive).toBeFalsy();
  });

  it('Значение таймера не изменяется, если isInitialTimerActive = false', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
      isInitialTimerActive: false,
    });

    // эмулируем ожидание
    for (let i = 0; i < 50; i++) {
      vi.runOnlyPendingTimers();
    }

    expect(sut.textTime).toBe('00:50');
  });

  it('Действующий таймер изменяет целевое время при использовании метода reset', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:10.000Z'),
    });

    sut.reset(new Date('2022-02-10T00:00:50.000Z'));
    expect(sut.textTime).toBe('00:50');
  });

  it('Действующий таймер изменяет целевое время при использовании метода reset и при указании в нем кол-ва секунд', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:10.000Z'),
    });

    sut.reset(50);
    expect(sut.textTime).toBe('00:50');
  });

  it('Отработавший таймер изменяет целевое время при использовании метода reset', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
    });

    // эмулируем ожидание
    for (let i = 0; i < 50; i++) {
      vi.runOnlyPendingTimers();
    }

    // сбрасываем таймер к значению больше текущей
    sut.reset(new Date('2022-02-10T00:01:40.000Z'));
    expect(sut.textTime).toBe('00:50');
  });

  it('Флаг активности отработавшего таймера включается при использовании метода reset', () => {
    const sut = new SecondsCountDown({
      targetDate: new Date('2022-02-10T00:00:50.000Z'),
    });

    // эмулируем ожидание
    for (let i = 0; i < 50; i++) {
      vi.runOnlyPendingTimers();
    }

    // сбрасываем таймер к значению больше текущей
    sut.reset(new Date('2022-02-10T00:01:40.000Z'));
    expect(sut.isTimerActive).toBeTruthy();
  });
});
