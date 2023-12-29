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
        drawerBleedingTitle="Все новые документы"
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
        drawerBleedingTitle="Все новые документы, title немного отличается"
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
        drawerBleedingTitle="Все новые документы"
        drawerBleedingIcon={<SuccessFillMd color="success" />}
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
        drawerBleedingTitle="Все новые документы"
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
        drawerBleedingTitle="Все новые документы"
        transitionDuration={1005}
      >
        <Text />
      </SwipeableDrawer>
    </>
  );
};
