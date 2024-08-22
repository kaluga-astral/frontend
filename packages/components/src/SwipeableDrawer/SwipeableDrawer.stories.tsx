import { Stack } from '@mui/material';
import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

import { Button } from '../Button';

import { SwipeableDrawer } from './SwipeableDrawer';

/**
 *
 * **❗️❗️❗️ Компонент устарел и больше не будет поддерживаться.** Используйте [BottomDrawer](/docs/components-bottom-drawer--docs)
 * Причина отказа от поддержки: сложный UI/UX с крайними кейсами.
 *
 * ### [Figma]()
 * ### [Guide]()
 */

const meta: Meta<typeof SwipeableDrawer> = {
  title: 'Components/Navigation/SwipeableDrawer',
  component: SwipeableDrawer,
};

export default meta;

type Story = StoryObj<typeof SwipeableDrawer>;

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
        <Skeleton variant="rectangular" height="150px" />
      </Row>,
    );
  }

  return rows;
};

export const Interaction: Story = {
  args: {
    anchor: 'bottom',
    open: true,
    disableSwipeToOpen: false,
    drawerBleedingTitle: 'SwipeableDrawer',
    children: [<Skeleton variant="rectangular" height="150px" />],
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerBleedingHeight, setDrawerBleedingHeight] = useState(0);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
    setDrawerBleedingHeight(newOpen ? 56 : 0);
  };

  return (
    <>
      <Button onClick={handleToggle(true)}>Open</Button>
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={drawerBleedingHeight}
      >
        {renderRows(1)}
      </SwipeableDrawer>
    </>
  );
};

export const Anchor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerBleedingHeight, setDrawerBleedingHeight] = useState(0);
  const [drawerAnchor, setDrawerAnchor] = useState<
    'left' | 'top' | 'right' | 'bottom'
  >('bottom');

  const handleToggle =
    (newOpen: boolean, anchor?: 'left' | 'top' | 'right' | 'bottom') => () => {
      setIsOpen(newOpen);
      setDrawerBleedingHeight(newOpen ? 56 : 0);

      if (anchor) {
        setDrawerAnchor(anchor);
      }
    };

  return (
    <>
      <Button onClick={handleToggle(true, 'top')}>Top</Button>
      <Button onClick={handleToggle(true, 'right')}>Right</Button>
      <Button onClick={handleToggle(true, 'bottom')}>Bottom</Button>
      <Button onClick={handleToggle(true, 'left')}>Left</Button>
      <SwipeableDrawer
        anchor={drawerAnchor}
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle={drawerAnchor ? drawerAnchor : 'SwipeableDrawer'}
        isMountedOnHide={false}
        drawerBleedingHeight={drawerBleedingHeight}
      >
        {renderRows(1)}
      </SwipeableDrawer>
    </>
  );
};

export const Variant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerVariant, setDrawerVariant] = useState<
    'permanent' | 'persistent' | 'temporary'
  >('temporary');
  const [drawerBleedingHeight, setDrawerBleedingHeight] = useState(0);

  const handleToggle =
    (newOpen: boolean, variant?: 'permanent' | 'persistent' | 'temporary') =>
    () => {
      setIsOpen(newOpen);
      setDrawerBleedingHeight(newOpen ? 56 : 0);

      if (variant) {
        setDrawerVariant(variant);
      }
    };

  return (
    <>
      <Button onClick={handleToggle(true, 'permanent')}>permanent</Button>
      <Button onClick={handleToggle(true, 'persistent')}>persistent</Button>
      <Button onClick={handleToggle(true, 'temporary')}>temporary</Button>
      <SwipeableDrawer
        anchor="bottom"
        variant={drawerVariant}
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle={drawerVariant ? drawerVariant : 'SwipeableDrawer'}
        isMountedOnHide={false}
        drawerBleedingHeight={drawerBleedingHeight}
      >
        {renderRows(1)}
      </SwipeableDrawer>
    </>
  );
};

/**
 * Варианты наполнения
 */
export const Filling = () => {
  const [drawerBleedingHeight, setDrawerBleedingHeight] = useState(0);
  const [isOpenSmall, setIsOpenSmall] = useState(false);
  const [isOpenBig, setIsOpenBig] = useState(false);

  const handleToggleSmall = (newOpen: boolean) => () => {
    setIsOpenSmall(newOpen);
    setDrawerBleedingHeight(newOpen ? 56 : 0);
  };

  const handleToggleBig = (newOpen: boolean) => () => {
    setIsOpenBig(newOpen);
    setDrawerBleedingHeight(newOpen ? 56 : 0);
  };

  return (
    <Stack gap={4}>
      <Button onClick={handleToggleSmall(true)}>Небольшое наполнение</Button>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpenSmall}
        onClose={handleToggleSmall(false)}
        onOpen={handleToggleSmall(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Не большое наполнение"
        drawerBleedingHeight={drawerBleedingHeight}
      >
        {renderRows(1)}
      </SwipeableDrawer>

      <Button onClick={handleToggleBig(true)}>
        Наполнение с переполнением
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpenBig}
        onClose={handleToggleBig(false)}
        onOpen={handleToggleBig(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Наполнение с переполнением"
        drawerBleedingHeight={drawerBleedingHeight}
      >
        {renderRows(10)}
      </SwipeableDrawer>
    </Stack>
  );
};
