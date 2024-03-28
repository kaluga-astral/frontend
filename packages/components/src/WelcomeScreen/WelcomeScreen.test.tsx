import { fireEvent, renderWithTheme, screen } from '@astral/tests';
import { vi } from 'vitest';

import { LOADING_DISPLAY_DELAY_MS, SESSION_KEY } from './constants';
import { WelcomeScreen } from './WelcomeScreen';

describe('WelcomeScreen', () => {
  afterEach(() => {
    sessionStorage.clear();
  });

  it('Контент не отображается при первичном рендере', () => {
    renderWithTheme(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
      >
        Content
      </WelcomeScreen>,
    );

    expect(screen.queryByText('Content')).toBeNull();
  });

  it('Название продукта отображается', () => {
    const { rerender } = renderWithTheme(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
      >
        Content
      </WelcomeScreen>,
    );

    rerender(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
        isLoading
      >
        Content
      </WelcomeScreen>,
    );

    rerender(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
        isLoading={false}
      >
        Content
      </WelcomeScreen>,
    );

    const productNameList = screen.getAllByText('Астрал.ЭДО');

    expect(productNameList).toHaveLength(2);
  });

  it('Имя пользователя отображается', () => {
    const { rerender } = renderWithTheme(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
      >
        Content
      </WelcomeScreen>,
    );

    rerender(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
        isLoading
      >
        Content
      </WelcomeScreen>,
    );

    rerender(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
        isLoading={false}
      >
        Content
      </WelcomeScreen>,
    );

    const userName = screen.getByText('Иван Иванович');

    // Элемент не сразу виден на экране
    expect(userName).toBeInTheDocument();
  });

  it(`Содержимое отображается сразу при наличии в sessionStorage значения ${SESSION_KEY}="true"`, () => {
    sessionStorage.setItem(SESSION_KEY, 'true');

    const { rerender } = renderWithTheme(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
      >
        Content
      </WelcomeScreen>,
    );

    rerender(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
        isLoading
      >
        Content
      </WelcomeScreen>,
    );

    rerender(
      <WelcomeScreen
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
        isLoading={false}
      >
        Content
      </WelcomeScreen>,
    );

    const title = screen.getByText('Content');

    expect(title).toBeVisible();
  });

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

    // Лоадер отображается с задержкой в 300мс. Значение определено в константе LOADING_DISPLAY_DELAY_MS
    await new Promise((resolve) =>
      setTimeout(resolve, LOADING_DISPLAY_DELAY_MS + 100),
    );

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });

  it('OnRetry вызывается при нажатии на кнопку "Попробовать снова"', () => {
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
