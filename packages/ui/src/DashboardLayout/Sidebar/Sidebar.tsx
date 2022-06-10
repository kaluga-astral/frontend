import { ReactNode, forwardRef } from 'react';

import { SidebarRoot, SidebarToggler } from './styled';

export type SidebarProps = { children: ReactNode };

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children }, ref) => {
    return (
      <SidebarRoot ref={ref}>
        <nav>{children}</nav>
        <SidebarToggler variant="text">Свернуть меню</SidebarToggler>
      </SidebarRoot>
    );
  },
);

export default Sidebar;
