import { type ReactNode } from 'react';

import { Wrapper } from './styles';

export type PageLayoutContainerProps = {
  children: ReactNode;
  className?: string;
};

export const PageLayoutContainer = ({
  children,
  className,
}: PageLayoutContainerProps) => (
  <Wrapper className={className}>{children}</Wrapper>
);
