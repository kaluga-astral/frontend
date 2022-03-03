import {
  ListItemTextProps,
  ListItemText as MuiListItemText,
} from '@mui/material';

export const ListItemText = ({ ...props }: ListItemTextProps) => {
  return <MuiListItemText {...props} />;
};
