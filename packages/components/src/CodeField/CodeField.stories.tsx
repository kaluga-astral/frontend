import { Meta, StoryObj } from '@storybook/react';

import { CodeField } from './CodeField';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3211-52609&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof CodeField> = {
  title: 'Components/CodeField',
  component: CodeField,
};

export default meta;

type Story = StoryObj<typeof CodeField>;

export const Interaction: Story = {
  args: {
    label: 'Пароль',
    helperText: 'Придумайте новый пароль',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <>
    <CodeField label="Код подтверждения отправлен на test@test.ru" />
  </>
);
