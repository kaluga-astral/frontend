import { type Meta, type StoryObj } from '@storybook/react';

import { CircularProgress } from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  parameters: {
    options: {
      showPanel: true,
    },
    controls: {
      expanded: true,
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#B7C2CE' },
        { name: 'light', value: '#EBEEF1' },
      ],
    },
  },
};

type Story = StoryObj<typeof CircularProgress>;

export const Interaction: Story = {
  args: {
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export default meta;

export const Example = () => <CircularProgress />;
