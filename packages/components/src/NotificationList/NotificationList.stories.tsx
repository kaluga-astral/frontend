import { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BellFillMd } from '@astral/icons';

import { IconButton } from '../IconButton';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Tag } from '../Tag';

import { NotificationList } from './NotificationList';
import { Notification } from './types';

const meta: Meta<typeof NotificationList> = {
  title: 'Components/NotificationList',
  component: NotificationList,
};

export default meta;

type Story = StoryObj<typeof NotificationList>;

const noDataStubSrc = '/no-notifications-stub.svg';

const data: Notification[] = [
  {
    id: 1,
    title: 'Новое сообщение',
    date: '2023-10-30T10:00:00',
    text: 'У вас новое сообщение от пользователя JohnDoe.',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: 2,
    title: 'Важная информация',
    date: '2023-10-30T11:00:00',
    text: 'Сроки заказа были изменены. Пожалуйста, проверьте и подтвердите.',
    priority: 'important',
    isUnread: true,
  },
  {
    id: 3,
    title: 'Обновление в личном кабинете',
    date: '2023-10-30T12:00:00',
    text: 'Добавлен раздел Обмен с 1С',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: 4,
    title: 'Приглашение',
    date: '2023-10-30T13:00:00',
    text: 'У вас новый запрос на роуминг',
    priority: 'important',
    isUnread: true,
  },
  {
    id: 5,
    title: 'Срочное предупреждение',
    date: '2023-10-30T16:00:00',
    text: 'Срочное предупреждение: необходимо изменить пароль к учетной записи.',
    priority: 'critical',
    isUnread: true,
  },
  {
    id: 6,
    title: 'Изменен статус организации',
    date: '2023-10-30T20:00:00',
    text: 'Организация ООО “Тестовая” подключена к личному кабинету',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: 7,
    title: 'Изменены данные организации',
    date: '2023-10-30T21:00:00',
    text: 'Для организации ООО “Тестовая” изменено краткое наименование.',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: 8,
    title: 'Срок действия вашего сертификата истекает',
    date: '2023-10-30T22:00:00',
    text: 'Срок действия сертификата ЭП для организации ООО “Тестовая” истекает через 30 дней. Обновите сертификат для продолжении работы с регистрацией ККТ.',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: 9,
    title: 'Приглашение',
    date: '2023-10-30T13:00:00',
    text: 'У вас новый запрос на роуминг',
    priority: 'important',
    isUnread: true,
  },
  {
    id: 10,
    title: 'Срочное предупреждение',
    date: '2023-10-30T16:00:00',
    text: 'Срочное предупреждение: необходимо изменить пароль к учетной записи.',
    priority: 'critical',
    isUnread: true,
  },
  {
    id: 11,
    title: 'Изменен статус организации',
    date: '2023-10-30T20:00:00',
    text: 'Организация ООО “Тестовая” подключена к личному кабинету',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: 12,
    title: 'Изменены данные организации',
    date: '2023-10-30T21:00:00',
    text: 'Для организации ООО “Тестовая” изменено краткое наименование.',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: 13,
    title: 'Срок действия вашего сертификата истекает',
    date: '2023-10-30T22:00:00',
    text: 'Срок действия сертификата ЭП для организации ООО “Тестовая” истекает через 30 дней. Обновите сертификат для продолжении работы с регистрацией ККТ.',
    priority: 'ordinary',
    isUnread: true,
  },
];

export const Interaction: Story = {
  args: {
    isOpen: true,
    notifications: data,
    unreadNotifications: data.filter((notification) => notification.isUnread),
    noDataImgSrc: noDataStubSrc,
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

/**
 *- В prop ```notifications``` передается массив уведомлений c типом ```Notification```.
 *- В prop ```unreadNotifications``` передается массив с типом ```Notification```, отфильтрованный по флагу ```isUnread=true```. Логика может быть другой. Переключение табов отвечает только за то, какой список отображать.
 *- Если не передавать параметр ```unreadNotifications```, то табы не отображаются, выводятся только notifications.
 *- Флаг ```isUnread``` отвечает за отображение заголовка у непрочитанных уведомлений.
 *- Флаг ```isInitialUnreadOnly``` отвечает за то, какой список отображать при открытии уведомлений.
 */
export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(data);
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (viewedIds: (number | string)[]) => {
    setNotifications((prev) =>
      prev.map((notification) => {
        if (viewedIds.includes(notification.id)) {
          return {
            ...notification,
            isUnread: false,
          };
        }

        return notification;
      }),
    );

    setIsOpen(false);
  };

  const handleReadAll = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        isUnread: false,
      })),
    );
  };

  const handleDelete = (id: string | number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  return (
    <>
      <Badge
        badgeContent={unreadNotifications.length}
        color="error"
        variant="standard"
      >
        <IconButton variant="light" onClick={handleClick}>
          <BellFillMd />
        </IconButton>
      </Badge>

      <NotificationList
        isOpen={isOpen}
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={handleClose}
        onReadAll={handleReadAll}
        onDelete={handleDelete}
        noDataImgSrc={noDataStubSrc}
        isInitialUnreadOnly={unreadNotifications.length > 0}
        isReadAllButtonVisible
        onSettingsButtonClick={() => {
          console.log('onSettingsButtonClick');
        }}
      />
    </>
  );
};

