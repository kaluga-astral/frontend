import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { LegacyGrid } from '../LegacyGrid';
import { addDays, buildIsoDate } from '../utils/date';

import { DateRangePicker, type DateRangePickerProps } from './index';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=735-12817&t=NdgfZ0Hm3cEsi2ev-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DatePickers/DateRangePicker',
  component: DateRangePicker,
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Interaction: Story = {
  args: {},
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const normalizedCurrentDate = buildIsoDate({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
  hour: 1,
});

const Template: StoryFn<DateRangePickerProps> = (args) => {
  const [dateA, setDateA] = useState<Date | undefined>(
    args.startDateProps?.value,
  );
  const [dateB, setDateB] = useState<Date | undefined>(
    args.endDateProps?.value,
  );

  return (
    <DateRangePicker
      {...args}
      startDateProps={{
        ...args.startDateProps,
        value: dateA,
        onChange: setDateA,
      }}
      endDateProps={{ ...args.endDateProps, value: dateB, onChange: setDateB }}
    />
  );
};

export const Example = Template.bind({});

Example.args = {
  startDateProps: {
    inputProps: {
      label: 'Дата начала:',
      placeholder: 'Выберите дату',
      error: false,
      helperText: undefined,
    },
  },
  endDateProps: {
    inputProps: {
      label: 'Дата окончания:',
      placeholder: 'Выберите дату',
      error: false,
      helperText: undefined,
    },
  },
  disabled: false,
};

export const Showcase = () => (
  <LegacyGrid container spacing={6} autoFlow="row">
    <Template />
    <Template
      startDateProps={{
        inputProps: { label: 'Контролируемый A' },
        value: new Date(),
      }}
      endDateProps={{
        inputProps: { label: 'Контролируемый B' },
        value: addDays(new Date(), 1),
      }}
    />
    <Template
      startDateProps={{ inputProps: { label: 'maxDate меньше текущей A' } }}
      endDateProps={{ inputProps: { label: 'maxDate меньше текущей B' } }}
      maxDate={addDays(normalizedCurrentDate, -90)}
    />
    <Template
      startDateProps={{ inputProps: { label: 'minDate больше текущей A' } }}
      endDateProps={{ inputProps: { label: 'minDate больше текущей B' } }}
      minDate={addDays(normalizedCurrentDate, 90)}
    />
    <Template
      startDateProps={{ inputProps: { label: 'Узкий диапазон выбора A' } }}
      endDateProps={{ inputProps: { label: 'Узкий диапазон выбора B' } }}
      minDate={buildIsoDate({ year: 2022, month: 6, day: 30 })}
      maxDate={buildIsoDate({ year: 2022, month: 7, day: 10 })}
    />
    <Template
      startDateProps={{
        inputProps: {
          label: 'minDate больше текущей + Узкий диапазон выбора A',
        },
      }}
      endDateProps={{
        inputProps: {
          label: 'minDate больше текущей + Узкий диапазон выбора B',
        },
      }}
      minDate={addDays(normalizedCurrentDate, 90)}
      maxDate={addDays(normalizedCurrentDate, 100)}
    />
    <Template
      startDateProps={{
        inputProps: {
          label: 'maxDate меньше текущей + Узкий диапазон выбора A',
        },
      }}
      endDateProps={{
        inputProps: {
          label: 'maxDate меньше текущей + Узкий диапазон выбора B',
        },
      }}
      minDate={addDays(normalizedCurrentDate, -90)}
      maxDate={addDays(normalizedCurrentDate, -80)}
    />
  </LegacyGrid>
);
