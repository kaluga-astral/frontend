import { FC, forwardRef } from 'react';

import { StyledMain } from './styled';

export const Main: FC = forwardRef(({ children, ref }) => {
  return <StyledMain ref={ref}>{children}</StyledMain>;
});

export default Main;
