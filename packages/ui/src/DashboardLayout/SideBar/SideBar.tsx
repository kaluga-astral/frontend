import { FC, forwardRef } from 'react';

import { StyledDrawer } from './styled';

export const SideBar: FC = forwardRef<HTMLDivElement>(({ children }, ref) => (
  <StyledDrawer ref={ref} open variant="persistent">
    {children}
  </StyledDrawer>
));

export default SideBar;
