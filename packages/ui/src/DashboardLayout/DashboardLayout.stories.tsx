import { Box } from '@mui/material';
import { Story } from '@storybook/react';

import { DashboardLayout as DashBoardLayoutComponent } from './DashboardLayout';

export default {
  title: 'Components/DashboardLayout',
  component: DashBoardLayoutComponent,
};

const LOGO_SRC: string = 'https://ofd.astralnalog.ru/images/FullLogo.png';

export const DashBoardLayout: Story = () => {
  return (
    <Box border={'1px solid #dfdfdf'}>
      <DashBoardLayoutComponent>
        <DashBoardLayoutComponent.Header logoSrc={LOGO_SRC}>
          Профиль
        </DashBoardLayoutComponent.Header>
      </DashBoardLayoutComponent>
    </Box>
  );
};
