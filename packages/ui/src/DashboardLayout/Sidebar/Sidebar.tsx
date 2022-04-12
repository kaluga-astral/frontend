import { ReactNode, forwardRef } from 'react';

import { StyledDrawer } from './styled';

type SidebarProps = { children: ReactNode };

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children }, ref) => <StyledDrawer ref={ref}>{children}</StyledDrawer>
);

export default Sidebar;
