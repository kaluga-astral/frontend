import { ReactNode } from 'react';

import { PageLayoutContainerWrapper } from './styles';

export type PageLayoutContainerProps = {
  children: ReactNode;
};

export const PageLayoutContainer = ({ children }: PageLayoutContainerProps) => (
  <PageLayoutContainerWrapper>{children}</PageLayoutContainerWrapper>
);
