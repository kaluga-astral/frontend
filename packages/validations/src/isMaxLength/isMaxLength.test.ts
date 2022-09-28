import { isMaxLength } from './isMaxLength';

describe('`maxLength` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(isMaxLength(3)('012300000')).toBe('Макс. символов: 3');
  });

  test('should return empty object if value is valid', () => {
    expect(isMaxLength(10)('0123456789')).toBe(undefined);
    expect(isMaxLength(20)('0123456')).toBe(undefined);
    expect(isMaxLength(20)(1232184)).toBe(undefined);
  });

  test('should throw an error if params invalid', () => {
    expect(() => isMaxLength(0)('0123456789')).toThrow();
    expect(() => isMaxLength(-2)('0123456789')).toThrow();
  });
});
