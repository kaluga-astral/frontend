import { ReactNode } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { StyledDashboard } from './styled';

interface DashBoardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <StyledDashboard
      container
      templateColumns="auto 1fr"
      templateRows="auto 1fr"
    >
      {children}
    </StyledDashboard>
  );
};

DashboardLayout.Header = Header;
DashboardLayout.Sidebar = Sidebar;
DashboardLayout.Main = Main;

export default DashboardLayout;