/**
 *В этом примере ```unreadNotifications``` не передается, поэтому табы не отображаются.
 *При нажатии на кнопку "Отметить все, как прочитанные", меняется флаг ```isUnread``` у всех уведомлений, и меняется 'font-weight' заголовка.
 */

export const WithoutTabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReadAll = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        isUnread: false,
      })),
    );
  };

  useEffect(() => {
    setNotifications(
      data.map((n) => ({
        ...n,
        icon: <BellFillMd />,
      })),
    );
  }, []);

  return (
    <>
      <Badge
        badgeContent={notifications.filter((n) => n.isUnread).length}
        color="error"
        variant="standard"
      >
        <IconButton variant="light" onClick={handleClick}>
          <BellFillMd />
        </IconButton>
      </Badge>

      <NotificationList
        isOpen={isOpen}
        notifications={notifications}
        onClose={handleClose}
        noDataImgSrc={noDataStubSrc}
        onReadAll={handleReadAll}
        isReadAllButtonVisible
      />
    </>
  );
};

/**####Использование IntersectionObserver
 *- При вызове метода ```onClose(viewedIds: (string | number)[]) => void```, передается массив идентификаторов непрочитанных уведомлений, которые полностью попали во Viewport.
 *- В этом примере, при закрытии ```SideDialog```, меняется флаг ```isUnread=false``` в ```type Notification``` по идентификатору.
 *- В пропс ```unreadNotifications``` передается массив уведомлений, отфильтрованный по флагу ```isUnread=true```.
 */
export const Intersection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data);
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (viewedIds: (number | string)[]) => {
    setNotifications((prev) =>
      prev.map((notification) => {
        if (viewedIds.includes(notification.id)) {
          return {
            ...notification,
            isUnread: false,
          };
        }

        return notification;
      }),
    );

    setIsOpen(false);
  };

  return (
    <>
      <Badge
        badgeContent={unreadNotifications.length}
        color="error"
        variant="standard"
      >
        <IconButton variant="light" onClick={handleClick}>
          <BellFillMd />
        </IconButton>
      </Badge>

      <NotificationList
        isOpen={isOpen}
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={handleClose}
        noDataImgSrc={noDataStubSrc}
        isInitialUnreadOnly={unreadNotifications.length > 0}
        isReadAllButtonVisible={false}
      />
    </>
  );
};

/**
 *В свойство ```actions``` типа ```Notification``` можно передавать любые элементы взаимодействия, в этом примере используется ```Button variant="link"```.
 */
export const WithActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(
    data.map((n) => {
      if (n.id === 3 || n.id === 4) {
        return {
          ...n,
          actions: <Button variant="link">Перейти в раздел</Button>,
        };
      }

      return n;
    }),
  );
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (viewedIds: (number | string)[]) => {
    setNotifications((prev) =>
      prev.map((notification) => {
        if (viewedIds.includes(notification.id)) {
          return {
            ...notification,
            isUnread: false,
          };
        }

        return notification;
      }),
    );

    setIsOpen(false);
  };

  return (
    <>
      <Badge
        badgeContent={unreadNotifications.length}
        color="error"
        variant="standard"
      >
        <IconButton variant="light" onClick={handleClick}>
          <BellFillMd />
        </IconButton>
      </Badge>

      <NotificationList
        isOpen={isOpen}
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={handleClose}
        noDataImgSrc={noDataStubSrc}
        isInitialUnreadOnly={unreadNotifications.length > 0}
        isReadAllButtonVisible={false}
      />
    </>
  );
};

/**
 *- В заголовке используется компонент ```SideDialogHeader```. При использовании свойства ```onSettingsButtonClick``` появляется кнопка настроек.
 *- Так же, в заголовок можно передавать другие компоненты, для этого используется свойство ```headerContent```. Компоненты будут расположены между заголовком и кнопкой настроек или закрытия.
 */
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data);
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (viewedIds: (number | string)[]) => {
    setNotifications((prev) =>
      prev.map((notification) => {
        if (viewedIds.includes(notification.id)) {
          return {
            ...notification,
            isUnread: false,
          };
        }

        return notification;
      }),
    );

    setIsOpen(false);
  };

  const handleReadAll = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        isUnread: false,
      })),
    );
  };

  return (
    <>
      <Badge
        badgeContent={unreadNotifications.length}
        color="error"
        variant="standard"
      >
        <IconButton variant="light" onClick={handleClick}>
          <BellFillMd />
        </IconButton>
      </Badge>

      <NotificationList
        isOpen={isOpen}
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={handleClose}
        noDataImgSrc={noDataStubSrc}
        isInitialUnreadOnly={unreadNotifications.length > 0}
        onSettingsButtonClick={() => {}}
        onReadAll={handleReadAll}
        headerContent={
          <Tag label="Важный тэг" variant="contained" color="error" />
        }
      />
    </>
  );
};
