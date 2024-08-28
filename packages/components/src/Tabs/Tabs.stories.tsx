import { type Meta, type StoryObj } from '@storybook/react';
import { type SyntheticEvent, useState } from 'react';

import { Tab } from '../Tab';

import { Tabs } from './Tabs';

/**
 * Может содержать:
 *  - [Tab](/story/components-tabs-tab--docs)
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=376-5801&mode=design&t=6DlItWfeBP8xOP7n-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Interaction: Story = {
  args: {
    value: 0,
    onChange: () => {},
  },
  parameters: {
    options: { showPanel: false },
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Вкладка 1" />
      <Tab label="Вкладка 2" />
      <Tab label="Вкладка 3" />
      <Tab label="Вкладка 4" />
      <Tab label="Вкладка 5" />
      <Tab label="Вкладка 6" />
    </Tabs>
  );
};

export const TabDisabled = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Вкладка 1" />
      <Tab label="Вкладка 2" disabled />
      <Tab label="Вкладка 3" disabled />
    </Tabs>
  );
};
