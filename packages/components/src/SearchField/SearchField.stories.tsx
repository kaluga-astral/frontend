import { type Meta, type StoryObj } from '@storybook/react';
import { type ChangeEvent, useState } from 'react';

import { SearchField } from './SearchField';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21329-27078&t=6bGJhLa3WwMjT0Xx-0)
 * ### [Guide]()
 */
const meta: Meta<typeof SearchField> = {
  title: 'Components/Inputs/SearchField',
  component: SearchField,
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Interaction: Story = {
  args: {
    label: 'Имя',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => <SearchField />;

export const Placeholder = () => (
  <SearchField placeholder="Поиск по названию" />
);

export const Disabled = () => <SearchField disabled defaultValue="123" />;

export const MaxLength = () => <SearchField maxLength={3} />;

export const Controlled = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <SearchField value={value} onChange={handleChange} />;
};

export const Sizes = () => (
  <>
    <SearchField label="Medium" />
    <SearchField label="Small" size="small" />
  </>
);

export const FullWidth = () => <SearchField fullWidth />;
