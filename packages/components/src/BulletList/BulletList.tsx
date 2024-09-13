import { type ListProps as MuiListProps } from '@mui/material/List';

import { type WithoutEmotionSpecific } from '../types';

import { Wrapper } from './styles';

export type BulletListProps = Omit<
  WithoutEmotionSpecific<MuiListProps>,
  'dense'
>;

/**
 * Список элементов с маркерами
 */
export const BulletList = (props: BulletListProps) => {
  const { children, ...restProps } = props;

  return <Wrapper {...restProps}>{children}</Wrapper>;
};
