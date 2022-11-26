import { Story } from '@storybook/react';

import { Grid } from '../Grid';
import { addDays, buildIsoDate } from '../utils/date';

import { DateRangePicker, DateRangePickerProps } from './index';

export default {
  title: 'Components/DatePickers/DateRangePicker',
  component: DateRangePicker,
};

const normalizedCurrentDate = buildIsoDate({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
  hour: 1,
});

const Template: Story<DateRangePickerProps> = (args) => (
  <DateRangePicker {...args} />
);

export const Showcase: Story = () => (
  <Grid container spacing={6} autoFlow="row">
    <DateRangePicker inputProps={{ label: 'Все по умолчанию' }} />
    <DateRangePicker
      inputProps={{ label: 'Контролируемый' }}
      valueA={new Date()}
    />
    <DateRangePicker
      inputProps={{ label: 'maxDate меньше текущей' }}
      maxDate={addDays(normalizedCurrentDate, -90)}
    />
    <DateRangePicker
      inputProps={{ label: 'minDate больше текущей' }}
      minDate={addDays(normalizedCurrentDate, 90)}
    />
    <DateRangePicker
      inputProps={{ label: 'Узкий диапазон выбора' }}
      minDate={buildIsoDate({ year: 2022, month: 6, day: 30 })}
      maxDate={buildIsoDate({ year: 2022, month: 7, day: 10 })}
    />
    <DateRangePicker
      inputProps={{ label: 'minDate больше текущей + Узкий диапазон выбора' }}
      minDate={addDays(normalizedCurrentDate, 90)}
      maxDate={addDays(normalizedCurrentDate, 100)}
    />
    <DateRangePicker
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
