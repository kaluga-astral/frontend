import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button';

import { Chevron } from './Chevron';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof Chevron> = {
  title: 'Components/Chevron',
  component: Chevron,
};

export default meta;

type Story = StoryObj<typeof Chevron>;

export const Interaction: Story = {
  args: {
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <Button onClick={() => setActive(!isActive)}>Toggle</Button>
      <Chevron isActive={isActive} />
    </>
  );
};

