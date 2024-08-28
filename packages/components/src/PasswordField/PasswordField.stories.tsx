import { type Meta, type StoryObj } from '@storybook/react';
import { type ChangeEvent, useState } from 'react';

import { PasswordField } from './PasswordField';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3211-52609&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof PasswordField> = {
  title: 'Components/Inputs/PasswordField',
  component: PasswordField,
};

export default meta;

type Story = StoryObj<typeof PasswordField>;

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
    <PasswordField label="Basic" />
    <PasswordField label="Disabled" disabled />
  </>
);

export const Controlled = () => {
  const [value, setValue] = useState('1234567890qwerty');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <PasswordField label="Пароль" value={value} onChange={handleChange} />;
};

export const Statuses = () => (
  <>
    <PasswordField
      required
      error
      helperText="Ошибка, проверка не пройдена"
      label="Пароль"
    />
    <PasswordField
      success
      helperText="Проверка успешно пройдена"
      label="Пароль"
    />
  </>
);

export const Required = () => <PasswordField required label="Пароль" />;

export const Sizes = () => (
  <>
    <PasswordField label="Medium" />
    <PasswordField label="Small" size="small" />
  </>
);

export const FullWidth = () => <PasswordField fullWidth label="Длинное поле" />;

export const HelperText = () => (
  <>
    <PasswordField helperText="Поясняю поле" label="Пароль" />
    <PasswordField error helperText="Поясняю ошибку поля" label="Пароль" />
    <PasswordField success helperText="Поясняю success статус" label="Пароль" />
  </>
);

export const Disabled = () => (
  <>
    <PasswordField
      disabled
      helperText="Поясняю поле"
      label="Пароль"
      value="1234567890qwerty"
    />
    <PasswordField
      disabled
      helperText="Поясняю поле"
      label="Пароль"
      showSymbols={true}
      value="1234567890qwerty"
    />
  </>
);
