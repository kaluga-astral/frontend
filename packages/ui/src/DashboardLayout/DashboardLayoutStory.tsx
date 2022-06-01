import { FC } from 'react';
// import {
//   CompanyOutlineMd,
//   ProfileOutlineMd,
//   SettingsFillMd,
// } from '@astral/icons';

import { DashboardLayout } from '../DashboardLayout';

import { HeaderProps } from './Header';

export type DashboardLayoutStoryProps = {
  header: HeaderProps;
};

export const DashboardLayoutStory: FC<DashboardLayoutStoryProps> = (props) => {
  const { header } = props;

  return (
    <DashboardLayout>
      <DashboardLayout.Header {...header} />
      <DashboardLayout.Sidebar
      // nav={[
      //   {
      //     icon: <ProfileOutlineMd />,
      //     title: 'Главная',
      //   },
      //   {
      //     active: true,
      //     icon: <CompanyOutlineMd />,
      //     title: 'Документы',
      //     children: [{}],
      //   },
      //   {
      //     icon: <SettingsFillMd />,
      //     title: 'Контрагенты',
      //   },
      // ]}
      />
      <DashboardLayout.Main>main-content</DashboardLayout.Main>
    </DashboardLayout>
  );
};

export default DashboardLayoutStory;
