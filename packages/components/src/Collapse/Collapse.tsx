import {
  Collapse as MuiCollapse,
  CollapseProps as MuiCollapseProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type CollapseProps = WithoutEmotionSpecific<MuiCollapseProps>;

export const Collapse = (props: CollapseProps) => <MuiCollapse {...props} />;
