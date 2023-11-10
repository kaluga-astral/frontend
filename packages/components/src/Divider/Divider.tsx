import type { DividerProps as MuiDividerProps } from '@mui/material';
import { Divider as MuiDivider } from '@mui/material';

import type { WithoutEmotionSpecific } from '../types';

export type DividerProps = WithoutEmotionSpecific<MuiDividerProps>;

export const Divider = (props: DividerProps) => <MuiDivider {...props} />;
