import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { TagBadge } from '.';

export default {
  title: 'Components/TagBadge',
  component: TagBadge,
};

const Template: Story = (args) => <TagBadge {...args} />;

export const ShowcaseColor: Story = () => (
  <Stack direction="column" gap={2}>
    <TagBadge color="primary" badgeContent={'12'} />
    <TagBadge color="grey" badgeContent={'12'} />
    <TagBadge color="white" badgeContent={'12'} />
    <TagBadge color="warning" badgeContent={'12'} />
    <TagBadge color="errorLight" badgeContent={'12'} />
    <TagBadge color="error" badgeContent={'12'} />
    <TagBadge color="success" badgeContent={'12'} />
  </Stack>
);

ShowcaseColor.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  badgeContent: '12',
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
