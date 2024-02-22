import { type ReactNode } from 'react';

import { DashboardSidebarProvider } from '../DashboardSidebarProvider';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { Wrapper } from './styles';

export type DashBoardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = (props: DashBoardLayoutProps) => {
  const { children } = props;

  return (
    <DashboardSidebarProvider>
      <Wrapper>{children}</Wrapper>
    </DashboardSidebarProvider>
  );
};

DashboardLayout.Header = Header;
DashboardLayout.Sidebar = Sidebar;
DashboardLayout.Main = Main;

export default DashboardLayout;
