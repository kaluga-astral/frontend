import { styled } from '../styles/index';
import { Badge, BadgeColor } from '../Badge';

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
}) => {
  if (disabled) {
    return 'grey';
  }

  if (checked) {
    return checkedColor || 'white';
  }

  return color;
};

export const StyledBadge = styled(Badge)`
  vertical-align: text-top;

  & span.MuiBadge-badge {
    position: static;

    transform: none;
  }
`;
