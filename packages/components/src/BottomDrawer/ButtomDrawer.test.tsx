import { fireEvent, renderWithTheme, screen } from '@astral/tests';
import { vi } from 'vitest';

import { BottomDrawer } from './BottomDrawer';

describe('BottomDrawer', () => {
  it('Prop:title: значение, переданное в drawerTitle, отображается', () => {
    renderWithTheme(<BottomDrawer open title="Тест"></BottomDrawer>);

    const title = screen.getByText('Тест');

    expect(title).toBeVisible();
  });

  it('Prop:onClose: функция, переданная в onClose, корректно вызывается', () => {
    const onCloseMockFn = vi.fn();

    renderWithTheme(
      <BottomDrawer open title="Title" onClose={onCloseMockFn} />,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onCloseMockFn).toHaveBeenCalled();
    vi.clearAllMocks();
  });
});
