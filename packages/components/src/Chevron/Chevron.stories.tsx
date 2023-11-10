import { useState } from 'react';
import type { Story } from '@storybook/react';

import { Button } from '../Button';

import type { ChevronProps } from './Chevron';
import { Chevron } from './Chevron';

export default {
  title: 'Components/Chevron',
  component: Chevron,
};

const Template: Story<ChevronProps> = (args) => {
  const [isActive, setActive] = useState(args.isActive);

  return (
    <>
      <Button onClick={() => setActive(!isActive)}>Toggle</Button>
      <Chevron {...args} isActive={isActive} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  isActive: false,
};

Default.parameters = {
  controls: { expanded: true },
};
