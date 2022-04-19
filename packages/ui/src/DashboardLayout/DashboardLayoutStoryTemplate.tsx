import { ComponentStory } from '@storybook/react';

import { DashboardLayoutStory } from './DashboardLayoutStory';

export const DashboardLayoutStoryTemplate: ComponentStory<
  typeof DashboardLayoutStory
> = (args) => {
  return <DashboardLayoutStory {...args} />;
};

export default DashboardLayoutStoryTemplate;
