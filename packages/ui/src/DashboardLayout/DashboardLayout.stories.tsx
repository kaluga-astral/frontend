import { Story } from '@storybook/react';

import { LOGO_SRC } from './constants';
import { DashboardLayout } from './DashboardLayout';

export default {
  title: 'Components/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default: Story = () => {
  return (
    <DashboardLayout>
      <DashboardLayout.Header
        logoAlt="Астрал.ОФД"
        logoSrc={LOGO_SRC}
        LogoLink={({ Logo }) => <a href="/">{Logo}</a>}
      />
      <DashboardLayout.Sidebar>sidebar</DashboardLayout.Sidebar>
      <DashboardLayout.Main>main-content</DashboardLayout.Main>
    </DashboardLayout>
  );
};
