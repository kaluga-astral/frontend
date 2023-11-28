import MuiListItemText, {
  type ListItemTextProps as MuiListItemTextProps,
} from '@mui/material/ListItemText';

import { type WithoutEmotionSpecific } from '../types';

export type ListItemTextProps = WithoutEmotionSpecific<MuiListItemTextProps>;

export const ListItemText = (props: ListItemTextProps) => {
  return <MuiListItemText {...props} />;
};
