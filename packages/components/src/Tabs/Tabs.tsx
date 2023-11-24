import { Tabs as MuiTabs, type TabsProps as MuiTabsProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type TabsProps = WithoutEmotionSpecific<MuiTabsProps>;

export const Tabs = (props: TabsProps) => <MuiTabs {...props} />;
