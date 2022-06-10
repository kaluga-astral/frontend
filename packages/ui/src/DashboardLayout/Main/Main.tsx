import { ReactNode, forwardRef } from 'react';

import { MainRoot } from './styled';

export type MainProps = { children: ReactNode };

export const Main = forwardRef<HTMLDivElement, MainProps>(
  ({ children }, ref) => {
    return <MainRoot ref={ref}>{children}</MainRoot>;
  },
);

export default Main;
