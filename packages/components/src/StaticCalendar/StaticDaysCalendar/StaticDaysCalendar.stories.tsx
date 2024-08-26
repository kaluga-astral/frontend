import { type Meta, type StoryObj } from '@storybook/react';

import { StaticDaysCalendar } from './StaticDaysCalendar';

/**
 * Компонент для рендера тела календаря дней месяца.
 * Пере используется в DatePicker'ах. Так же подойдет для использования в самостоятельном календаре года
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=8444-79862&t=vXnyZRaIujmxoFPy-4)
 * ### [Guide]()
 */
const meta: Meta<typeof StaticDaysCalendar> = {
  title: 'Components/StaticDaysCalendar',
  component: StaticDaysCalendar,
};

export default meta;

type Story = StoryObj<typeof StaticDaysCalendar>;

export const Interaction: Story = {
  args: {
    baseDate: new Date(),
  },
  parameters: {
    options: { showPanel: false },
    docs: {
      disable: true,
    },
  },
};

const dayFormat = Intl.DateTimeFormat('ru', {
  weekday: 'short',
  year: '2-digit',
  month: 'short',
  day: '2-digit',
  timeZone: 'UTC',
}).format;

export const Example = () => {
  const baseDate = new Date();

  return (
    <StaticDaysCalendar
      baseDate={baseDate}
      DayContent={({ monthDay }) => monthDay}
      DayTooltipTitle={({ date }) => dayFormat(date)}
    />
  );
};

/**
 * Пропс позволяющий указать выбранные интервалы
 */
export const SelectedRanges = () => {
  const baseDate = new Date('2024-08-01T00:00:00.000Z');

  return (
    <StaticDaysCalendar
      baseDate={baseDate}
      selectedRanges={[
        {
          dateA: new Date('2024-08-01T00:00:00.000Z'),
          dateB: new Date('2024-08-04T00:00:00.000Z'),
        },
        {
          dateA: new Date('2024-08-08T00:00:00.000Z'),
          dateB: new Date('2024-08-08T00:00:00.000Z'),
        },
        {
          dateA: new Date('2024-08-20T00:00:00.000Z'),
          dateB: new Date('2024-08-28T00:00:00.000Z'),
        },
      ]}
      DayContent={({ monthDay }) => monthDay}
      DayTooltipTitle={({ date }) => dayFormat(date)}
    />
  );
};
