import { BadgeColor } from '../../../Badge';

/**
 * @description Утилита для получения цвета TagBadge,
 * в зависимости от его состояния disabled и checked, и полученного цвета color из props
 * @param {Object} disabled - Состояние disabled тега.
 * @param {Object} checked - Состояние checked тега.
 * @param {Object} checkedColor - Кастомный цвет для состояния checked.
 * @param {Object} color - Цвет Badge, полученный из props.
 */
export const getCheckableTagBadgeBgColor = ({
  disabled,
  checked,
  checkedColor,
  color,
}: {
  checked?: boolean;
  disabled?: boolean;
  checkedColor?: BadgeColor;
  color: BadgeColor;
}): BadgeColor => {
  if (disabled) {
    return 'grey';
  }

  if (checked) {
    return checkedColor || 'white';
  }

  return color;
};
