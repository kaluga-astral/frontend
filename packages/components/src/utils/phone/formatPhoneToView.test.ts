import { expect } from 'vitest';

import { formatPhoneToView } from './formatPhoneToView';

describe('formatPhoneToView', () => {
  const mockPhoneNumber = '79999999999';

  it('Prop:phone=default: Форматирование телефона по умолчанию, с выводом +7', () => {
    const formattedPhoneNumber = formatPhoneToView(mockPhoneNumber);

    expect(formattedPhoneNumber).toBe('+7 (999) 999-99-99');
  });

  it('Prop:isStartWithPlus=false: Форматирование телефона с выводом 8', () => {
    const formattedPhoneNumber = formatPhoneToView(mockPhoneNumber, {
      isStartWithPlus: false,
    });

    expect(formattedPhoneNumber).toBe('8 (999) 999-99-99');
  });

  it('Prop:phone=undefined: Обработка случая при отсуствие параметров', () => {
    const formattedPhoneNumber = formatPhoneToView();

    expect(formattedPhoneNumber).toBeUndefined();
  });

  it('Prop:phone=withOutPlus: Форматирование телефона начинающегося без +', () => {
    const formattedPhoneNumber = formatPhoneToView('79999999999');

    expect(formattedPhoneNumber).toBe('+7 (999) 999-99-99');
  });

  it('Prop:phone=startWith 8: Форматирование телефона начинающегося с 8', () => {
    const formattedPhoneNumber = formatPhoneToView('89999999999', {
      isStartWithPlus: false,
    });

    expect(formattedPhoneNumber).toBe('8 (999) 999-99-99');
  });
});
