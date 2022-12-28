import { ComponentStory } from '@storybook/react';

import { CircularProgressStory } from './CircularProgressStory';

export const CircularProgressStoryTemplate: ComponentStory<
  typeof CircularProgressStory
> = (args) => {
  return <CircularProgressStory {...args} />;
};

export default CircularProgressStoryTemplate;
