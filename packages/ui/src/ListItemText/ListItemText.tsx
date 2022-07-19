import { ListItemTextProps } from '@mui/material';

import { StyledListItemText } from './styles';

export const ListItemText = ({ ...props }: ListItemTextProps) => {
  return <StyledListItemText {...props} />;
};
