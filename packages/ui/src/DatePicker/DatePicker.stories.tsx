import { Story } from '@storybook/react';
import { addDays, subDays } from 'date-fns';
import { useState } from 'react';

import { DatePickerProvider } from '../DatePickerProvider';

import { DatePicker, DatePickerProps } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story<DatePickerProps> = (args) => {
  const [value, setValue] = useState<Date | null>(addDays(new Date(), 180));

  return (
    <DatePickerProvider>
      <DatePicker {...args} value={value} onChange={setValue} />
    </DatePickerProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  inputProps: {
    label: 'Дата начала:',
    error: false,
    helperText: undefined,
    placeholder: 'Выберите дату',
  },
  disabled: false,
  minDate: subDays(new Date(), 90),
  maxDate: addDays(new Date(), 90),
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
