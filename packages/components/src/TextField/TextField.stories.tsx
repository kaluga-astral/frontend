import { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Interaction: Story = {
  args: {
    label: 'Имя',
    helperText: 'Смотрите имя в паспорте',
  },
};

export const Example: Story = {
  render: (args) => <TextField {...args} />,
};
