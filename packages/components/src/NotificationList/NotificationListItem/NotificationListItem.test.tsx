import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { expect, vi } from 'vitest';

import {
  NotificationListItem,
  NotificationListItemProps,
} from './NotificationListItem';

const notification: NotificationListItemProps = {
  id: 1,
  title: 'Новое сообщение',
  date: '2023-10-30T10:00:00',
  text: 'У вас новое сообщение от пользователя JohnDoe.',
  priority: 'ordinary',
  isUnread: true,
};

describe('NotificationListItem', () => {
  it('Props:onDelete: отображает кнопку удаления и вызывает onDelete', async () => {
    const onDeleteMock = vi.fn();

    renderWithTheme(
      <NotificationListItem {...notification} onDelete={onDeleteMock} />,
    );

    const notificationDeleteButton = screen.getByRole('button');

    expect(notificationDeleteButton).toBeVisible();
    await userEvents.click(notificationDeleteButton);
    expect(onDeleteMock.mock.calls[0][0]).toEqual(1);
  });

  it('Props:actions: отображает кнопку действия', () => {
    renderWithTheme(
      <NotificationListItem
        {...notification}
        actions={<button>action</button>}
      />,
    );

    const notificationDeleteButton = screen.getByText('action');

    expect(notificationDeleteButton).toBeVisible();
  });
});
