import {
  Collapse as MuiCollapse,
  type CollapseProps as MuiCollapseProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type CollapseProps = WithoutEmotionSpecific<MuiCollapseProps>;

export const Collapse = (props: CollapseProps) => <MuiCollapse {...props} />;
