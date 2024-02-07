import { type ReactNode } from 'react';

import { PageLayoutContainerWrapper } from './styles';

export type PageLayoutContainerProps = {
  children: ReactNode;
  className?: string;
};

export const PageLayoutContainer = ({
  children,
  className,
}: PageLayoutContainerProps) => (
  <PageLayoutContainerWrapper className={className}>
    {children}
  </PageLayoutContainerWrapper>
);
