import { ComponentStory } from '@storybook/react';

import { DashboardLayoutStory } from './DashboardLayoutStory';

export const Template: ComponentStory<typeof DashboardLayoutStory> = (args) => {
  return <DashboardLayoutStory {...args} />;
};

export default Template;
