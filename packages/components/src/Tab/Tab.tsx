import { type TabProps as MuiTabProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { TabRoot } from './styles';

export type TabProps = WithoutEmotionSpecific<MuiTabProps>;

export const Tab = (props: TabProps) => <TabRoot {...props} />;
