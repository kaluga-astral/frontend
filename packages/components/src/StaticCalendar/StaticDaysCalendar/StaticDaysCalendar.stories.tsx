import { type Meta, type StoryObj } from '@storybook/react';
import { useCallback, useMemo, useState } from 'react';

import { Grid } from '../../Grid';
import { Typography } from '../../Typography';
import { useLocaleDateTimeFormat } from '../../hooks';
import { type ProductionCalendar } from '../../types';

import { StaticDaysCalendar } from './StaticDaysCalendar';

/**
 * Компонент для рендера тела календаря дней месяца.
 * Используется в DatePicker'ах. Так же подойдет для использования в самостоятельном календаре года
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
 * Предназначен для отображения календаря, где понедельник - первый день недели. По умолчанию равен true.
 */
export const IsMondayFirst = () => {
  const baseDate = new Date();

  return <StaticDaysCalendar baseDate={baseDate} isMondayFirst={false} />;
};

/**
 * Коллбэк вызываемый при клике по дате в календаре
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
 * Пропс ответственный за рендер контента в тултипе при наведении на элемент календаря.
 * Для оптимальной работы требуется передавать не анонимную функцию
 */
export const RenderDayTooltipTitle = () => {
  const baseDate = new Date();

  const dayFormat = useLocaleDateTimeFormat({
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  });

  const renderDayTooltipTitle = useCallback(
    ({ date }: { date: Date }) => dayFormat(date),
    [],
  );

  return (
    <StaticDaysCalendar
      baseDate={baseDate}
      renderDayTooltipTitle={renderDayTooltipTitle}
    />
  );
};

/**
 * Пропс ответственный за рендер контента внутри каждого элемента.
 * Для оптимальной работы требуется передавать не анонимную функцию
 */
export const RenderDayContent = () => {
  const baseDate = new Date();

  const renderDayContent = useCallback(
    ({ monthDay }: { monthDay: number }) => <span>{monthDay}</span>,
    [],
  );

  return (
    <StaticDaysCalendar
      baseDate={baseDate}
      renderDayContent={renderDayContent}
    />
  );
};

const REST_OF_MAYS_HOLIDAYS: [string, ProductionCalendar.Day][] = [
  [
    '2024-05-11T00:00:00.000Z',
    {
      isHoliday: true,
      typeName: 'Выходной день',
    },
  ],
  [
    '2024-05-12T00:00:00.000Z',
    {
      isHoliday: true,
      typeName: 'Выходной день',
    },
  ],
  [
    '2024-05-18T00:00:00.000Z',
    {
      isHoliday: true,
      typeName: 'Выходной день',
    },
  ],
  [
    '2024-05-19T00:00:00.000Z',
    {
      isHoliday: true,
      typeName: 'Выходной день',
    },
  ],
  [
    '2024-05-25T00:00:00.000Z',
    {
      isHoliday: true,
      typeName: 'Выходной день',
    },
  ],
  [
    '2024-05-26T00:00:00.000Z',
    {
      isHoliday: true,
      typeName: 'Выходной день',
    },
  ],
];

export const ProductionCalendarStorage = () => {
  const baseDate = new Date('2024-05-01T00:00:00.000Z');
  const dayFormat = useLocaleDateTimeFormat({
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  });
  const productionCalendarStorage = useMemo(
    () =>
      new Map<string, ProductionCalendar.Day>([
        [
          '2024-05-01T00:00:00.000Z',
          {
            description: 'Праздник весны и труда',
            isHoliday: true,
            typeName: 'Государственный праздник',
          },
        ],
        [
          '2024-05-04T00:00:00.000Z',
          {
            isHoliday: true,
            typeName: 'Выходной день',
          },
        ],
        [
          '2024-05-05T00:00:00.000Z',
          {
            isHoliday: true,
            typeName: 'Выходной день',
          },
        ],
        [
          '2024-05-08T00:00:00.000Z',
          {
            isHoliday: false,
            typeName: 'Предпраздничный сокращенный рабочий день',
          },
        ],
        [
          '2024-05-09T00:00:00.000Z',
          {
            isHoliday: true,
            typeName: 'Государственный праздник',
            description: 'День Победы',
          },
        ],
        [
          '2024-05-10T00:00:00.000Z',
          {
            isHoliday: true,
            typeName: 'Дополнительный / перенесенный выходной день',
            description: 'Перенос с субботы 6 января',
          },
        ],
        ...REST_OF_MAYS_HOLIDAYS,
      ]),
    [],
  );

  return (
    <StaticDaysCalendar
      baseDate={baseDate}
      renderDayTooltipTitle={({ typeName, description, date }) => (
        <>
          <Typography>{dayFormat(date)}</Typography>
          <Typography>{typeName}</Typography>
          <Typography>{description}</Typography>
        </>
      )}
      productionCalendarStorage={productionCalendarStorage}
      selectedRanges={[
        {
          dateA: new Date('2024-05-06T00:00:00Z'),
          dateB: new Date('2024-05-12T00:00:00Z'),
        },
      ]}
    />
  );
};
