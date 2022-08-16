import { ReactNode } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { DashboardLayoutRoot } from './styles';

export type DashBoardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = (props: DashBoardLayoutProps) => {
  const { children } = props;

  return <DashboardLayoutRoot>{children}</DashboardLayoutRoot>;
};

DashboardLayout.Header = Header;
DashboardLayout.Sidebar = Sidebar;
DashboardLayout.Main = Main;

export default DashboardLayout;
