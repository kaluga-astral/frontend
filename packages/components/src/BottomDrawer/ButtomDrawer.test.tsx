import { describe, expect, it, vi } from 'vitest';
import { fireEvent, renderWithTheme, screen } from '@astral/tests';

import { BottomDrawer } from './BottomDrawer';

describe('BottomDrawer', () => {
  it('Title отображается', () => {
    renderWithTheme(<BottomDrawer open title="Тест"></BottomDrawer>);

    const title = screen.getByText('Тест');

    expect(title).toBeVisible();
  });

  it('Функция, переданная в onClose, корректно вызывается при нажатии на кнопку закрытия', () => {
    const onCloseSpy = vi.fn();

    renderWithTheme(<BottomDrawer open title="Title" onClose={onCloseSpy} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onCloseSpy).toHaveBeenCalled();
  });
});
