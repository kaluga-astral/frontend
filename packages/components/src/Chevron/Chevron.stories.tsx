import { useState } from 'react';
import { Story } from '@storybook/react';

import { Button } from '../Button';

import { Chevron } from './Chevron';
import { ChevronProps } from './types';

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
