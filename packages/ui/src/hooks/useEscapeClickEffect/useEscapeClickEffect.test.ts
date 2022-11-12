import { renderHook, userEvents } from '@astral/tests';

import { useEscapeClickEffect } from './useEscapeClickEffect';

describe('useEscapeClickEffect', () => {
  it('Prop:isActive=true: при нажатии esc вызывается onEscape', async () => {
    const user = userEvents.setup();

    const onEscape = jest.fn();

    renderHook(() => useEscapeClickEffect({ isActive: true, onEscape }));
    await user.keyboard('{Escape}');
    expect(onEscape).toBeCalled();
  });

  it('Prop:isActive=false: при нажатии esc onEscape не вызывается', async () => {
    const user = userEvents.setup();

    const onEscape = jest.fn();

    renderHook(() => useEscapeClickEffect({ isActive: false, onEscape }));
    await user.keyboard('{Escape}');
    expect(onEscape).not.toBeCalled();
  });
});
