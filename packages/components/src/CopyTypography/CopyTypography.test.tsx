import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { CopyTypography } from './CopyTypography';

describe('CopyTypography', () => {
  it('Значение копируется в буфер обмена, при клике на компонент', async () => {
    const copyText = 'it was copied';

    const writeTextSpy = vi.fn(() => Promise.resolve());

    Object.assign(navigator, { clipboard: { writeText: writeTextSpy } });
    renderWithTheme(<CopyTypography>{copyText}</CopyTypography>);

    const element = screen.getByText(copyText);

    await userEvents.click(element);
    expect(writeTextSpy).toBeCalled();
  });

  it('Значение копируется в буфер обмена, если children содержит ReactNode и заданном copyText', async () => {
    const copyText = 'it was copied';

    const writeTextSpy = vi.fn(() => Promise.resolve());

    Object.assign(navigator, { clipboard: { writeText: writeTextSpy } });

    renderWithTheme(
      <CopyTypography copyText={copyText}>
        <div>{copyText}</div>
      </CopyTypography>,
    );

    const element = screen.getByText(copyText);

    await userEvents.click(element);
    expect(writeTextSpy).toBeCalled();
  });
});
