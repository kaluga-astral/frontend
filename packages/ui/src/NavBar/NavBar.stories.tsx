import { HomeOutlineMd } from '@astral/icons';
import { Link, Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
};

const Template: Story = (args) => <NavBar {...args} />;

export const ShowcaseColor: Story = () => (
  <Stack direction="column" gap={2}>
    <NavBar>
      <NavBar.Route icon={<HomeOutlineMd />} title={'123123'}>
        <NavBar.SubRoute selected>
          <Link href="/321">Отправленные</Link>
        </NavBar.SubRoute>
      </NavBar.Route>
      <NavBar.Route icon={<HomeOutlineMd />} title={'123123'} selected>
        <NavBar.SubRoute selected>
          <Link href="/123">Отправленные</Link>
        </NavBar.SubRoute>
      </NavBar.Route>
    </NavBar>
  </Stack>
);

ShowcaseColor.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
