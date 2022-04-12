import { FC } from 'react';

import { HeaderProps } from '../Header/types';
import { DashboardLayout } from '../DashboardLayout';

export type DashboardLayoutStoryProps = {
  header: HeaderProps;
};

export const DashboardLayoutStory: FC<DashboardLayoutStoryProps> = (props) => {
  const {
    header: {
      nav: { product },
      profile,
    },
  } = props;

  return (
    <DashboardLayout>
      <DashboardLayout.Header nav={{ product }} profile={profile} />
      <DashboardLayout.Sidebar>sidebar</DashboardLayout.Sidebar>
      <DashboardLayout.Main>main-content</DashboardLayout.Main>
    </DashboardLayout>
  );
};

export default DashboardLayoutStory;
