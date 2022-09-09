import { Story } from '@storybook/react';
import { addDays, subDays } from 'date-fns';
import { useState } from 'react';

import { DatePickerProvider } from '../DatePickerProvider';
import { NewDatePicker } from '../NewDatePicker';

import { DatePicker, DatePickerProps } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const TIMESTAMP_VALUE = 1659012063771;

const Template: Story<DatePickerProps> = (args) => {
  const [value, setValue] = useState<Date | null>(
    addDays(new Date(TIMESTAMP_VALUE), 180),
  );

  return (
    <>
      <DatePickerProvider>
        <DatePicker {...args} value={value} onChange={setValue} />
      </DatePickerProvider>
      <NewDatePicker label="Какая то дата" placeholder="Выберите дату" />
    </>
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
  minDate: subDays(new Date(TIMESTAMP_VALUE), 90),
  maxDate: addDays(new Date(TIMESTAMP_VALUE), 90),
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
