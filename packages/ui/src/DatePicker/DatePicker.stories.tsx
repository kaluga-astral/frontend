import { TextField } from '@mui/material';
import { Story } from '@storybook/react';
import { useState } from 'react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story = (args) => {
  const [value, setValue] = useState(null);

  return (
    <DatePicker
      {...args}
      renderInput={(params) => <TextField {...params} />}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Дата начала:',
  mask: 'ru',
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
