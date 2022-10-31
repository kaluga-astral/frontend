import { Tab as MuiTab, TabProps as MuiTabProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type TabProps = WithoutEmotionSpecific<MuiTabProps>;

export const Tab = (props: TabProps) => <MuiTab {...props} />;
