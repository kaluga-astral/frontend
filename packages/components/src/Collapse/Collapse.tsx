import type { CollapseProps as MuiCollapseProps } from '@mui/material';
import { Collapse as MuiCollapse } from '@mui/material';

import type { WithoutEmotionSpecific } from '../types';

export type CollapseProps = WithoutEmotionSpecific<MuiCollapseProps>;

export const Collapse = (props: CollapseProps) => <MuiCollapse {...props} />;
