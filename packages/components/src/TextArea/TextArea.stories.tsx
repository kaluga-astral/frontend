import { type Meta, type StoryObj } from '@storybook/react';
import { type ChangeEvent, useState } from 'react';

import { TextArea } from './TextArea';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3211-52609&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof TextArea> = {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Interaction: Story = {
  args: {
    label: 'Комментарии',
    helperText: 'Укажите любую доп. информацию',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <>
    <TextArea label="Basic" />
    <TextArea label="Disabled" disabled />
  </>
);

export const Controlled = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextArea label="Доп. информация" value={value} onChange={handleChange} />
  );
};

export const Statuses = () => (
  <>
    <TextArea
      required
      error
      helperText="Обязательно"
      label="Информация об абоненте"
    />
    <TextArea
      success
      helperText="Удачно завершился процесс проверки ключа"
      label="Электронный ключ"
    />
  </>
);

export const Required = () => <TextArea required label="Доп. информация" />;

export const FullWidth = () => <TextArea fullWidth label="Длинное поле" />;

export const HelperText = () => (
  <>
    <TextArea helperText="Описание поле" label="Доп. информация" />
    <TextArea error helperText="Описание ошибки поля" label="Доп. информация" />
    <TextArea
      success
      helperText="Отображение success статуса"
      label="Доп. информация"
    />
  </>
);

export const Disabled = () => (
  <TextArea disabled helperText="Поле не доступно" label="Доп. информация" />
);
