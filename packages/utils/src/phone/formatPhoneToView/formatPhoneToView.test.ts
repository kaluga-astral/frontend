import { expect } from 'vitest';

import { formatPhoneToView } from './formatPhoneToView';

describe('formatPhoneToView', () => {
  const mockPhoneNumber = '79999999999';

  it('Маска содержит по-умолчанию +7', () => {
    const formattedPhoneNumber = formatPhoneToView(mockPhoneNumber);

    expect(formattedPhoneNumber).toBe('+7 (999) 999-99-99');
  });

  it('В маску добавляется 8 при isStartWithPlus=false', () => {
    const formattedPhoneNumber = formatPhoneToView(mockPhoneNumber, {
      isStartWithPlus: false,
    });

    expect(formattedPhoneNumber).toBe('8 (999) 999-99-99');
  });

  it('Входное значение игнорируется, если оно undefined', () => {
    const formattedPhoneNumber = formatPhoneToView();

    expect(formattedPhoneNumber).toBeUndefined();
  });

  it('Маска формируется при отсутствии + в начале', () => {
    const formattedPhoneNumber = formatPhoneToView('79999999999');

    expect(formattedPhoneNumber).toBe('+7 (999) 999-99-99');
  });
});
