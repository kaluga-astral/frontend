import { isOGRNUL } from './isOGRNUL';

describe('mustBeOGRNUL', () => {
  it('должна возвращать сообщение об ошибке если value < 13 символов', () => {
    const value = new Array(12).fill('1').join('');

    expect(isOGRNUL()(value)).toEqual('');
  });

  it('должна возвращать сообщение об ошибке если value > 13 символов', () => {
    const value = new Array(14).fill('1').join('');

    expect(isOGRNUL()(value)).toEqual('');
  });

  it('должна возвращать null если value = 13 символов (контрольная сумма верна)', () => {
    expect(isOGRNUL()('1175958036814')).toEqual(undefined);
  });

  it('должна возвращать сообщение об ошибке если value = 13 символов (контрольная сумма неверна).', () => {
    expect(isOGRNUL()('1175958000004')).toEqual('');
  });

  it('должна возвращать null если value является валидным ОГРН ЮЛ', () => {
    expect(isOGRNUL()('1175958036814')).toEqual(undefined);
  });

  it('должна возвращать сообщение об ошибке если value является невалидным ОГРН ЮЛ', () => {
    expect(isOGRNUL()('1175958000004')).toEqual('');
  });
});
