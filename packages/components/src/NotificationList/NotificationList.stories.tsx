import { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BellFillMd } from '@astral/icons';

import { IconButton } from '../IconButton';
import { Badge } from '../Badge';
import { Button } from '../Button';

import { NotificationList } from './NotificationList';
import { Notification, NotificationListProps } from './types';

const meta: Meta<typeof NotificationList> = {
  title: 'Components/NotificationList',
  component: NotificationList,
};

export default meta;

type Story = StoryObj<NotificationListProps>;

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
    isUnread: false,
  },
  {
    id: 6,
    title: 'Изменен статус организации',
    date: '2023-10-30T20:00:00',
    text: 'Организация ООО “Тестовая” подключена к личному кабинету',
    priority: 'ordinary',
    isUnread: false,
  },
  {
    id: 7,
    title: 'Изменены данные организации',
    date: '2023-10-30T21:00:00',
    text: 'Для организации ООО “Тестовая” изменено краткое наименование.',
    priority: 'ordinary',
    isUnread: false,
  },
  {
    id: 8,
    title: 'Срок действия вашего сертификата истекает',
    date: '2023-10-30T22:00:00',
    text: 'Срок действия сертификата ЭП для организации ООО “Тестовая” истекает через 30 дней. Обновите сертификат для продолжении работы с регистрацией ККТ.',
    priority: 'ordinary',
    isUnread: false,
  },
];

export const Interaction: Story = {
  args: {
    open: false,
    onClose: () => {},
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(data);
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  let timeout: NodeJS.Timeout | null = null;

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRead = (id: string | number) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.id === id
            ? {
                ...notification,
                isUnread: false,
              }
            : notification,
        ),
      );
    }, 2000);
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
        open={isOpen}
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={handleClose}
        onNotificationVisible={handleRead}
        onReadAll={handleReadAll}
        onDelete={handleDelete}
        noDataImgSrc={noDataStubSrc}
        initialUnreadOnly={unreadNotifications.length > 0}
      />
    </>
  );
};

export const WithButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = data.map((n) => ({
    ...n,
    actions: <Button variant="link">Перейти к уведомлению</Button>,
  }));
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
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
        open={isOpen}
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={handleClose}
        noDataImgSrc={noDataStubSrc}
        initialUnreadOnly={unreadNotifications.length > 0}
      />
    </>
  );
};

export const WithIcons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleRead = (id: string | number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              isUnread: false,
              actions: undefined,
            }
          : notification,
      ),
    );
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = (id: string | number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  useEffect(() => {
    setNotifications(
      data.map((n) => ({
        ...n,
        actions: n.isUnread && (
          <Button onClick={() => handleRead(n.id)} variant="light">
            Отметить как прочитанное
          </Button>
        ),
        icon: <BellFillMd />,
      })),
    );
  }, []);

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
        open={isOpen}
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={handleClose}
        noDataImgSrc={noDataStubSrc}
        initialUnreadOnly={unreadNotifications.length > 0}
        onDelete={handleDelete}
      />
    </>
  );
};

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
        badgeContent={notifications.length}
        color="error"
        variant="standard"
      >
        <IconButton variant="light" onClick={handleClick}>
          <BellFillMd />
        </IconButton>
      </Badge>

      <NotificationList
        open={isOpen}
        notifications={notifications}
        onClose={handleClose}
        noDataImgSrc={noDataStubSrc}
        onReadAll={handleReadAll}
      />
    </>
  );
};
