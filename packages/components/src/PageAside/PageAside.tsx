import { type ReactNode } from 'react';

import { Wrapper } from './styles';

export type PageAsideProps = {
  children: ReactNode;
};

export const PageAside = ({ children }: PageAsideProps) => {
  return <Wrapper>{children}</Wrapper>;
};
