import { type Meta, type StoryObj } from '@storybook/react';

import { RadioGroupField } from '../RadioGroupField';

import { RadioGroup } from './RadioGroup';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3925-52201&mode=design&t=HZv64PqoHPvGj5MB-0)
 * ### [Guide]()
 */

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Inputs/RadioGroup',
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Interaction: Story = {
  args: {
    groupLabel: 'Группа радио',
    required: false,
    isError: false,
    errorText: 'Ошибка',
    children: (
      <>
        <RadioGroupField label="Radio field 1" value="one" />
        <RadioGroupField label="Radio field 2" value="two" />
        <RadioGroupField label="Radio field 3" value="three" />
      </>
    ),
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <RadioGroup groupLabel="Группа радио">
    <RadioGroupField label="Radio field 1" value="one" />
    <RadioGroupField label="Radio field 2" value="two" />
    <RadioGroupField label="Radio field 3" value="three" />
  </RadioGroup>
);

export const ErrorState = () => (
  <RadioGroup groupLabel="Группа радио" required isError errorText="Ошибка">
    <RadioGroupField label="Radio field 1" value="one" />
    <RadioGroupField label="Radio field 2" value="two" />
    <RadioGroupField label="Radio field 3" value="three" />
  </RadioGroup>
);

export const Row = () => (
  <RadioGroup groupLabel="Группа радио" row required>
    <RadioGroupField label="Radio field 1" value="one" />
    <RadioGroupField label="Radio field 2" value="two" />
    <RadioGroupField label="Radio field 3" value="three" />
  </RadioGroup>
);
