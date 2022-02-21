import { InfoFillSm } from '@astral/icons';
import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const Template: Story = () => {
  return (
    <Stack gap={2} direction="column">
      <Avatar variant="circular">
        <InfoFillSm />
      </Avatar>
      <Avatar variant="rounded">
        <InfoFillSm />
      </Avatar>
      <Avatar variant="square">
        <InfoFillSm />
      </Avatar>
    </Stack>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
