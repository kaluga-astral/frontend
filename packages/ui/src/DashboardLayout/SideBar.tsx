import { forwardRef } from 'react';

import { DrawerStyle } from './styled';
import { SideBarProps } from './types';

export const SideBar: React.FC<SideBarProps> = forwardRef<
  HTMLDivElement,
  SideBarProps
>(({ width = 240, children }, ref) => (
  <DrawerStyle
    ref={ref}
    width={width}
    open
    className="sidebar"
    variant="persistent"
  >
    {children}
  </DrawerStyle>
));

export default SideBar;
