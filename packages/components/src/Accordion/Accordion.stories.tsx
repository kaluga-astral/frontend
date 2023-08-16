import { Meta, StoryObj } from '@storybook/react';
import { InfoFillMd, SuccessFillMd } from '@astral/icons';
import { useState } from 'react';

import { Grid } from '../Grid';
import { Button } from '../Button';
import { styled } from '../styles/styled';
import { Typography } from '../Typography';

import { Accordion } from './Accordion';

/**
 * Accordion - это компонент, позволяющий скрывать контент под заголовком
 *
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Interaction: Story = {
  args: {
    children: (
      <>
        <Typography>Сумма заказа: 1 000 руб</Typography>
        <Typography>Дата оформления: 15.08.2023</Typography>
      </>
    ),
    title: 'Информация о заказе',
    startAdorment: <InfoFillMd color="info" />,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const BaseContainer = styled(Grid)`
  width: 300px;
  min-height: 90px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Example = () => (
  <BaseContainer>
    <Accordion
      title="Информация о заказе"
      startAdorment={<InfoFillMd color="info" />}
    >
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>
);

export const Title = () => (
  <BaseContainer>
    <Accordion title="Любой title" startAdorment={<InfoFillMd color="info" />}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>
);

export const StartAdorment = () => (
  <BaseContainer>
    <Accordion
      title="Информация о заказе"
      startAdorment={<SuccessFillMd color="success" />}
    >
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>
);

export const IsOpen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <Grid container>
      <Button onClick={handleToggleAccordion}>Toggle</Button>
      <BaseContainer container spacing={2}>
        <Accordion
          title="Информация о заказе"
          startAdorment={<InfoFillMd color="info" />}
          isOpen={isOpen}
        >
          <Typography>Сумма заказа: 1 000 руб</Typography>
          <Typography>Дата оформления: 15.08.2023</Typography>
        </Accordion>
      </BaseContainer>
    </Grid>
  );
};

/**
 * Prop ```titleProps``` позволяет сконфигурировать title как [Typography](/docs/components-typography--docs).
 */
export const TitleProps = () => (
  <BaseContainer>
    <Accordion
      title="Информация о заказе"
      startAdorment={<SuccessFillMd color="success" />}
      titleProps={{ variant: 'subtitle2' }}
    >
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>
);
