import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { SuccessFillMd } from '@astral/icons';

import { Button } from '../Button';

import { SwipeableDrawer } from './SwipeableDrawer';

/**
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=657-13634&mode=design&t=5XW3dMZTIJBuSDWo-0)
 * ### [Guide]()
 */
const meta: Meta<typeof SwipeableDrawer> = {
  title: 'Components/SwipeableDrawer',
  component: SwipeableDrawer,
};

export default meta;

type Story = StoryObj<typeof SwipeableDrawer>;

export const Interaction: Story = {
  args: {
    anchor: 'bottom',
    open: false,
    onOpen: () => {},
    onClose: () => {},
    drawerBleedingTitle: 'Все новые документы',
    isMountedOnHide: false,
    drawerBleedingHeight: 56,
  },
  parameters: {
    options: { showPanel: true },
    controls: { expanded: true },
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
    <>
      <Button variant="contained" onClick={handleToggle(true)}>
        Открыть
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={56}
      >
        Новые документы
      </SwipeableDrawer>
    </>
  );
};

/**
 * Prop ```anchor``` позволяет задать местоположение всплывающего окна
 */
export const Anchor = () => {
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);

  const handleTopToggle = (newOpen: boolean) => () => {
    setIsTopOpen(newOpen);
  };

  const handleRightToggle = (newOpen: boolean) => () => {
    setIsRightOpen(newOpen);
  };

  const handleBottomToggle = (newOpen: boolean) => () => {
    setIsBottomOpen(newOpen);
  };

  const handleLeftToggle = (newOpen: boolean) => () => {
    setIsLeftOpen(newOpen);
  };

  return (
    <>
      <Button variant="contained" onClick={handleTopToggle(true)}>
        Top
      </Button>

      <Button variant="contained" onClick={handleRightToggle(true)}>
        Right
      </Button>

      <Button variant="contained" onClick={handleBottomToggle(true)}>
        Bottom
      </Button>

      <Button variant="contained" onClick={handleLeftToggle(true)}>
        Left
      </Button>

      <SwipeableDrawer
        anchor="top"
        open={isTopOpen}
        onClose={handleTopToggle(false)}
        onOpen={handleTopToggle(true)}
        disableSwipeToOpen
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
      >
        Новые документы
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="right"
        open={isRightOpen}
        onClose={handleRightToggle(false)}
        onOpen={handleRightToggle(true)}
        disableSwipeToOpen
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
      >
        Новые документы
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="bottom"
        open={isBottomOpen}
        onClose={handleBottomToggle(false)}
        onOpen={handleBottomToggle(true)}
        disableSwipeToOpen
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
      >
        Новые документы
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="left"
        open={isLeftOpen}
        onClose={handleLeftToggle(false)}
        onOpen={handleLeftToggle(true)}
        disableSwipeToOpen
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
      >
        Новые документы
      </SwipeableDrawer>
    </>
  );
};

/**
 * Prop ```drawerBleedingTitle``` позволяет задать заголовок
 */
export const DrawerBleedingTitle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <Button variant="contained" onClick={handleToggle(true)}>
        Открыть
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы, title немного отличается"
        isMountedOnHide={false}
        drawerBleedingHeight={56}
      >
        Новые документы
      </SwipeableDrawer>
    </>
  );
};

/**
 * Prop ```drawerBleedingIcon``` позволяет добавить иконку для заголовка
 */
export const DrawerBleedingIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <Button variant="contained" onClick={handleToggle(true)}>
        Открыть
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы"
        drawerBleedingIcon={<SuccessFillMd color="success" />}
        isMountedOnHide={false}
        drawerBleedingHeight={56}
      >
        Новые документы
      </SwipeableDrawer>
    </>
  );
};

/**
 * Prop ```drawerBleedingHeight``` позволяет задать высоту
 */
export const DrawerBleedingHeight = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <Button variant="contained" onClick={handleToggle(true)}>
        Открыть
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
      >
        Новые документы
      </SwipeableDrawer>
    </>
  );
};

/**
 * Prop ```transitionDuration``` позволяет задать скорость анимации
 */
export const TransitionDuration = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <Button variant="contained" onClick={handleToggle(true)}>
        Открыть
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
        transitionDuration={1005}
      >
        Новые документы
      </SwipeableDrawer>
    </>
  );
};

export const Variant = () => {
  const [isTemporaryOpen, setIsTemporaryOpen] = useState(false);
  const [isPermanentOpen, setIsPermanentOpen] = useState(false);
  const [isPersistentOpen, setIsPersistentOpen] = useState(false);

  const handleTemporaryToggle = (newOpen: boolean) => () => {
    setIsTemporaryOpen(newOpen);
  };

  const handlePermanentToggle = (newOpen: boolean) => () => {
    setIsPermanentOpen(newOpen);
  };

  const handlePersistentToggle = (newOpen: boolean) => () => {
    setIsPersistentOpen(newOpen);
  };

  return (
    <>
      <Button variant="contained" onClick={handleTemporaryToggle(true)}>
        Temporary
      </Button>

      <Button variant="contained" onClick={handlePermanentToggle(true)}>
        Permanent
      </Button>

      <Button variant="contained" onClick={handlePersistentToggle(true)}>
        Persistent
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={isTemporaryOpen}
        onClose={handleTemporaryToggle(false)}
        onOpen={handleTemporaryToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
        variant="temporary"
      >
        Новые документы
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="bottom"
        open={isPermanentOpen}
        onClose={handlePermanentToggle(false)}
        onOpen={handlePermanentToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
        variant="permanent"
      >
        Новые документы
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="bottom"
        open={isPersistentOpen}
        onClose={handlePersistentToggle(false)}
        onOpen={handlePersistentToggle(true)}
        disableSwipeToOpen={false}
        drawerBleedingTitle="Все новые документы"
        isMountedOnHide={false}
        drawerBleedingHeight={306}
        variant="persistent"
      >
        Новые документы
      </SwipeableDrawer>
    </>
  );
};
