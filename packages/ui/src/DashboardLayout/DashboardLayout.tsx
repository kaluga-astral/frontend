import React, { Children } from 'react';

import Header from './Header';
import { DashboardStyle } from './styled';

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashBoardLayoutProps) => {
  const [HeaderComponent, SideBarComponent, MainComponent, ...restChildren] =
    Children.toArray(children);

  return (
    <DashboardStyle>
      {HeaderComponent || <Header />}
      {SideBarComponent || null}
      {MainComponent || null}
      {restChildren}
    </DashboardStyle>
  );
};

DashboardLayout.Header = Header;

export default DashboardLayout;
