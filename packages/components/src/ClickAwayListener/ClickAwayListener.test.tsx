import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { ClickAwayListener } from './ClickAwayListener';

describe('ClickAwayListener', () => {
  describe('onClickAway не вызывается', () => {
    it('При isActive=true и клике внутри children', async () => {
      const onClickAwaySpy = vi.fn();

      renderWithTheme(
        <ClickAwayListener onClickAway={onClickAwaySpy} isActive={true}>
          <div>Lorem</div>
        </ClickAwayListener>,
      );

      const div = screen.getByText('Lorem');

      await userEvents.click(div);
      expect(onClickAwaySpy).not.toBeCalled();
    });

    it('При isActive=false и клике внутри children', async () => {
      const onClickAwaySpy = vi.fn();

      renderWithTheme(
        <ClickAwayListener onClickAway={onClickAwaySpy} isActive={false}>
          <div>Lorem</div>
        </ClickAwayListener>,
      );

      const div = screen.getByText('Lorem');

      await userEvents.click(div);
      expect(onClickAwaySpy).not.toBeCalled();
    });
  });

  it('onClickAway вызывается при isActive=true: и клике снаружи children', async () => {
    const onClickAwaySpy = vi.fn();

    renderWithTheme(
      <ClickAwayListener onClickAway={onClickAwaySpy} isActive={true}>
        <div>Lorem</div>
      </ClickAwayListener>,
    );

    await userEvents.click(document.body);
    expect(onClickAwaySpy).toBeCalled();
  });
});
