/**
 * @description утилита для генерации строковых чисел с заданным количеством символов, если число символов числа меньше необходимого
 * @example  zeroPad(1, 3) -> '001'
 * @param {number} value число которое надо дополнить нулями
 * @param {number} length число обозначающее необходимую длину строки
 */
export const zeroPad = (value: number, length: number) => {
  const neededZero = length - value.toString().length;

  if (neededZero <= 0) {
    return value;
  }

  return new Array(neededZero).fill('0').join('') + value;
};
