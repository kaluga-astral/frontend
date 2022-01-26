import { Stack } from '@mui/material';
import { Story } from '@storybook/react';

import Tag from './Tag';
import { TagProps } from './types';

export default {
  title: 'Components/Tag',
  component: Tag,
};

const Template: Story<TagProps> = (args) => <Tag {...args} label="Tag" />;

export const Showcase: Story = () => (
  <Stack direction="row" gap={2}>
    <Stack gap={2}>
      <Tag label="Tag" variant="regular" />
      <Tag label="Tag" variant="rounded" />
    </Stack>
  </Stack>
);

Showcase.parameters = { options: { showPanel: false } };

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  size: 'medium',
};
Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
