import { ReactNode, forwardRef } from 'react';

import { StyledMain } from './styled';

type MainProps = { children: ReactNode };

export const Main = forwardRef<HTMLDivElement, MainProps>(
  ({ children }, ref) => {
    return <StyledMain ref={ref}>{children}</StyledMain>;
  }
);

export default Main;
