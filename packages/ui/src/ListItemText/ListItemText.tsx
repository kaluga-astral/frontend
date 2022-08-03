import MuiListItemText, {
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material/ListItemText';

export type ListItemTextProps = MuiListItemTextProps & {};

export const ListItemText = (props: ListItemTextProps) => {
  return <MuiListItemText {...props} />;
};
