import { Story } from '@storybook/react';
import { useState } from 'react';
import { merge } from 'lodash-es';

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

const Template: Story<DateRangePickerProps> = (args) => {
  const [dateA, setDateA] = useState<Date | undefined>(args.itemA?.value);
  const [dateB, setDateB] = useState<Date | undefined>(args.itemB?.value);

  const props = merge(args || {}, {
    itemA: { value: dateA, onChange: setDateA },
    itemB: { value: dateB, onChange: setDateB },
  });

  return <DateRangePicker {...props} />;
};

export const Showcase: Story = () => (
  <Grid container spacing={6} autoFlow="row">
    <Template />
    <Template
      itemA={{ inputProps: { label: 'Контролируемый A' }, value: new Date() }}
      itemB={{ inputProps: { label: 'Контролируемый B' }, value: new Date() }}
    />
    <Template
      itemA={{ inputProps: { label: 'maxDate меньше текущей A' } }}
      itemB={{ inputProps: { label: 'maxDate меньше текущей B' } }}
      maxDate={addDays(normalizedCurrentDate, -90)}
    />
    <Template
      itemA={{ inputProps: { label: 'minDate больше текущей A' } }}
      itemB={{ inputProps: { label: 'minDate больше текущей B' } }}
      minDate={addDays(normalizedCurrentDate, 90)}
    />
    <Template
      itemA={{ inputProps: { label: 'Узкий диапазон выбора A' } }}
      itemB={{ inputProps: { label: 'Узкий диапазон выбора B' } }}
      minDate={buildIsoDate({ year: 2022, month: 6, day: 30 })}
      maxDate={buildIsoDate({ year: 2022, month: 7, day: 10 })}
    />
    <Template
      itemA={{
        inputProps: {
          label: 'minDate больше текущей + Узкий диапазон выбора A',
        },
      }}
      itemB={{
        inputProps: {
          label: 'minDate больше текущей + Узкий диапазон выбора B',
        },
      }}
      minDate={addDays(normalizedCurrentDate, 90)}
      maxDate={addDays(normalizedCurrentDate, 100)}
    />
    <Template
      itemA={{
        inputProps: {
          label: 'maxDate меньше текущей + Узкий диапазон выбора A',
        },
      }}
      itemB={{
        inputProps: {
          label: 'maxDate меньше текущей + Узкий диапазон выбора B',
        },
      }}
      minDate={addDays(normalizedCurrentDate, -90)}
      maxDate={addDays(normalizedCurrentDate, -80)}
    />
  </Grid>
);

export const Default = Template.bind({});

Default.args = {
  itemA: {
    inputProps: {
      label: 'Дата начала:',
      placeholder: 'Выберите дату',
      error: false,
      helperText: undefined,
    },
  },
  itemB: {
    inputProps: {
      label: 'Дата окончания:',
      placeholder: 'Выберите дату',
      error: false,
      helperText: undefined,
    },
  },
  disabled: false,
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
