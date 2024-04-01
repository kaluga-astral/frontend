import { renderWithTheme, screen, userEvents } from '@astral/tests';
import { describe, expect, it, vi } from 'vitest';

import { ScrollToTopButton } from './ScrollToTopButton';

describe('ScrollToTopButton', () => {
  it('OnChange вызывается при клике на кнопку', async () => {
    const onClickSpy = vi.fn();

    renderWithTheme(<ScrollToTopButton onClick={onClickSpy} />);
    await userEvents.click(screen.getByRole('button'));
    expect(onClickSpy).toBeCalled();
  });
});
