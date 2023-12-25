import { type Meta, type StoryObj } from '@storybook/react';
import { type SyntheticEvent, useState } from 'react';

import { Tab } from '../Tab';
import { ExampleTemplate } from '../docs';
import { Typography } from '../Typography';

import { Tabs } from './Tabs';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=376-5801&mode=design&t=6DlItWfeBP8xOP7n-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
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

export const ExampleWithTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ExampleTemplate>
      <Typography>
        Пример Tab с компонентом Tabs, который является оберткой для размещения
        прочих компонентов в заголовке.
      </Typography>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Вкладка 1" />
        <Tab label="Вкладка 2" />
        <Tab label="Вкладка 3" />
        <Tab label="Вкладка 4" />
        <Tab label="Вкладка 5" />
        <Tab label="Вкладка 6" />
      </Tabs>
    </ExampleTemplate>
  );
};

export const ExampleWithTabDisabled = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ExampleTemplate>
      <Typography>
        Пример Tab с компонентом Tabs, который является оберткой для размещения
        прочих компонентов в заголовке.
      </Typography>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Вкладка 1" disabled />
        <Tab label="Вкладка 2" disabled />
        <Tab label="Вкладка 3" disabled />
        <Tab label="Вкладка 4" disabled />
        <Tab label="Вкладка 5" disabled />
        <Tab label="Вкладка 6" disabled />
      </Tabs>
    </ExampleTemplate>
  );
};
