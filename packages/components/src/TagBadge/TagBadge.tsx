import { BadgeColor, BadgeProps } from '../Badge';

import { StyledBadge } from './styles';
import { getCheckableTagBadgeBgColor } from './utils';

export type TagBadgeProps = Omit<BadgeProps, 'color' | 'withBorder'> & {
  /**
   * CheckableTag в состоянии checked
   */
  checked?: boolean;
  /**
   * CheckableTag в состоянии disabled
   */
  disabled?: boolean;
  /**
   * Кастомный цвет для состояния checked
   */
  checkedColor?: BadgeColor;
  /**
   * Цвет Badge
   */
  color?: BadgeColor;
};

/**
 * @description Badge для использования внутри компонента Tag
 */
export const TagBadge = ({
  color = 'primary',
  checked,
  disabled,
  checkedColor,
  ...props
}: TagBadgeProps) => {
  return (
    <StyledBadge
      withBorder={false}
      color={getCheckableTagBadgeBgColor({
        disabled,
        checked,
        checkedColor,
        color,
      })}
      {...props}
    />
  );
};
