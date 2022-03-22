import { Box } from '@mui/material';
import { Story } from '@storybook/react';

import { LOGO_SRC } from './constants';
import { DashboardLayout } from './DashboardLayout';

export default {
  title: 'Components/DashboardLayout',
  component: DashboardLayout,
};

export const Default: Story = () => {
  return (
    <Box border="1px solid #dfdfdf">
      <DashboardLayout>
        <DashboardLayout.Header
          logoAlt="Астрал.ОФД"
          logoSrc={LOGO_SRC}
          LogoLink={({ Logo }) => <a href="/">{Logo}</a>}
        />
        <DashboardLayout.SideBar />
        <DashboardLayout.Main />
      </DashboardLayout>
    </Box>
  );
};
