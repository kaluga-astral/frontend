import { Story } from '@storybook/react';

import { DatePickerProvider } from '../DatePickerProvider';
import { Grid } from '../Grid';

import { DatePicker, DatePickerProps, addDays, buildIsoDate } from './index';

export default {
  title: 'Components/DatePickers/DefaultDatePicker',
  component: DatePicker,
};

const normalizedCurrentDate = buildIsoDate({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
  hour: 1,
});

const Template: Story<DatePickerProps> = (args) => {
  return (
    <DatePickerProvider>
      <DatePicker {...args} />
    </DatePickerProvider>
  );
};

export const Showcase: Story = () => (
  <Grid container spacing={6} autoFlow="row">
    <DatePicker inputProps={{ label: 'Все по умолчанию' }} />
    <DatePicker
      inputProps={{ label: 'maxDate меньше текущей' }}
      maxDate={addDays(normalizedCurrentDate, -90)}
    />
    <DatePicker
      inputProps={{ label: 'minDate больше текущей' }}
      minDate={addDays(normalizedCurrentDate, 90)}
    />
    <DatePicker
      inputProps={{ label: 'Узкий диапазон выбора' }}
      minDate={buildIsoDate({ year: 2022, month: 6, day: 30 })}
      maxDate={buildIsoDate({ year: 2022, month: 7, day: 10 })}
    />
    <DatePicker
      inputProps={{ label: 'minDate больше текущей + Узкий диапазон выбора' }}
      minDate={addDays(normalizedCurrentDate, 90)}
      maxDate={addDays(normalizedCurrentDate, 100)}
    />
    <DatePicker
      inputProps={{ label: 'maxDate меньше текущей + Узкий диапазон выбора' }}
      minDate={addDays(normalizedCurrentDate, -90)}
      maxDate={addDays(normalizedCurrentDate, -80)}
    />
  </Grid>
);

export const Default = Template.bind({});

Default.args = {
  inputProps: {
    label: 'Дата начала:',
    error: false,
    helperText: undefined,
    placeholder: 'Выберите дату',
  },
  disabled: false,
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
