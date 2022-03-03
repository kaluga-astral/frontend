import { StyledListItemButton } from './styled';
import { ListItemButtonProps } from './types';

export const ListItemButton = ({ ...props }: ListItemButtonProps) => {
  return <StyledListItemButton {...props} disableRipple />;
};
