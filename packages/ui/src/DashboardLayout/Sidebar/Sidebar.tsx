import { ReactNode, forwardRef } from 'react';

import { StyledDrawer } from './styled';

type SidebarProps = { children: ReactNode };

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children }, ref) => (
    <StyledDrawer ref={ref} open variant="persistent">
      {children}
    </StyledDrawer>
  )
);

export default Sidebar;
