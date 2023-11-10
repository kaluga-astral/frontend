import type { Story } from '@storybook/react';

import { ExampleTemplate } from '../docs';
import { LegacyGrid } from '../LegacyGrid';

import { FlowButton } from './FlowButton';

export default {
  title: 'Components/FlowButton',
  component: FlowButton,
};

export const FlowButtonShowcase: Story = () => {
  return (
    <ExampleTemplate>
      <LegacyGrid container justifyContent="flex-start" spacing={4}>
        <FlowButton targetText="Далее">Выпустить УНЭП</FlowButton>
      </LegacyGrid>
    </ExampleTemplate>
  );
};

FlowButtonShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => (
  <FlowButton {...args} targetText="Далее">
    Выпустить УНЭП
  </FlowButton>
);

export const FlowButtonStory = Template.bind({});

FlowButtonStory.storyName = 'FlowButton';

FlowButtonStory.args = {
  disabled: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};

FlowButtonStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
