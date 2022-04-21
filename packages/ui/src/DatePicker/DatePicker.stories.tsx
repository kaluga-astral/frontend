import { Story } from '@storybook/react';
import { useState } from 'react';

import { DatePicker } from './DatePicker';
import { DatePickerProps } from './types';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story<DatePickerProps> = (args) => {
  const [value, setValue] = useState<Date | null>(new Date());

  return <DatePicker {...args} selected={value} onChange={setValue} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'Дата начала:',
  disabled: false,
  helperText: '',
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
