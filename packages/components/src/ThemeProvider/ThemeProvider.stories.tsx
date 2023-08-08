import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from './ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/Theme/ThemeProvider',
  component: ThemeProvider,
};

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const Interaction: Story = {
  args: {
    children: 'Электронная отчетность и документооборот',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const App = () => <div />;
