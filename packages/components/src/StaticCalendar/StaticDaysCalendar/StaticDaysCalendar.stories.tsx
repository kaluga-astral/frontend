import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Grid } from '../../Grid';
import { Typography } from '../../Typography';
import { useLocaleDateTimeFormat } from '../../hooks';

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

export const Example = () => {
  const baseDate = new Date();

  return <StaticDaysCalendar baseDate={baseDate} />;
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
    />
  );
};

/**
 * Пропс, по которому скрываются элементы выходящие за границы месяца
 */
export const HideOutOfAvailableRangeElements = () => {
  const baseDate = new Date();

  return (
    <StaticDaysCalendar baseDate={baseDate} hideOutOfAvailableRangeElements />
  );
};

/**
 * Пропс коллбэк, который вызывается при наведении на одну из дат
 */
export const OnDayHover = () => {
  const [hovered, setHovered] = useState<Date | undefined>();
  const baseDate = new Date();

  return (
    <Grid spacing={5}>
      <Typography>hovered: {hovered?.toISOString()}</Typography>
      <StaticDaysCalendar
        baseDate={baseDate}
        onDayHover={(date) => setHovered(date)}
      />
    </Grid>
  );
};

/**
 * Пропс предназначенный для отображения предварительного промежутка выбираемого диапазона,
 * для корректного отображения требуется наличие selectedDate
 */
export const HoveredDate = () => {
  const [hovered, setHovered] = useState<Date | undefined>();
  const baseDate = new Date();

  return (
    <StaticDaysCalendar
      baseDate={baseDate}
      selectedDate={baseDate}
      hoveredDate={hovered}
      onDayHover={(date) => setHovered(date)}
    />
  );
};

/**
 * Пропс флаг предназначенный для отображения календаря, где воскресенье - первый день недели. По умолчанию равен true.
 */
export const IsMondayFirst = () => {
  const baseDate = new Date();

  return <StaticDaysCalendar baseDate={baseDate} isMondayFirst={false} />;
};

/**
 * Пропс коллбэк вызываемый на каждый клик по дате в календаре
 */
export const OnChange = () => {
  const [clicked, setClicked] = useState<Date | undefined>();
  const baseDate = new Date();

  return (
    <Grid spacing={5}>
      <Typography>last clicked {clicked?.toISOString()}</Typography>
      <StaticDaysCalendar baseDate={baseDate} onChange={setClicked} />
    </Grid>
  );
};

/**
 * Пропс ответственный за рендер контента в тултипе при наведении на элемент календаря
 */
export const DayTooltipTitle = () => {
  const baseDate = new Date();

  const dayFormat = useLocaleDateTimeFormat({
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  });

  return (
    <StaticDaysCalendar
      baseDate={baseDate}
      DayTooltipTitle={({ date }) => dayFormat(date)}
    />
  );
};

/**
 * Пропс ответственный за рендер контента внутри каждого элемента
 */
export const DayContent = () => {
  const baseDate = new Date();

  return (
    <StaticDaysCalendar
      baseDate={baseDate}
      DayContent={({ monthDay }) => <span>{monthDay}</span>}
    />
  );
};
