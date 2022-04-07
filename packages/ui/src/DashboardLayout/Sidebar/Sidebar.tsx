import { ReactNode, forwardRef } from 'react';

import { StyledDrawer } from './styled';

type SideBarProps = { children: ReactNode };

export const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ children }, ref) => (
    <StyledDrawer ref={ref} open variant="persistent">
      {children}
    </StyledDrawer>
  )
);

export default SideBar;
