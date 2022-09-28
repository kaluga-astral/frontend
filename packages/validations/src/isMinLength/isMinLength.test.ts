import { isMinLength } from './isMinLength';

describe('`minLength` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(isMinLength(10)('0123')).toBe('Мин. символов: 10');
  });

  test('should return empty object if value is valid', () => {
    expect(isMinLength(10)('0123456789')).toBe(undefined);
    expect(isMinLength(2)('0123456789122')).toBe(undefined);
    expect(isMinLength(20)('0123456789122')).toBe('Мин. символов: 20');
  });

  test('should throw an error if params invalid', () => {
    expect(() => isMinLength(0)('0123456789')).toThrow();
    expect(() => isMinLength(-2)('0123456789')).toThrow();
  });
});
