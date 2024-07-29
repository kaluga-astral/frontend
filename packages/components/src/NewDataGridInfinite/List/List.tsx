import { forwardRef } from 'react';
import { type ListProps as VirtuosoListProps } from 'react-virtuoso';

import { Wrapper } from './styles';

type ListProps = Omit<VirtuosoListProps, 'ref'>;

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ children, ...listProps }, ref) => (
    <Wrapper ref={ref} {...listProps}>
      {children}
    </Wrapper>
  ),
);
