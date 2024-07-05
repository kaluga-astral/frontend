import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { LegacyGrid } from '../LegacyGrid';
import { addDays, buildIsoDate } from '../utils/date';

import { DatePicker } from './index';

/**
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePickers/DefaultDatePicker',
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Interaction: Story = {
  args: {
  },
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
  const [date, setDate] = useState<Date | undefined>();

  return <DatePicker 
    inputProps={{
      label: 'Дата начала:', 
      error: false, 
      helperText: undefined, 
      placeholder: 'Выберите дату'}} 
    disabled={false}
    value={date} 
    onChange={setDate} />;
};

const Template = (props) => {
  const [date, setDate] = useState<Date | undefined>();

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
