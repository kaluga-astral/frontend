import {
  ListSubheader as MuiListSubheader,
  type ListSubheaderProps as MuiListSubheaderProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type ListSubheaderProps = WithoutEmotionSpecific<MuiListSubheaderProps>;

export const ListSubheader = (props: ListSubheaderProps) => (
  <MuiListSubheader {...props} />
);
