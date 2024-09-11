import { type ListProps as MuiListProps } from '@mui/material/List';

import { type WithoutEmotionSpecific } from '../types';

import { StyledList } from './styles';

export type BulletListProps = Omit<
  WithoutEmotionSpecific<MuiListProps>,
  'dense'
>;

export const BulletList = (props: BulletListProps) => {
  return <StyledList {...props} />;
};
