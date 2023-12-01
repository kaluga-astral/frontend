import { Tab as MuiTab, type TabProps as MuiTabProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type TabProps = WithoutEmotionSpecific<MuiTabProps>;

export const Tab = (props: TabProps) => <MuiTab {...props} />;
