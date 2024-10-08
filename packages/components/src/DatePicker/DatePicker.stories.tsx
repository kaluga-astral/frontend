import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { LegacyGrid } from '../LegacyGrid';
import { addDays, buildIsoDate } from '../utils/date';

import { DatePicker, type DatePickerProps } from './index';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=735-12817&t=NdgfZ0Hm3cEsi2ev-0)
 * ### [Guide]()
 */
const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePickers/DefaultDatePicker',
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

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

export const Example = () => {
  const [date, setDate] = useState<Date | null>();

  return (
    <DatePicker
      inputProps={{
        error: false,
        helperText: undefined,
        placeholder: 'Выберите дату',
      }}
      disabled={false}
      label="Дата рождения"
      value={date}
      onChange={setDate}
    />
  );
};

export const StartAdornment = () => {
  const [date, setDate] = useState<Date | null>();

  return <DatePicker startAdornment="c" value={date} onChange={setDate} />;
};

const Template = (props: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>();

  return <DatePicker value={date} onChange={setDate} {...props} />;
};

export const Showcase = () => (
  <LegacyGrid container spacing={6} autoFlow="row">
    <Template inputProps={{ label: 'Все по умолчанию' }} />
    <Template
      inputProps={{ label: 'Disabled default value' }}
      value={new Date('2022-11-01')}
      disabled
    />
    <Template
      inputProps={{ label: 'maxDate меньше текущей' }}
      maxDate={addDays(normalizedCurrentDate, -90)}
    />
    <Template
      inputProps={{ label: 'minDate больше текущей' }}
      minDate={addDays(normalizedCurrentDate, 90)}
    />
    <Template
      inputProps={{ label: 'Узкий диапазон выбора' }}
      minDate={buildIsoDate({ year: 2022, month: 6, day: 30 })}
      maxDate={buildIsoDate({ year: 2022, month: 7, day: 10 })}
    />
    <Template
      inputProps={{ label: 'minDate больше текущей + Узкий диапазон выбора' }}
      minDate={addDays(normalizedCurrentDate, 90)}
      maxDate={addDays(normalizedCurrentDate, 100)}
    />
    <Template
      inputProps={{ label: 'maxDate меньше текущей + Узкий диапазон выбора' }}
      minDate={addDays(normalizedCurrentDate, -90)}
      maxDate={addDays(normalizedCurrentDate, -80)}
    />
  </LegacyGrid>
);
