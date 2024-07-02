import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { NotificationList } from './NotificationList';
import { type Notification } from './types';

const notifications: Notification[] = [
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
    title: 'Срочное предупреждение',
    date: '2023-10-30T16:00:00',
    text: 'Срочное предупреждение: необходимо изменить пароль к учетной записи.',
    priority: 'critical',
    isUnread: false,
  },
  {
    id: '3',
    title: 'Уведомление о подписке',
    date: '2023-10-30T20:00:00',
    text: 'Благодарим вас за подписку на нашу рассылку!',
    priority: 'ordinary',
    isUnread: false,
  },
  {
    id: '4',
    title: 'Специальное предложение',
    date: '2023-10-31T11:00:00',
    text: 'Только сегодня! Скидка 30% на все тарифы.',
    priority: 'critical',
    isUnread: true,
  },
  {
    id: '5',
    title: 'Изменение пароля',
    date: '2023-10-31T13:00:00',
    text: 'Ваш пароль был успешно изменен.',
    priority: 'important',
    isUnread: true,
  },
];
const unreadNotifications = notifications.filter(
  (notification) => notification.isUnread,
);

describe('NotificationList', () => {
  it('Props:unreadNotifications: отображает непрочитанные уведомления', () => {
    renderWithTheme(
      <NotificationList
        isOpen
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={() => {}}
      />,
    );

    const notificationTitle = screen.getByText(unreadNotifications[0].title);

    expect(notificationTitle).toBeVisible();
  });

  it('Props:notifications: отображает все уведомления', () => {
    renderWithTheme(
      <NotificationList
        isOpen
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={() => {}}
        initialListType="all"
      />,
    );

    const notificationTitle = screen.getByText(
      notifications.find((n) => !n.isUnread)!.title,
    );

    expect(notificationTitle).toBeVisible();
  });

  it('Переключает режим отображения непрочитанных уведомлений', () => {
    renderWithTheme(
      <NotificationList
        isOpen
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={() => {}}
        initialListType="all"
      />,
    );

    const unreadTab = screen.getByText(
      `Непрочитанные (${unreadNotifications.length})`,
    );

    userEvents.click(unreadTab);

    const notificationTitle = screen.getByText(unreadNotifications[0].title);

    expect(notificationTitle).toBeVisible();
  });

  it('Footer виден только при наличии footerContent', () => {
    renderWithTheme(
      <NotificationList
        isOpen
        notifications={notifications}
        footerContent={<button>Отметить все как прочитанные</button>}
        onClose={() => {}}
      />,
    );

    const button = screen.getByText('Отметить все как прочитанные');

    expect(button).toBeInTheDocument();
  });

  it('Props:onDelete: отображает кнопку удаления и вызывает onDelete', async () => {
    const onDeleteMock = vi.fn();

    renderWithTheme(
      <NotificationList
        notifications={notifications}
        onDelete={onDeleteMock}
        isOpen
        onClose={() => {}}
      />,
    );

    const listItems = screen.getAllByRole('listitem');
    const deleteButton = listItems[0].getElementsByTagName('button')[0];

    expect(deleteButton).toBeVisible();
    await userEvents.click(deleteButton);
    expect(onDeleteMock.mock.calls[0][0]).toBe('1');
  });

  it('Props:actions: отображает кнопку действия', () => {
    renderWithTheme(
      <NotificationList
        isOpen
        onClose={() => {}}
        notifications={[
          {
            id: '1',
            title: 'Новое сообщение',
            date: '2023-10-30T10:00:00',
            text: 'У вас новое сообщение от пользователя JohnDoe.',
            priority: 'ordinary',
            isUnread: true,
            actions: <button>action</button>,
          },
        ]}
      />,
    );

    const notificationDeleteButton = screen.getByText('action');

    expect(notificationDeleteButton).toBeVisible();
  });

  it('Props:unreadNotifications.length = 0: отображает текст "У вас пока нет новых уведомлений"', async () => {
    renderWithTheme(
      <NotificationList
        isOpen
        onClose={() => {}}
        notifications={notifications}
        unreadNotifications={[]}
        initialListType="unread"
      />,
    );

    const notificationListEmptyText = screen.getByText(
      'У вас пока нет новых уведомлений',
    );

    expect(notificationListEmptyText).toBeVisible();
  });

  it('Props:notifications.length = 0: отображает текст "У вас пока нет уведомлений"', async () => {
    renderWithTheme(
      <NotificationList
        isOpen
        onClose={() => {}}
        notifications={[]}
        initialListType="all"
      />,
    );

    const notificationListEmptyText = screen.getByText(
      'У вас пока нет уведомлений',
    );

    expect(notificationListEmptyText).toBeVisible();
  });
});
