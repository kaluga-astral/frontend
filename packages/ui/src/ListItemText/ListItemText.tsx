import MuiListItemText, {
  ListItemTextProps as MuiListItemTextProps,
} from '@mui/material/ListItemText';

import { WithoutEmotionSpecific } from '../types';

export type ListItemTextProps = WithoutEmotionSpecific<MuiListItemTextProps>;

export const ListItemText = (props: ListItemTextProps) => {
  return <MuiListItemText {...props} />;
};
