import { type Meta, type StoryObj } from '@storybook/react';
import { BookmarkFillMd } from '@astral/icons';
import React, { useState } from 'react';

import { Typography } from '../Typography';
import { Button } from '../Button';
import { Grid } from '../Grid';

import { CollapsableAlert } from './CollapsableAlert';

/**
 * CollapsableAlert - Короткое сообщение с возможностью сворачивать контент
 *
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof CollapsableAlert> = {
  title: 'Components/Feedback/CollapsableAlert',
  component: CollapsableAlert,
};

export default meta;

type Story = StoryObj<typeof CollapsableAlert>;

export const Interaction: Story = {
  args: {
    children: (
      <>
        <Typography>Сумма заказа: 1 000 руб</Typography>
        <Typography>Дата оформления: 15.08.2023</Typography>
      </>
    ),
    title: 'Информация о заказе',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => (
  <CollapsableAlert
    title="Счет успешно сформирован"
    severity="success"
    actions={<Button variant="link">Подробнее</Button>}
  >
    <Typography>Номер вашего счета: 32-0021</Typography>
  </CollapsableAlert>
);

export const Severity = () => (
  <Grid container spacing={2}>
    <CollapsableAlert title="Счет успешно сформирован" severity="info">
      <Typography>Номер вашего счета: 32-0021</Typography>
    </CollapsableAlert>
    <CollapsableAlert title="Счет успешно сформирован" severity="success">
      <Typography>Номер вашего счета: 32-0021</Typography>
    </CollapsableAlert>
    <CollapsableAlert title="Счет успешно сформирован" severity="warning">
      <Typography>Номер вашего счета: 32-0021</Typography>
    </CollapsableAlert>
    <CollapsableAlert title="Счет успешно сформирован" severity="error">
      <Typography>Номер вашего счета: 32-0021</Typography>
    </CollapsableAlert>
  </Grid>
);

export const HeaderStartAdorment = () => (
  <CollapsableAlert
    title="Счет успешно сформирован"
    severity="success"
    headerStartAdorment={<BookmarkFillMd color="success" />}
  >
    <Typography>Номер вашего счета: 32-0021</Typography>
  </CollapsableAlert>
);

export const Title = () => (
  <CollapsableAlert
    title={<Typography variant="subtitle2">Кастомный title</Typography>}
  >
    <Typography>Номер вашего счета: 32-0021</Typography>
  </CollapsableAlert>
);

export const Actions = () => (
  <CollapsableAlert
    title="Счет успешно сформирован"
    severity="success"
    actions={<Button variant="link">Подробнее</Button>}
  >
    <Typography>Номер вашего счета: 32-0021</Typography>
  </CollapsableAlert>
);

export const Controlled = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggleAlert = () => setIsExpanded((prev) => !prev);

  const handleChangeAlert = (
    newIsExpanded: boolean,
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    setIsExpanded(newIsExpanded);
    console.log('Click CollapsableAlert header event', event);
  };

  return (
    <Grid container spacing={2}>
      <Button onClick={handleToggleAlert}>
        Свернуть/развернуть CollapsableAlert
      </Button>
      <CollapsableAlert
        title="Счет успешно сформирован"
        isExpanded={isExpanded}
        onExpandedChange={handleChangeAlert}
      >
        <Typography>Сумма заказа: 1 000 руб</Typography>
        <Typography>Дата оформления: 15.08.2023</Typography>
      </CollapsableAlert>
    </Grid>
  );
};

/**
 * Prop ```display``` позволяет задать видимость элемента
 */
export const Display = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  const toggleIsDisplay = () => setIsDisplay((prev) => !prev);

  return (
    <Grid container spacing={2}>
      <Button onClick={toggleIsDisplay}>
        Показать/спрятать CollapsableAlert
      </Button>
      <CollapsableAlert title="Счет успешно сформирован" display={isDisplay}>
        <Typography>Номер вашего счета: 32-0021</Typography>
      </CollapsableAlert>
    </Grid>
  );
};
