import { type Meta, type StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=1%3A339)
 * ### [Guide]()
 */

const meta: Meta<typeof Avatar> = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Interaction: Story = {
  args: {
    children: 'АЛ',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => <Avatar>АЛ</Avatar>;
