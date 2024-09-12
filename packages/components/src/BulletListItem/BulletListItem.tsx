import { Typography, type TypographyProps } from '../Typography';
import { type WithoutEmotionSpecific } from '../types';

import { Icon, Wrapper } from './styles';

export type ListItemProps = WithoutEmotionSpecific<TypographyProps>;

/**
 * Элемент с маркерами
 */
export const BulletListItem = (props: ListItemProps) => {
  const { children } = props;

  return (
    <Wrapper>
      <Icon />
      <Typography component="span" {...props}>
        {children}
      </Typography>
    </Wrapper>
  );
};
