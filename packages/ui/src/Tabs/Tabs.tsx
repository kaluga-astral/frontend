import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type TabsProps = WithoutEmotionSpecific<MuiTabsProps>;

export const Tabs = (props: TabsProps) => <MuiTabs {...props} />;
