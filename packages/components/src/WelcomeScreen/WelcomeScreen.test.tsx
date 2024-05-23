import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, renderWithTheme, screen } from '@astral/tests';

import { LOADING_DISPLAY_DELAY_MS, SESSION_KEY } from './constants';
import { WelcomeScreen } from './WelcomeScreen';

describe('WelcomeScreen', () => {
  afterEach(() => {
    sessionStorage.clear();
  });

  it('Контент не отображается если isSuccess=false', () => {
    renderWithTheme(
      <WelcomeScreen
        isSuccess={false}
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
      >
        Content
      </WelcomeScreen>,
    );

    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('Название продукта отображается', () => {
    renderWithTheme(
      <WelcomeScreen
        isSuccess
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
      >
        Content
      </WelcomeScreen>,
    );

    const productNameList = screen.getAllByText('Астрал.ЭДО');

    expect(productNameList).toHaveLength(2);
  });

  it('Имя пользователя отображается', () => {
    renderWithTheme(
      <WelcomeScreen
        isSuccess
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
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

    renderWithTheme(
      <WelcomeScreen
        isSuccess
        productName="Астрал.ЭДО"
        userName="Иван Иванович"
        onRetry={() => undefined}
      >
        Content
      </WelcomeScreen>,
    );

    const title = screen.getByText('Content');

    expect(title).toBeVisible();
  });

  it('Placeholder c ошибкой отображается при isError=true', () => {
    renderWithTheme(
      <WelcomeScreen isSuccess={false} isError onRetry={() => undefined}>
        Content
      </WelcomeScreen>,
    );

    const title = screen.getByText('Произошла ошибка');

    expect(title).toBeVisible();
  });

  it('Лоадер отображается при isLoading=true', async () => {
    renderWithTheme(
      <WelcomeScreen
        isSuccess={false}
        isLoading
        isError={false}
        onRetry={() => undefined}
      >
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
      <WelcomeScreen isSuccess={false} isError onRetry={onRetrySpy}>
        Content
      </WelcomeScreen>,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onRetrySpy).toHaveBeenCalled();
  });
});
