import { ReactNode } from 'react';

import { Header } from './Header/';
import { SideBar } from './SideBar/';
import { Main } from './Main/';
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
DashboardLayout.SideBar = SideBar;
DashboardLayout.Main = Main;

export default DashboardLayout;
