import { Meta, StoryObj } from '@storybook/react';
import { EditFillMd, EyeFillMd } from '@astral/icons';

import { TextField } from './TextField';

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
};

export const Example = () => (
  <>
    <TextField label="Basic" />
    <TextField label="Disabled" disabled />
  </>
);

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
const EditIcon = <EditFillMd />;

export const Adornment = () => (
  <>
    <TextField InputProps={{ startAdornment: '₽' }} label="Цена" />
    <TextField InputProps={{ endAdornment: '₽' }} label="Цена" />
    <TextField InputProps={{ endAdornment: EyeIcon }} label="Пароль" />
    <TextField InputProps={{ startAdornment: EditIcon }} label="Имя" />
    <TextField error InputProps={{ startAdornment: '₽' }} label="Цена" />
    <TextField error InputProps={{ startAdornment: EditIcon }} label="Имя" />
  </>
);
