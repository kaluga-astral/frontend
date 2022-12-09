import { StyledListItem } from './styles';
import { ListItemProps } from './types';

export const ListItem = (props: ListItemProps) => {
  return <StyledListItem {...props} />;
};
