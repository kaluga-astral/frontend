import MuiList, { ListProps as MuiListProps } from '@mui/material/List';

import { WithoutEmotionSpecific } from '../types';

export type ListProps = WithoutEmotionSpecific<MuiListProps>;

export const List = (props: ListProps) => {
  return <MuiList {...props} />;
};
