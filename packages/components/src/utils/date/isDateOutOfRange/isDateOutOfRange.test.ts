import { DateCompareDeep, isDateOutOfRange } from './isDateOutOfRange';

describe('isDateOutOfRange', () => {
  it('При дате больше обоих значений и ренжа ожидается true', () => {
    const date = new Date('2022-12-22T00:00:00.000Z');
    const dateA = new Date('2022-12-10T00:00:00.000Z');
    const dateB = new Date('2022-12-21T00:00:00.000Z');

    const result = isDateOutOfRange({ date, dateA, dateB });

    expect(result).toBeTruthy();
  });

  it('При дате меньше обоих значений и ренжа ожидается true', () => {
    const date = new Date('2022-12-02T00:00:00.000Z');
    const dateA = new Date('2022-12-10T00:00:00.000Z');
    const dateB = new Date('2022-12-21T00:00:00.000Z');

    const result = isDateOutOfRange({ date, dateA, dateB });

    expect(result).toBeTruthy();
  });

  it('При дате меньше B и больше А, т.е. при вхождении даты в диапазон, ожидается false', () => {
    const date = new Date('2022-12-12T00:00:00.000Z');
    const dateA = new Date('2022-12-10T00:00:00.000Z');
    const dateB = new Date('2022-12-21T00:00:00.000Z');

    const result = isDateOutOfRange({ date, dateA, dateB });

    expect(result).toBeFalsy();
  });

  it('При дате меньше A и больше B, т.е. при вхождении даты в диапазон, ожидается false', () => {
    const date = new Date('2022-12-12T00:00:00.000Z');
    const dateA = new Date('2022-12-21T00:00:00.000Z');
    const dateB = new Date('2022-12-10T00:00:00.000Z');

    const result = isDateOutOfRange({ date, dateA, dateB });

    expect(result).toBeFalsy();
  });

  it('При совпадении даты с одним из ренжа ожидается false', () => {
    const date = new Date('2022-12-10T00:00:00.000Z');
    const dateA = new Date('2022-12-10T00:00:00.000Z');
    const dateB = new Date('2022-12-21T00:00:00.000Z');

    const result = isDateOutOfRange({ date, dateA, dateB });

    expect(result).toBeFalsy();
  });

  it('При сравнении по глубине в часах, даты с одинаковым часом, но разными минутами, ожидается false', () => {
    const date = new Date('2022-12-12T20:30:00.000Z');
    const dateA = new Date('2022-12-12T20:20:00.000Z');
    const dateB = new Date('2022-12-12T20:10:00.000Z');

    const result = isDateOutOfRange({
      date,
      dateA,
      dateB,
      deep: DateCompareDeep.hour,
    });

    expect(result).toBeFalsy();
  });

  it('При сравнении по глубине в днях, даты с одинаковым днем, но разным временем, ожидается false', () => {
    const date = new Date('2022-12-12T20:00:00.000Z');
    const dateA = new Date('2022-12-12T10:00:00.000Z');
    const dateB = new Date('2022-12-12T00:00:00.000Z');

    const result = isDateOutOfRange({
      date,
      dateA,
      dateB,
      deep: DateCompareDeep.day,
    });

    expect(result).toBeFalsy();
  });

  it('При сравнении по глубине в месяцах, даты с одинаковым месяцем, но разными днями, ожидается false', () => {
    const date = new Date('2022-12-12T20:00:00.000Z');
    const dateA = new Date('2022-12-04T10:00:00.000Z');
    const dateB = new Date('2022-12-02T00:00:00.000Z');

    const result = isDateOutOfRange({
      date,
      dateA,
      dateB,
      deep: DateCompareDeep.month,
    });

    expect(result).toBeFalsy();
  });

  it('При сравнении по глубине в годах, даты с одинаковым годом, но разными месяцами, ожидается false', () => {
    const date = new Date('2022-10-12T20:00:00.000Z');
    const dateA = new Date('2022-10-04T10:00:00.000Z');
    const dateB = new Date('2022-10-02T00:00:00.000Z');

    const result = isDateOutOfRange({
      date,
      dateA,
      dateB,
      deep: DateCompareDeep.year,
    });

    expect(result).toBeFalsy();
  });
});
