import { type Meta, type StoryObj } from '@storybook/react';

import { EmailField } from './EmailField';

/**
 * EmailField аналогичен компоненту [TextField](/story/components-textfield--docs)
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3211-52609&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof EmailField> = {
  title: 'Components/Inputs/EmailField',
  component: EmailField,
};

export default meta;

type Story = StoryObj<typeof EmailField>;

export const Interaction: Story = {
  args: {
    label: 'Email',
    helperText: 'Введите адрес эл. почты',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <>
    <EmailField label="Basic" />
    <EmailField label="Disabled" disabled />
  </>
);
