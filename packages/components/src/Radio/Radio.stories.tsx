import { type Meta, type StoryObj } from '@storybook/react';

import { Radio } from './Radio';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3925-52201&mode=design&t=HZv64PqoHPvGj5MB-0)
 * ### [Guide]()
 */
const meta: Meta<typeof Radio> = {
  title: 'Components/Inputs/Radio',
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Interaction: Story = {
  args: {
    checked: false,
    disabled: false,
    isError: false,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => <Radio />;

export const Disabled = () => <Radio disabled />;

export const Error = () => <Radio isError />;
