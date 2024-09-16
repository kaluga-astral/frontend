import { Typography, type TypographyProps } from '../Typography';
import { type WithoutEmotionSpecific } from '../types';

import { Icon, Wrapper } from './styles';

export type BulletListItemProps = WithoutEmotionSpecific<TypographyProps>;

/**
 * Элемент с маркерами
 */
export const BulletListItem = (props: BulletListItemProps) => {
  const { children, ...restProps } = props;

  return (
    <Wrapper>
      <Icon />
      <Typography component="span" {...restProps}>
        {children}
      </Typography>
    </Wrapper>
  );
};
