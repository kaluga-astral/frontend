import { isDate } from './isDate';

describe('mustBeDate', () => {
  it.each(['2011-11-12', '1991.01.22', '01.12.2022'])(
    'Строка: %s является валидной датой',
    (value) => {
      expect(isDate()(value)).toBe(undefined);
    },
  );

  it.each(['2011-22-12', '1991.22.22', 'Invalid Date', 213])(
    'Строка: %s является не валидной датой',
    (value) => {
      expect(isDate()(value)).toBe('Неверный формат даты');
    },
  );

  it('Не выдает ошибку на валидный объект даты', () => {
    expect(isDate()(new Date())).toBe(undefined);
  });

  it('Выдает ошибку на невалидный объект даты Invalid Date', () => {
    expect(isDate()('invalid')).toBe('Неверный формат даты');
  });
});
