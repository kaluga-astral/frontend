import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type DividerProps = WithoutEmotionSpecific<MuiDividerProps>;

export const Divider = (props: DividerProps) => <MuiDivider {...props} />;
