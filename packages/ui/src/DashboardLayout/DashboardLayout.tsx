import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { DashBoardLayoutProps } from './types';
import { Root } from './styled';

export const DashboardLayout = (props: DashBoardLayoutProps) => {
  const { children } = props;

  return <Root>{children}</Root>;
};

DashboardLayout.Header = Header;
DashboardLayout.Sidebar = Sidebar;
DashboardLayout.Main = Main;

export default DashboardLayout;
