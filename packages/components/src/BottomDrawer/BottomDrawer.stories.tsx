import { useState } from 'react';
import { type Meta } from '@storybook/react';

import { Grid } from '../Grid';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { styled } from '../styles';

import { BottomDrawer } from './BottomDrawer';

const Item = styled.div`
  text-align: center;
`;

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
 * ### BottomDrawer является основой для построения мобильных компонентов. Не предназначен для прямого использования в продуктах.
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=20192-40447&mode=design&t=cmCv26DJElzmOGya-0)
 * ### [Guide]()
 */
const meta: Meta<typeof BottomDrawer> = {
  title: 'Components/BottomDrawer',
  component: BottomDrawer,
};

export default meta;

export const Example = () => {
  const [isOpenSmall, setIsOpenSmall] = useState(false);
  const [isOpenBig, setIsOpenBig] = useState(false);

  const handleToggleSmall = (newOpen: boolean) => () => {
    setIsOpenSmall(newOpen);
  };

  const handleToggleBig = (newOpen: boolean) => () => {
    setIsOpenBig(newOpen);
  };

  return (
    <Grid container spacing={4}>
      <Typography variant="h3">Варианты наполнения</Typography>

      <Item>
        <Button onClick={handleToggleSmall(true)}>Небольшое наполнение</Button>

        <BottomDrawer
          open={isOpenSmall}
          onClose={handleToggleSmall(false)}
          title="Небольшое наполнение"
          drawerHeaderHeight={56}
        >
          {renderRows(1)}
        </BottomDrawer>
      </Item>

      <Item>
        <Button onClick={handleToggleBig(true)}>
          Наполнение с переполнением
        </Button>

        <BottomDrawer
          open={isOpenBig}
          onClose={handleToggleBig(false)}
          title="Наполнение с переполнением"
          drawerHeaderHeight={56}
        >
          {renderRows(10)}
        </BottomDrawer>
      </Item>
    </Grid>
  );
};
