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
      <NavBar.Item icon={<HomeOutlineMd />} title={'NavBarItem '}>
        <NavBar.ItemRoute selected>
          <Link style={{ textDecoration: 'none' }} href="/ItemRoute">
            ItemRoute
          </Link>
        </NavBar.ItemRoute>
      </NavBar.Item>
      <NavBar.Route icon={<HomeOutlineMd />}>NavBarRoute</NavBar.Route>
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
