import { type ReactNode, forwardRef } from 'react';

import { MainRoot } from './styles';

export type MainProps = { children: ReactNode };

export const Main = forwardRef<HTMLDivElement, MainProps>(
  ({ children }, ref) => {
    return <MainRoot ref={ref}>{children}</MainRoot>;
  },
);

export default Main;
