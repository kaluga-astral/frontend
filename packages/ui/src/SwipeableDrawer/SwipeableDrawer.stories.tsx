import { Stack } from '@mui/material';
import { useState } from 'react';
import { Story } from '@storybook/react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import { Typography } from '../Typography';

import { SwipeableDrawer } from './SwipeableDrawer';

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

  & > *:not(:first-child):not(:only-child) {
    margin-left: ${({ theme }) => theme.spacing(4)};
  }
`;

const renderRows = (count: number) => {
  const rows = [];

  for (let i = 0; i < count; i++) {
    rows.push(
      <Row>
        <Skeleton variant="rectangular" height="150px" />
        <Skeleton variant="rectangular" height="150px" />
      </Row>,
    );
  }

  return rows;
};

export default {
  title: 'Components/SwipeableDrawer',
  component: SwipeableDrawer,
};

const Template: Story = ({
  drawerBleedingTitle,
  isMountedOnHide,
  drawerBleedingHeight,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <Root>
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={handleToggle(true)}>Open</Button>
      </Box>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle={drawerBleedingTitle}
        isMountedOnHide={isMountedOnHide}
        drawerBleedingHeight={drawerBleedingHeight}
      >
        {renderRows(1)}
      </SwipeableDrawer>
    </Root>
  );
};

export const SwipeableDrawerStory = Template.bind({});

SwipeableDrawerStory.storyName = 'SwipeableDrawer';

SwipeableDrawerStory.args = {
  drawerBleedingTitle: 'Все новые документы',
  isMountedOnHide: false,
  drawerBleedingHeight: 56,
};

SwipeableDrawerStory.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};

export const SwipeableDrawerShowcase: Story = () => {
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

        <SwipeableDrawer
          anchor="bottom"
          open={isOpenSmall}
          onClose={handleToggleSmall(false)}
          onOpen={handleToggleSmall(true)}
          disableSwipeToOpen={false}
          drawerBleedingTitle="Не большое наполнение"
          drawerBleedingHeight={56}
        >
          {renderRows(1)}
        </SwipeableDrawer>
      </Root>

      <Root>
        <Box sx={{ textAlign: 'center', pt: 1 }}>
          <Button onClick={handleToggleBig(true)}>
            Наполнение с переполнением
          </Button>
        </Box>

        <SwipeableDrawer
          anchor="bottom"
          open={isOpenBig}
          onClose={handleToggleBig(false)}
          onOpen={handleToggleBig(true)}
          disableSwipeToOpen={false}
          drawerBleedingTitle="Наполнение с переполнением"
          drawerBleedingHeight={56}
        >
          {renderRows(10)}
        </SwipeableDrawer>
      </Root>
    </Stack>
  );
};

SwipeableDrawerShowcase.storyName = 'SwipeableDrawer Showcase';

SwipeableDrawerShowcase.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
