import { ReactNode } from 'react';

import { DashboardLayout } from '@example/shared';

import { Sidebar } from './Sidebar';
import { Header } from './Header';

type Props = { children: ReactNode };

export const MainLayout = ({ children }: Props) => (
  <DashboardLayout>
    <Header />
    <Sidebar />
    <DashboardLayout.Main>{children}</DashboardLayout.Main>
  </DashboardLayout>
);
