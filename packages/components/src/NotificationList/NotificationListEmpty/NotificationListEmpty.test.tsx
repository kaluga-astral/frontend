import { renderWithTheme, screen } from '@astral/tests';
import { expect } from 'vitest';

import { NotificationListEmpty } from './NotificationListEmpty';

describe('NotificationListEmpty', () => {
  it('Props:isUnreadOnly: отображает текст "У вас пока нет новых уведомлений"', async () => {
    renderWithTheme(<NotificationListEmpty isUnreadOnly />);

    const notificationListEmptyText = screen.getByText(
      'У вас пока нет новых уведомлений',
    );

    expect(notificationListEmptyText).toBeVisible();
  });

  it('Props:isUnreadOnly=false: отображает текст "У вас пока нет уведомлений"', async () => {
    renderWithTheme(<NotificationListEmpty isUnreadOnly={false} />);

    const notificationListEmptyText = screen.getByText(
      'У вас пока нет уведомлений',
    );

    expect(notificationListEmptyText).toBeVisible();
  });

  it('Props:noDataImgSrc: отображает картинку', async () => {
    renderWithTheme(<NotificationListEmpty noDataImgSrc="noDataImgSrc" />);

    const notificationListEmptyImg = screen.getByAltText('Нет уведомлений');

    expect(notificationListEmptyImg).toBeVisible();
  });
});
