import { fireEvent, renderWithTheme, screen } from '@astral/tests';
import { vi } from 'vitest';

import { LOADING_DISPLAY_DELAY_MS } from './constants';
import { WelcomeScreen } from './WelcomeScreen';

describe('WelcomeScreen', () => {
  it('Placeholder c ошибкой отображается при isError=true', () => {
    renderWithTheme(
      <WelcomeScreen isError onRetry={() => undefined}>
        Content
      </WelcomeScreen>,
    );

    const title = screen.getByText('Произошла ошибка');

    expect(title).toBeVisible();
  });

  it('Лоадер отображается при isLoading=true', async () => {
    renderWithTheme(
      <WelcomeScreen isLoading isError={false} onRetry={() => undefined}>
        Content
      </WelcomeScreen>,
    );

    // Лоадер отображается с задержкой в 300. Значение определено в константе LOADING_DISPLAY_DELAY_MS
    await new Promise((resolve) =>
      setTimeout(resolve, LOADING_DISPLAY_DELAY_MS + 100),
    );

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });

  it('onRetry вызывается при нажатии на кнопку "Попробовать снова"', () => {
    const onRetrySpy = vi.fn();

    renderWithTheme(
      <WelcomeScreen isError onRetry={onRetrySpy}>
        Content
      </WelcomeScreen>,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onRetrySpy).toHaveBeenCalled();
  });
});
