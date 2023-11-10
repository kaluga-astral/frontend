import type { ListProps as MuiListProps } from '@mui/material/List';
import MuiList from '@mui/material/List';

import type { WithoutEmotionSpecific } from '../types';

export type ListProps = WithoutEmotionSpecific<MuiListProps>;

export const List = (props: ListProps) => {
  return <MuiList {...props} />;
};
