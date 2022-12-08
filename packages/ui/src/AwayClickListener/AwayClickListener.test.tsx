import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { vi } from 'vitest';

import { AwayClickListener } from './AwayClickListener';

describe('AwayClickListener', () => {
  it('Props:isActive=true: при клике внутри onAwayClick не вызывается', async () => {
    const onAwayClick = vi.fn();

    renderWithTheme(
      <AwayClickListener onAwayClick={onAwayClick} isActive={true}>
        Lorem
      </AwayClickListener>,
    );

    const div = screen.getByText('Lorem');

    await userEvents.click(div);
    expect(onAwayClick).toBeCalledTimes(0);
  });

  it('Props:isActive=false: при клике внутри onAwayClick не вызывается', async () => {
    const onAwayClick = vi.fn();

    renderWithTheme(
      <AwayClickListener onAwayClick={onAwayClick} isActive={false}>
        Lorem
      </AwayClickListener>,
    );

    const div = screen.getByText('Lorem');

    await userEvents.click(div);
    expect(onAwayClick).toBeCalledTimes(0);
  });

  it('Props:isActive=true: при клике снаружи, onAwayClick вызывается', async () => {
    const onAwayClick = vi.fn();

    renderWithTheme(
      <AwayClickListener onAwayClick={onAwayClick} isActive={true}>
        Lorem
      </AwayClickListener>,
    );

    await userEvents.click(document.body);
    expect(onAwayClick).toBeCalledTimes(1);
  });
});
