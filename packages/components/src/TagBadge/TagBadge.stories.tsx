import { Stack } from '@mui/material';
import { type Meta, type StoryObj } from '@storybook/react';

import { Tag } from '../Tag';

import { TagBadge, type TagBadgeProps } from '.';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=284-7165)
 * ### [Guide]()
 */

const meta: Meta<typeof TagBadge> = {
  title: 'Components/TagBadge',
  component: TagBadge,
};

export default meta;

type Story = StoryObj<typeof TagBadge>;

export const Interaction: Story = {
  args: {
    color: 'primary',
    badgeContent: '12',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const baseProps = {
  label: 'Тэг',
  endAddon: (props: TagBadgeProps) => (
    <TagBadge {...props} badgeContent={'12'} />
  ),
};

export const Example = () => (
  <Tag variant="contained" color="primary" {...baseProps} />
);

export const Color = () => (
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

export const Default = () => <TagBadge color="primary" badgeContent="12" />;
