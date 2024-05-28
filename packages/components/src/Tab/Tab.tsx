import { type ElementType } from 'react';
import { type TabProps as MuiTabProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { StyledTab } from './styles';

export type TabProps<
  TComponent extends ElementType,
  TComponentProps = {},
> = WithoutEmotionSpecific<MuiTabProps<TComponent, TComponentProps>> & {
  component?: TComponent;
};

export const Tab = <
  TComponent extends ElementType = 'div',
  TComponentProps = {},
>(
  props: TabProps<TComponent, TComponentProps>,
) => <StyledTab {...props} />;
