import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { expect, vi } from 'vitest';

import { NotificationList } from './NotificationList';
import { Notification } from './types';

const notifications: Notification[] = [
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
    title: 'Срочное предупреждение',
    date: '2023-10-30T16:00:00',
    text: 'Срочное предупреждение: необходимо изменить пароль к учетной записи.',
    priority: 'critical',
    isUnread: false,
  },
  {
    id: 3,
    title: 'Уведомление о подписке',
    date: '2023-10-30T20:00:00',
    text: 'Благодарим вас за подписку на нашу рассылку!',
    priority: 'ordinary',
    isUnread: false,
  },
  {
    id: 4,
    title: 'Специальное предложение',
    date: '2023-10-31T11:00:00',
    text: 'Только сегодня! Скидка 30% на все тарифы.',
    priority: 'critical',
    isUnread: true,
  },
  {
    id: 5,
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
        open
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
        open
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={() => {}}
        initialUnreadOnly={false}
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
        open
        notifications={notifications}
        unreadNotifications={unreadNotifications}
        onClose={() => {}}
        initialUnreadOnly={false}
      />,
    );

    const unreadTab = screen.getByText(
      `Непрочитанные (${unreadNotifications.length})`,
    );

    userEvents.click(unreadTab);

    const notificationTitle = screen.getByText(unreadNotifications[0].title);

    expect(notificationTitle).toBeVisible();
  });

  it('NotificationListFooter виден только при наличии onReadAll', () => {
    const onReadAllMock = vi.fn();

    renderWithTheme(
      <NotificationList
        open
        notifications={notifications}
        onReadAll={onReadAllMock}
        onClose={() => {}}
      />,
    );

    const button = screen.getByText('Отметить все как прочитанные');

    expect(button).toBeInTheDocument();
  });

  it('NotificationListFooter не виден при отсутствии onReadAll', () => {
    renderWithTheme(
      <NotificationList
        open
        notifications={notifications}
        onClose={() => {}}
      />,
    );

    const button = screen.queryByText('Отметить все как прочитанные');

    expect(button).toBeNull();
  });
});
