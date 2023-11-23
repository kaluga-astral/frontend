import { Meta, StoryObj } from '@storybook/react';

import { DashboardLayout } from '../DashboardLayout';

/**
 * DashboardLayout.Main - компонент с основным контентом дашборда, состоит из элементов передаваемых в children.
 *
 * ### [Guide]()
 */
const meta: Meta<typeof DashboardLayout.Main> = {
  title: 'Components/DashboardLayout/Main',
  component: DashboardLayout.Main,
};

export default meta;

type Story = StoryObj<typeof DashboardLayout.Main>;

export const Interaction: Story = {
  args: {
    children: 'Main Content',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  return (
    <DashboardLayout>
      <DashboardLayout.Main>Main Content</DashboardLayout.Main>
    </DashboardLayout>
  );
};
