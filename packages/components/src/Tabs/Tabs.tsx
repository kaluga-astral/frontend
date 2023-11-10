import type { TabsProps as MuiTabsProps } from '@mui/material';
import { Tabs as MuiTabs } from '@mui/material';

import type { WithoutEmotionSpecific } from '../types';

export type TabsProps = WithoutEmotionSpecific<MuiTabsProps>;

export const Tabs = (props: TabsProps) => <MuiTabs {...props} />;
