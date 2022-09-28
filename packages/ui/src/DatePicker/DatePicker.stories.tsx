import { Story } from '@storybook/react';

import { DatePickerProvider } from '../DatePickerProvider';

import { DatePicker, DatePickerProps, addDays } from './index';

export default {
  title: 'Components/DatePickers/DefaultDatePicker',
  component: DatePicker,
};

const Template: Story<DatePickerProps> = (args) => {
  return (
    <DatePickerProvider>
      <DatePicker {...args} />
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
  minDate: addDays(new Date(), -90),
  maxDate: addDays(new Date(), 90),
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
