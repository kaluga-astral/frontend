import { ReactNode } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { Root } from './styled';

export type DashBoardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = (props: DashBoardLayoutProps) => {
  const { children } = props;

  return <Root>{children}</Root>;
};

DashboardLayout.Header = Header;
DashboardLayout.Sidebar = Sidebar;
DashboardLayout.Main = Main;

export default DashboardLayout;
