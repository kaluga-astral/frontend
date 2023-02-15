import { Story } from '@storybook/react';
import { useState } from 'react';

import { ToggleButton } from '../ToggleButton';

import { ToggleButtonGroup } from './';

export default {
  title: 'Components/ToggleButtonGroup',
  component: ToggleButtonGroup,
};

export const TabsShowcase: Story = () => {
  const [value, setValue] = useState('val1');

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    selectedValue: string,
  ) => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  };

  return (
    <ToggleButtonGroup exclusive onChange={handleChange} value={value}>
      <ToggleButton value="val1">Вариант 1</ToggleButton>
      <ToggleButton value="val2">Вариант 2</ToggleButton>
      <ToggleButton value="val3">Вариант 3</ToggleButton>
      <ToggleButton value="val4">Вариант 4</ToggleButton>
    </ToggleButtonGroup>
  );
};

TabsShowcase.parameters = { options: { showPanel: false } };
