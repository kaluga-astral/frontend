import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Grid } from '../Grid';
import { Button } from '../Button';
import { styled } from '../styles';

import { BottomDrawer } from './BottomDrawer';

const Skeleton = styled.div`
  height: 150px;

  background-color: ${({ theme }) => theme.palette.grey[200]};
`;

const Row = styled.div`
  margin: ${({ theme }) => theme.spacing(4, 4, 4)};
`;

const renderRows = (count: number) => {
  const rows = [];

  for (let i = 0; i < count; i++) {
    rows.push(
      <Row>
        <Skeleton />
      </Row>,
    );
  }

  return rows;
};

/**
 * BottomDrawer является основой для построения мобильных компонентов. Не предназначен для прямого использования в продуктах.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=20192-40447&mode=design&t=cmCv26DJElzmOGya-0)
 * ### [Guide]()
 */
const meta: Meta<typeof BottomDrawer> = {
  title: 'Components/BottomDrawer',
  component: BottomDrawer,
};

export default meta;

type Story = StoryObj<typeof BottomDrawer>;

export const Interaction: Story = {
  args: {
    title: 'Заголовок',
    open: true,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <Grid container spacing={4}>
      <Button onClick={handleToggle(true)}>Открыть</Button>

      <BottomDrawer
        open={isOpen}
        onClose={handleToggle(false)}
        title="Заголовок"
      >
        {renderRows(1)}
      </BottomDrawer>
    </Grid>
  );
};

export const WithContentOverflow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <Grid container spacing={4}>
      <Button onClick={handleToggle(true)}>Открыть</Button>

      <BottomDrawer
        open={isOpen}
        onClose={handleToggle(false)}
        title="Наполнение с переполнением"
      >
        {renderRows(10)}
      </BottomDrawer>
    </Grid>
  );
};
