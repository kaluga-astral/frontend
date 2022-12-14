import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { vi } from 'vitest';

import { ClickAwayListener } from './ClickAwayListener';

describe('ClickAwayListener', () => {
  it('Props:isActive=true: при клике внутри onClickAway не вызывается', async () => {
    const onClickAway = vi.fn();

    renderWithTheme(
      <ClickAwayListener onClickAway={onClickAway} isActive={true}>
        <div>Lorem</div>
      </ClickAwayListener>,
    );

    const div = screen.getByText('Lorem');

    await userEvents.click(div);
    expect(onClickAway).toBeCalledTimes(0);
  });

  it('Props:isActive=false: при клике внутри onClickAway не вызывается', async () => {
    const onClickAway = vi.fn();

    renderWithTheme(
      <ClickAwayListener onClickAway={onClickAway} isActive={false}>
        <div>Lorem</div>
      </ClickAwayListener>,
    );

    const div = screen.getByText('Lorem');

    await userEvents.click(div);
    expect(onClickAway).toBeCalledTimes(0);
  });

  it('Props:isActive=true: при клике снаружи, onClickAway вызывается', async () => {
    const onClickAway = vi.fn();

    renderWithTheme(
      <ClickAwayListener onClickAway={onClickAway} isActive={true}>
        <div>Lorem</div>
      </ClickAwayListener>,
    );

    await userEvents.click(document.body);
    expect(onClickAway).toBeCalledTimes(1);
  });
});
