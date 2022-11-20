import { ReactNode } from 'react';

import { PageAsideWrapper } from './styles';

export type PageAsideProps = {
  children: ReactNode;
};

export const PageAside = ({ children }: PageAsideProps) => {
  return <PageAsideWrapper>{children}</PageAsideWrapper>;
};
