import { type TabProps as MuiTabProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { StyledTab } from './styles';

export type TabProps = WithoutEmotionSpecific<MuiTabProps>;

export const Tab = (props: TabProps) => <StyledTab {...props} />;
