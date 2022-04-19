import { FC } from 'react';

import { DashboardLayout } from '../DashboardLayout';

import { HeaderProps } from './Header/types';

export type DashboardLayoutStoryProps = {
  header: HeaderProps;
};

export const DashboardLayoutStory: FC<DashboardLayoutStoryProps> = (props) => {
  const { header } = props;

  return (
    <DashboardLayout>
      <DashboardLayout.Header {...header} />
      <DashboardLayout.Sidebar>sidebar</DashboardLayout.Sidebar>
      <DashboardLayout.Main>main-content</DashboardLayout.Main>
    </DashboardLayout>
  );
};

export default DashboardLayoutStory;
