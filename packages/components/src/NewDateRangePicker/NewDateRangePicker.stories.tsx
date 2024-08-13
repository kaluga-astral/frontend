import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { addDays, buildIsoDate } from '../utils/date';

import {
  type DateRangePickerValue,
  NewDateRangePicker,
} from './NewDateRangePicker';

/**
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?node-id=735-12817&t=NdgfZ0Hm3cEsi2ev-0)
 * ### [Guide]()
 */
const meta: Meta<typeof NewDateRangePicker> = {
  title: 'Components/DatePickers/NewDateRangePicker',
  component: NewDateRangePicker,
};

export default meta;

type Story = StoryObj<typeof NewDateRangePicker>;

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
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    from: null,
    to: null,
  });

  return (
    <NewDateRangePicker
      startDateProps={{
        inputProps: {
          label: 'Дата начала',
          placeholder: 'Выберите дату',
          error: false,
          helperText: undefined,
        },
      }}
      endDateProps={{
        inputProps: {
          label: 'Дата окончания',
          placeholder: 'Выберите дату',
          error: false,
          helperText: undefined,
        },
      }}
      value={date}
      onChange={setDate}
    />
  );
};

export const StartAdornment = () => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    from: null,
    to: null,
  });

  return (
    <NewDateRangePicker
      startDateProps={{
        startAdornment: 'c',
        inputProps: { label: 'Дата начала' },
      }}
      endDateProps={{
        startAdornment: 'по',
        inputProps: { label: 'Дата окончания' },
      }}
      value={date}
      onChange={setDate}
    />
  );
};

export const Disabled = () => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    from: normalizedCurrentDate,
    to: addDays(normalizedCurrentDate, 10),
  });

  return (
    <NewDateRangePicker
      startDateProps={{
        inputProps: {
          label: 'Дата начала',
        },
      }}
      endDateProps={{
        inputProps: {
          label: 'Дата окончания',
        },
      }}
      value={date}
      isDisabled
      onChange={setDate}
    />
  );
};

export const Required = () => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    from: null,
    to: null,
  });

  return (
    <NewDateRangePicker
      startDateProps={{
        inputProps: { label: 'Дата начала', required: true },
      }}
      endDateProps={{
        inputProps: { label: 'Дата окончания', required: true },
      }}
      value={date}
      onChange={setDate}
    />
  );
};

export const HelperText = () => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    from: null,
    to: null,
  });

  return (
    <NewDateRangePicker
      startDateProps={{
        inputProps: { label: 'Дата начала' },
      }}
      endDateProps={{
        inputProps: { label: 'Дата окончания' },
      }}
      helperText="Вспомогательный текст, относящийся к обоим полям"
      value={date}
      onChange={setDate}
    />
  );
};

export const Error = () => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    from: null,
    to: null,
  });

  return (
    <NewDateRangePicker
      startDateProps={{
        inputProps: { label: 'Дата начала' },
      }}
      endDateProps={{
        inputProps: { label: 'Дата окончания' },
      }}
      isError={true}
      helperText="Дата начала не может быть раньше даты окончания"
      value={date}
      onChange={setDate}
    />
  );
};

export const MinDate = () => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    from: null,
    to: null,
  });

  return (
    <NewDateRangePicker
      startDateProps={{
        inputProps: {
          label: 'Дата начала',
        },
      }}
      endDateProps={{
        inputProps: {
          label: 'Дата окончания',
        },
      }}
      minDate={addDays(normalizedCurrentDate, 90)}
      value={date}
      onChange={setDate}
    />
  );
};

export const MaxDate = () => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    from: null,
    to: null,
  });

  return (
    <NewDateRangePicker
      startDateProps={{
        inputProps: {
          label: 'Дата начала',
        },
      }}
      endDateProps={{
        inputProps: {
          label: 'Дата окончания',
        },
      }}
      maxDate={addDays(normalizedCurrentDate, 90)}
      value={date}
      onChange={setDate}
    />
  );
};
