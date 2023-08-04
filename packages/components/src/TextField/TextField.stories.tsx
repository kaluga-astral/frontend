import { Meta, StoryObj } from '@storybook/react';
import { EyeFillMd, SearchOutlineMd } from '@astral/icons';
import { ChangeEvent, useState } from 'react';

import { TextField } from './TextField';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=3211-52609&mode=design&t=lMvg1tmjfSIA2lhp-0)
 * ### [Guide]()
 */
const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Interaction: Story = {
  args: {
    label: 'Имя',
    helperText: 'Смотрите имя в паспорте',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <>
    <TextField label="Basic" />
    <TextField label="Disabled" disabled />
  </>
);

export const Controlled = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <TextField label="Имя" value={value} onChange={handleChange} />;
};

export const Statuses = () => (
  <>
    <TextField required error helperText="Обязательно" label="Имя" />
    <TextField
      success
      helperText="Удачно завершился процесс проверки"
      label="Email"
    />
  </>
);

export const Required = () => <TextField required label="Имя" />;

export const Sizes = () => (
  <>
    <TextField label="Medium" />
    <TextField label="Small" size="small" />
  </>
);

export const FullWidth = () => <TextField fullWidth label="Длинное поле" />;

export const HelperText = () => (
  <>
    <TextField helperText="Поясняю поле" label="Имя" />
    <TextField error helperText="Поясняю ошибку поля" label="Имя" />
    <TextField success helperText="Поясняю success статус" label="Имя" />
  </>
);

export const Disabled = () => (
  <>
    <TextField disabled helperText="Поясняю поле" label="Имя" />
  </>
);

// Storybook фризится, если вызывать компонент в рендере
const EyeIcon = <EyeFillMd />;
const SearchIcon = <SearchOutlineMd />;

export const Adornment = () => (
  <>
    <TextField InputProps={{ startAdornment: '₽' }} label="Цена" />
    <TextField InputProps={{ endAdornment: '₽' }} label="Цена" />
    <TextField InputProps={{ endAdornment: EyeIcon }} label="Пароль" />
    <TextField InputProps={{ startAdornment: SearchIcon }} label="Имя" />
    <TextField error InputProps={{ startAdornment: '₽' }} label="Цена" />
    <TextField error InputProps={{ startAdornment: SearchIcon }} label="Имя" />
  </>
);
