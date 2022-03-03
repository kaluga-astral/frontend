import { StyledListItem } from './styled';
import { ListItemProps } from './types';

export const ListItem = ({ ...props }: ListItemProps) => {
  return <StyledListItem {...props} />;
};
