import { forwardRef } from 'react';

import { StyledDrawer } from './styled';

export const SideBar: React.FC = forwardRef<HTMLDivElement>(
  ({ children }, ref) => (
    <StyledDrawer ref={ref} open className="sidebar" variant="persistent">
      {children}
    </StyledDrawer>
  )
);

export default SideBar;
