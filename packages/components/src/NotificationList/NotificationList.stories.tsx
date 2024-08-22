import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { BellFillMd } from '@astral/icons';

import noNotificationsIllustration from '../../../ui/illustrations/no-notifications.svg';
import errorIllustration from '../../../ui/illustrations/error.svg';
import { IconButton } from '../IconButton';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { ConfigProvider } from '../ConfigProvider';

import { NotificationList } from './NotificationList';
import { type Notification } from './types';

/**
 *
 * ### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?node-id=21302-194345)
 * ### [Guide]()
 */

const meta: Meta<typeof NotificationList> = {
  title: 'Components/Features/NotificationList',
  component: NotificationList,
};

export default meta;

type Story = StoryObj<typeof NotificationList>;

const data: Notification[] = [
  {
    id: '1',
    title: 'Новое сообщение',
    date: '2023-10-30T10:00:00',
    text: 'У вас новое сообщение от пользователя JohnDoe.',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: '2',
    title: 'Важная информация',
    date: '2023-10-30T11:00:00',
    text: 'Сроки заказа были изменены. Пожалуйста, проверьте и подтвердите.',
    priority: 'important',
    isUnread: true,
  },
  {
    id: '3',
    title: 'Обновление в личном кабинете',
    date: '2023-10-30T12:00:00',
    text: 'Добавлен раздел Обмен с 1С',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: '4',
    title: 'Приглашение',
    date: '2023-10-30T13:00:00',
    text: 'У вас новый запрос на роуминг',
    priority: 'important',
    isUnread: true,
  },
  {
    id: '5',
    title: 'Срочное предупреждение',
    date: '2023-10-30T16:00:00',
    text: 'Срочное предупреждение: необходимо изменить пароль к учетной записи.',
    priority: 'critical',
    isUnread: true,
  },
  {
    id: '6',
    title: 'Изменен статус организации',
    date: '2023-10-30T20:00:00',
    text: 'Организация ООО “Тестовая” подключена к личному кабинету',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: '7',
    title: 'Изменены данные организации',
    date: '2023-10-30T21:00:00',
    text: 'Для организации ООО “Тестовая” изменено краткое наименование.',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: '8',
    title: 'Срок действия вашего сертификата истекает',
    date: '2023-10-30T22:00:00',
    text: 'Срок действия сертификата ЭП для организации ООО “Тестовая” истекает через 30 дней. Обновите сертификат для продолжении работы с регистрацией ККТ.',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: '9',
    title: 'Приглашение',
    date: '2023-10-30T13:00:00',
    text: 'У вас новый запрос на роуминг',
    priority: 'important',
    isUnread: true,
  },
  {
    id: '10',
    title: 'Срочное предупреждение',
    date: '2023-10-30T16:00:00',
    text: 'Срочное предупреждение: необходимо изменить пароль к учетной записи.',
    priority: 'critical',
    isUnread: true,
  },
  {
    id: '11',
    title: 'Изменен статус организации',
    date: '2023-10-30T20:00:00',
    text: 'Организация ООО “Тестовая” подключена к личному кабинету',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: '12',
    title: 'Изменены данные организации',
    date: '2023-10-30T21:00:00',
    text: 'Для организации ООО “Тестовая” изменено краткое наименование.',
    priority: 'ordinary',
    isUnread: true,
  },
  {
    id: '13',
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
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

const NotificationWidget = ({
  notificationsCount,
  onClick,
}: {
  notificationsCount: number;
  onClick: () => void;
}) => {
  return (
    <Badge badgeContent={notificationsCount} color="error" variant="standard">
      <IconButton variant="light" onClick={onClick}>
        <BellFillMd />
      </IconButton>
    </Badge>
  );
};

export const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(data);
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (viewedIds: string[]) => {
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

  const handleDelete = (id: string | number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  return (
    <>
      <NotificationWidget
        notificationsCount={unreadNotifications.length}
        onClick={handleClick}
      />

      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={notifications}
          onClose={handleClose}
          onDelete={handleDelete}
          initialListType={unreadNotifications.length > 0 ? 'unread' : 'all'}
          onSettingsButtonClick={() => {
            console.log('onSettingsButtonClick');
          }}
        />
      </ConfigProvider>
    </>
  );
};

/**
 *Если передать unreadNotifications, отображаются табы переключения списка (все/непрочитанные).
 */

export const UnreadNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data);
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (viewedIds: string[]) => {
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
      <NotificationWidget
        notificationsCount={notifications.filter((n) => n.isUnread).length}
        onClick={handleClick}
      />

      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={notifications}
          unreadNotifications={unreadNotifications}
          onClose={handleClose}
          footerContent={
            unreadNotifications.length && (
              <Button variant="light" onClick={handleReadAll}>
                Отметить все как прочитанные
              </Button>
            )
          }
        />
      </ConfigProvider>
    </>
  );
};

export const Title = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NotificationWidget
        notificationsCount={data.filter((n) => n.isUnread).length}
        onClick={handleClick}
      />

      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={data}
          onClose={handleClose}
          title="Сообщения"
        />
      </ConfigProvider>
    </>
  );
};

