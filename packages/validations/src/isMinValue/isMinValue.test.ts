import { isMinValue } from './isMinValue';

describe('`minValue` validation rule', () => {
  test('should return error object if data is valid', () => {
    expect(isMinValue(7736)(1000)).toEqual('Должно быть больше чем 7736');
    expect(isMinValue(9999999)(10)).toEqual('Должно быть больше чем 9999999');
    expect(isMinValue(55)('213')).toEqual('Должно иметь тип number');
  });

  test('should return empty object if data is valid', () => {
    expect(isMinValue(10)(100)).toEqual(undefined);
  });
});
