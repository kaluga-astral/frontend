import { type Meta, type StoryObj } from '@storybook/react';
import { MailOutlineMd } from '@astral/icons';
import { type ChangeEvent, useState } from 'react';

import { EmailField } from './EmailField';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3211-52609&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof EmailField> = {
  title: 'Components/EmailField',
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

export const Controlled = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <EmailField label="Email" value={value} onChange={handleChange} />;
};

export const Statuses = () => (
  <>
    <EmailField required error helperText="Обязательно" label="Email" />
    <EmailField
      success
      helperText="Удачно завершился процесс проверки"
      label="Email"
    />
  </>
);

export const Required = () => <EmailField required label="Имя" />;

export const Sizes = () => (
  <>
    <EmailField label="Medium" />
    <EmailField label="Small" size="small" />
  </>
);

export const FullWidth = () => <EmailField fullWidth label="Длинное поле" />;

export const HelperText = () => (
  <>
    <EmailField helperText="Поясняю поле" label="Email" />
    <EmailField error helperText="Поясняю ошибку поля" label="Email" />
    <EmailField success helperText="Поясняю success статус" label="Email" />
  </>
);

export const Disabled = () => (
  <>
    <EmailField disabled helperText="Поясняю поле" label="Email" />
  </>
);

export const Adornment = () => (
  <>
    <EmailField startAdornment={<MailOutlineMd />} label="Email" />
    <EmailField endAdornment={<MailOutlineMd />} label="Email" />
    <EmailField error startAdornment={<MailOutlineMd />} label="Email" />
    <EmailField error endAdornment={<MailOutlineMd />} label="Email" />
  </>
);
