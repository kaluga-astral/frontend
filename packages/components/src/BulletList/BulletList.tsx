import { type PropsWithChildren } from 'react';

import { Wrapper } from './styles';

export type BulletListProps = PropsWithChildren<{
  className?: string;
}>;

/**
 * Список элементов с маркерами
 */
export const BulletList = (props: BulletListProps) => {
  const { children, ...restProps } = props;

  return <Wrapper {...restProps}>{children}</Wrapper>;
};
