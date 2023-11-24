import { StyledListItem } from './styles';
import { type ListItemProps } from './types';

export const ListItem = (props: ListItemProps) => {
  return <StyledListItem {...props} />;
};
