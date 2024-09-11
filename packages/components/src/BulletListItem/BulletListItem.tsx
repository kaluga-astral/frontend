import { type TypographyProps } from '../Typography';
import { type WithoutEmotionSpecific } from '../types';

import { Icon, ListItem, Root } from './styles';

export type ListItemProps = WithoutEmotionSpecific<TypographyProps>;

/**
 * Элемент с маркерами
 */
export const BulletListItem = (props: ListItemProps) => {
  return (
    <Root>
      <Icon />
      <ListItem component="li" {...props} />
    </Root>
  );
};
