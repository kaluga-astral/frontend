import { Story } from '@storybook/react';

import { ExampleTemplate } from '../docs';

import { FlowButton } from './FlowButton';

export default {
  title: 'Components/FlowButton',
  component: FlowButton,
};

export const FlowButtonShowcase: Story = () => {
  return (
    <ExampleTemplate>
      <FlowButton smallText="Далее" fullWidth>
        Выпустить УНЭП
      </FlowButton>
    </ExampleTemplate>
  );
};

FlowButtonShowcase.parameters = { options: { showPanel: false } };

const Template: Story = (args) => (
  <FlowButton {...args} smallText="Далее" fullWidth>
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
