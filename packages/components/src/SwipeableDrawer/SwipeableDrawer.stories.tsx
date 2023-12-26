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
        anchor="right"
        open={isOpen}
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
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
        variant="permanent"
      >
        Новые документы
      </SwipeableDrawer>
    </>
  );
};
