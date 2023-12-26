import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { SuccessFillMd } from '@astral/icons';

import { Button } from '../Button';

import { SwipeableDrawer } from './SwipeableDrawer';
import { TextWrapper } from './styles';

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

const Text = () => (
  <TextWrapper>
    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
    Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала
    XVI века. В то время некий безымянный печатник создал большую коллекцию
    размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но
    и перешагнул в электронный дизайн. Его популяризации в новое время послужили
    публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более
    недавнее время, программы электронной вёрстки типа Aldus PageMaker, в
    шаблонах которых используется Lorem Ipsum. Lorem Ipsum - это текст-"рыба",
    часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
    "рыбой" для текстов на латинице с начала XVI века. В то время некий
    безымянный печатник создал большую коллекцию размеров и форм шрифтов,
    используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно
    пережил без заметных изменений пять веков, но и перешагнул в электронный
    дизайн. Его популяризации в новое время послужили публикация листов Letraset
    с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы
    электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется
    Lorem Ipsum.
  </TextWrapper>
);

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
        <Text />
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
        <Text />
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
        <Text />
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
        <Text />
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
        <Text />
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
        <Text />
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
        <Text />
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
        <Text />
      </SwipeableDrawer>
    </>
  );
};
