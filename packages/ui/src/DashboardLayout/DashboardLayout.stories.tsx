import { Box } from '@mui/material';
import { Story } from '@storybook/react';

import { DashboardLayout } from './DashboardLayout';

export default {
  title: 'Components/DashboardLayout',
  component: DashboardLayout,
};

const LOGO_SRC: string = 'https://ofd.astralnalog.ru/images/FullLogo.png';

export const Dashboard: Story = () => {
  return (
    <Box border="1px solid #dfdfdf">
      <DashboardLayout>
        <DashboardLayout.Header
          logoAlt="Астрал.ОФД"
          logoSrc={LOGO_SRC}
          LogoLinkComponent={({ Logo }) => <a href="/">{Logo}</a>}
        />
        <DashboardLayout.SideBar />
        <DashboardLayout.Main />
      </DashboardLayout>
    </Box>
  );
};
