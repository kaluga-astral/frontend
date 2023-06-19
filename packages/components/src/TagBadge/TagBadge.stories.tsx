import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import { Tag } from '../Tag';

import { TagBadge, TagBadgeProps } from '.';

export default {
  title: 'Components/TagBadge',
  component: TagBadge,
};

const Template: Story = (args) => <TagBadge {...args} />;

const baseProps = {
  label: 'Тэг',
  endAddon: (props: TagBadgeProps) => (
    <TagBadge {...props} badgeContent={'12'} />
  ),
};

export const ShowcaseColor: Story = () => (
  <Stack direction="column" gap={2}>
    <Stack direction="row" gap={2}>
      <Tag color="warning" variant="contained" {...baseProps} />
      <Tag color="grey" variant="contained" {...baseProps} />
      <Tag color="warning" variant="light" {...baseProps} />
      <Tag color="error" variant="light" {...baseProps} />
      <Tag color="success" variant="light" {...baseProps} />
    </Stack>
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
