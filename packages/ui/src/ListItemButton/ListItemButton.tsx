import { StyledListItemButton } from './styled';
import { ListItemButtonProps } from './types';

export const ListItemButton = ({ children, ...props }: ListItemButtonProps) => {
  return <StyledListItemButton {...props}>{children}</StyledListItemButton>;
};
