import { Stack } from '@mui/material';
import { useState } from 'react';
import { type Meta } from '@storybook/react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import { Typography } from '../Typography';

import { BottomDrawer } from './BottomDrawer';

const Root = styled('div')`
  height: 100%;

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey['100']
      : theme.palette.background.default};
`;

const Row = styled('div')`
  display: flex;

  margin: ${({ theme }) => theme.spacing(4, 4, 4)};

  & > * {
    display: flex;
    flex: 1 100%;
  }

  & > *:not(:first-child, :only-child) {
    margin-left: ${({ theme }) => theme.spacing(4)};
  }
`;

const renderRows = (count: number) => {
  const rows = [];

  for (let i = 0; i < count; i++) {
    rows.push(
      <Row>
        <Skeleton variant="rectangular" height="150px" />
      </Row>,
    );
  }

  return rows;
};

/**
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
    <Stack gap={4}>
      <Typography variant="h3">Варианты наполнения</Typography>
      <Root>
        <Box sx={{ textAlign: 'center', pt: 1 }}>
          <Button onClick={handleToggleSmall(true)}>
            Небольшое наполнение
          </Button>
        </Box>

        <BottomDrawer
          open={isOpenSmall}
          onClose={handleToggleSmall(false)}
          title="Небольшое наполнение"
          drawerHeaderHeight={56}
        >
          {renderRows(1)}
        </BottomDrawer>
      </Root>

      <Root>
        <Box sx={{ textAlign: 'center', pt: 1 }}>
          <Button onClick={handleToggleBig(true)}>
            Наполнение с переполнением
          </Button>
        </Box>

        <BottomDrawer
          open={isOpenBig}
          onClose={handleToggleBig(false)}
          title="Наполнение с переполнением"
          drawerHeaderHeight={56}
        >
          {renderRows(10)}
        </BottomDrawer>
      </Root>
    </Stack>
  );
};
