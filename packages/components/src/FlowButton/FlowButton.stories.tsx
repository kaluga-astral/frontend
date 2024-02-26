import { type Meta, type StoryObj } from '@storybook/react';

import { FlowButton } from './FlowButton';

/**
 * FlowButton — это кнопка, которая запускает потоки.
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof FlowButton> = {
  title: 'Components/FlowButton',
  component: FlowButton,
};

export default meta;

type Story = StoryObj<typeof FlowButton>;

export const Interaction: Story = {
  args: {
    children: 'Выпустить УНЭП',
  },
  parameters: {
    docs: {
      disable: true,
    },
    options: {
      showPanel: true,
    },
    controls: {
      expanded: true,
    },
  },
};

export const Example = () => (
  <FlowButton targetText="Далее" disabled={false} color="primary">
    Выпустить УНЭП
  </FlowButton>
);
