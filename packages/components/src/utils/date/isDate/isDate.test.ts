import { describe, expect, it } from 'vitest';

import { isDate } from './isDate';

describe('isDate', () => {
  describe('Результат вызова равен true', () => {
    it('При значении валидной даты', () => {
      const sut = isDate(new Date());

      expect(sut).toBeTruthy();
    });

    it('При значении числа обозначающего год', () => {
      const sut = isDate(2024);

      expect(sut).toBeTruthy();
    });

    it('При значении строковой даты YYYY', () => {
      const sut = isDate('2024');

      expect(sut).toBeTruthy();
    });

    it('При значении строковой даты YYYY-MM', () => {
      const sut = isDate('2024-01');

      expect(sut).toBeTruthy();
    });

    it('При значении строковой даты YYYY-MM-DD', () => {
      const sut = isDate('2024-01-01');

      expect(sut).toBeTruthy();
    });

    it('При значении строковой даты в формате iso', () => {
      const sut = isDate('2024-01-01T00:00:00.000Z');

      expect(sut).toBeTruthy();
    });

    it('При значении даты в миллисекундах', () => {
      const sut = isDate(1704067200000);

      expect(sut).toBeTruthy();
    });
  });

  describe('Результат вызова равен false', () => {
    it('При значении Invalide Date', () => {
      const sut = isDate(new Date('50-50-50'));

      expect(sut).toBeFalsy();
    });

    it('При значении null', () => {
      const sut = isDate(null);

      expect(sut).toBeFalsy();
    });

    it('При значении undefined', () => {
      const sut = isDate(undefined);

      expect(sut).toBeFalsy();
    });

    it('При значении случайной строки', () => {
      const sut = isDate('foo');

      expect(sut).toBeFalsy();
    });
  });
});
