import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type ListSubheaderProps = WithoutEmotionSpecific<MuiListSubheaderProps>;

export const ListSubheader = (props: ListSubheaderProps) => (
  <MuiListSubheader {...props} />
);
