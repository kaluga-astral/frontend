import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { CircularProgress as component } from './CircularProgress';
import { CircularProgressStory } from './CircularProgressStory';
import { CircularProgressStoryTemplate } from './CircularProgressStoryTemplate';

export default {
  title: 'Components/CircularProgress',
  component,
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
} as ComponentMeta<typeof CircularProgressStory>;

export const CircularProgress: ComponentStory<typeof CircularProgressStory> =
  CircularProgressStoryTemplate.bind({});

CircularProgress.args = {
  color: 'primary',
  size: 'medium',
};
