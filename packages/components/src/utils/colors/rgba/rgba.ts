import { type AnyColor, colord } from 'colord';

/**
 * Функция для преобразования цвета в формат rgba
 * @example  rgba('#072D57', 0.15) -> 'rgba(7, 45, 87, 0.15)'
 * @param {AnyColor} color цвет, который преобразуем в rgba
 * @param {number} alpha значение альфа-канала, которое необходимо применить к цвету
 */
export const rgba = (color: AnyColor, alpha: number) =>
  colord(color).alpha(alpha).toRgbString();
