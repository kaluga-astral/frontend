/**
 * @description текстовая маска содержащая упоминания элементов даты
 * @example DD.MM.YYYY.hh.mm.ss
 */
export type DateMask = string;

export enum DateMaskElements {
  day = 'DD',
  month = 'MM',
  year = 'YYYY',
  hour = 'hh',
  minute = 'mm',
  second = 'ss',
}
