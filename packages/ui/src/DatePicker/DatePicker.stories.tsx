import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Story } from '@storybook/react';
import { useState } from 'react';

import { LocalizationProvider } from '../LocalizationProvider';

import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story = (args) => {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker {...args} value={value} onChange={setValue} />
    </LocalizationProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Дата начала:',
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
