import { Story } from '@storybook/react';
import { useState } from 'react';

import { LocalizationProvider } from '../LocalizationProvider';

import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story = (args) => {
  const [value, setValue] = useState<Date | null>();
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider>
      <DatePicker {...args} value={value} onChange={handleChange} />
    </LocalizationProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Дата начала:',
  disabled: false,
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