/**
 *В компоненте есть логика прочтения уведомлений, если сообщение полностью попало во viewport, то оно считается прочитанным.
 *При вызове ```onClose``` передаются id уведомлений, которые были прочитаны.
 */
export const OnClose = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data);
  const unreadNotifications = notifications.filter(
    (notification) => notification.isUnread,
  );

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = (viewedIds: string[]) => {
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
      <NotificationWidget
        notificationsCount={unreadNotifications.length}
        onClick={handleClick}
      />

      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={notifications}
          unreadNotifications={unreadNotifications}
          onClose={handleClose}
          initialListType={unreadNotifications.length > 0 ? 'unread' : 'all'}
        />
      </ConfigProvider>
    </>
  );
};

/**
 *В свойство ```actions``` типа ```Notification``` можно передавать любые элементы взаимодействия, в этом примере используется ```Button variant="link"```.
 */
export const Actions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(
    data.map((n) => {
      if (n.id === '3' || n.id === '4') {
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
      <NotificationWidget
        notificationsCount={unreadNotifications.length}
        onClick={handleClick}
      />

      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={notifications}
          unreadNotifications={unreadNotifications}
          onClose={handleClose}
          initialListType={unreadNotifications.length > 0 ? 'unread' : 'all'}
        />
      </ConfigProvider>
    </>
  );
};

/**
 *- В заголовке используется компонент ```SideDialogHeader```..
 *- В ```headerContent``` можно передавать другие компонент. Компоненты будут расположены между заголовком и кнопкой настроек или закрытия.
 */
export const HeaderContent = () => {
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
      <NotificationWidget
        notificationsCount={unreadNotifications.length}
        onClick={handleClick}
      />

      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={notifications}
          unreadNotifications={unreadNotifications}
          onClose={handleClose}
          initialListType={unreadNotifications.length > 0 ? 'unread' : 'all'}
          onSettingsButtonClick={() => {}}
          headerContent={
            <Tag label="Важный тэг" variant="contained" color="error" />
          }
        />
      </ConfigProvider>
    </>
  );
};

export const FooterContent = () => {
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
      <NotificationWidget
        notificationsCount={unreadNotifications.length}
        onClick={handleClick}
      />

      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={notifications}
          onClose={handleClose}
          footerContent={
            <Button variant="light">Кнопка в подвале списка</Button>
          }
        />
      </ConfigProvider>
    </>
  );
};

/**
 * Определяет, какой список выводить при открытии.
 */
export const InitialListType = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NotificationWidget
        notificationsCount={data.filter((n) => n.isUnread).length}
        onClick={handleClick}
      />
      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={data}
          unreadNotifications={data.filter((n) => n.isUnread)}
          initialListType="all"
          onClose={handleClose}
        />
      </ConfigProvider>
    </>
  );
};

export const IsLoading = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NotificationWidget
        notificationsCount={data.filter((n) => n.isUnread).length}
        onClick={handleClick}
      />

      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          isLoading
          notifications={data}
          unreadNotifications={data.filter((n) => n.isUnread)}
          initialListType="all"
          onClose={handleClose}
        />
      </ConfigProvider>
    </>
  );
};

export const IsError = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = () => {
    setIsOpen(true);
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      setIsLoading(false);
      setError('Сообщения не получены');
    }, 1000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NotificationWidget
        notificationsCount={data.filter((n) => n.isUnread).length}
        onClick={handleClick}
      />
      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          isError={Boolean(error)}
          isLoading={isLoading}
          errorMessage={error}
          notifications={data}
          unreadNotifications={data.filter((n) => n.isUnread)}
          initialListType="all"
          onClose={handleClose}
          onRetry={handleClick}
        />
      </ConfigProvider>
    </>
  );
};

/**
 * Управляет отображением кнопки настроек
 */
export const IsSettingsButtonVisible = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NotificationWidget
        notificationsCount={data.filter((n) => n.isUnread).length}
        onClick={handleClick}
      />
      <ConfigProvider
        imagesMap={{
          defaultErrorImgSrc: errorIllustration,
          noDataImgSrc: noNotificationsIllustration,
          outdatedReleaseErrorImgSrc: '',
        }}
      >
        <NotificationList
          isOpen={isOpen}
          notifications={data}
          unreadNotifications={data.filter((n) => n.isUnread)}
          initialListType="all"
          onClose={handleClose}
          isSettingsButtonVisible={false}
        />
      </ConfigProvider>
    </>
  );
};
