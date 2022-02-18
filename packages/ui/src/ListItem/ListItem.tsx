import { StyledListItem } from './styled';
import { ListItemProps } from './types';

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return <StyledListItem {...props}>{children}</StyledListItem>;
};
