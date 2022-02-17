import React, { Children } from 'react';

import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';
import { DashboardStyle } from './styled';

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashBoardLayoutProps) => {
  const [HeaderComponent, SideBarComponent, MainComponent, ...restChildren] =
    Children.toArray(children);

  return (
    <DashboardStyle
      container
      templateColumns={'auto 1fr'}
      templateRows={'auto 1fr'}
      templateAreas={`"header header"
                      "sidebar main"`}
    >
      {HeaderComponent || <Header />}
      {SideBarComponent || <SideBar />}
      {MainComponent || <Main />}
      {restChildren}
    </DashboardStyle>
  );
};

DashboardLayout.Header = Header;
DashboardLayout.SideBar = SideBar;
DashboardLayout.Main = Main;

export default DashboardLayout;
