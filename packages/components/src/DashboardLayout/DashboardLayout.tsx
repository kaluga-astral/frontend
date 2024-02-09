import { type ReactNode } from 'react';

import { DashboardSidebarProvider } from '../DashboardSidebarProvider';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { DashboardLayoutRoot } from './styles';

export type DashBoardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = (props: DashBoardLayoutProps) => {
  const { children } = props;

  return (
    <DashboardSidebarProvider>
      <DashboardLayoutRoot>{children}</DashboardLayoutRoot>
    </DashboardSidebarProvider>
  );
};

DashboardLayout.Header = Header;
DashboardLayout.Sidebar = Sidebar;
DashboardLayout.Main = Main;

export default DashboardLayout;
