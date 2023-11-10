import { DashboardLayout } from '../DashboardLayout';

import type { HeaderProps } from './Header';
import type { SidebarProps } from './Sidebar';

export type DashboardLayoutStoryProps = {
  header: HeaderProps;
  sidebar: SidebarProps;
};

export const DashboardLayoutStory = (props: DashboardLayoutStoryProps) => {
  const { header, sidebar } = props;

  return (
    <DashboardLayout>
      <DashboardLayout.Header {...header} />
      <DashboardLayout.Sidebar {...sidebar} />
      <DashboardLayout.Main>main-content</DashboardLayout.Main>
    </DashboardLayout>
  );
};

export default DashboardLayoutStory;
