import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme, screen, userEvents } from '@astral/tests';

import { CollapsibleTypography } from './CollapsibleTypography';

const TEXT_SHOW_BUTTON = 'Показать полностью';

const TEXT_HIDE_BUTTON = 'Скрыть';

const EXAMPLE_SHOW_TEXT = 'Какой-то текст';
const EXAMPLE_CONTENT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
asperiores a, aliquam nam nihil maxime eaque aliquid illo hic
architecto, aperiam repellendus quaerat nulla esse debitis repudiandae,
suscipit ipsa officia.`;
const setScrollHeight = (value: number) => {
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    value: value,
  });
};

const setClientHeight = (value: number) => {
  Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
    configurable: true,
    value: vi.fn(() => {
      return {
        height: value,
      };
    }),
  });
};

describe('CollapsibleTypography', () => {
  it('Prop: rowsCount=1: Появляется кнопка раскрытия', () => {
    setScrollHeight(200);

    renderWithTheme(
      <CollapsibleTypography rowsCount={1}>
        {EXAMPLE_CONTENT}
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByRole('button');

    expect(controlButton).toBeInTheDocument();
  });

  it('Prop: rowsCount: При отрицательном значении устанавливается значение по умолчанию', () => {
    setScrollHeight(200);

    renderWithTheme(
      <CollapsibleTypography rowsCount={-5}>
        {EXAMPLE_CONTENT}
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByText(TEXT_SHOW_BUTTON);

    expect(controlButton).toBeInTheDocument();
  });

  it('Prop: showButtonText: Изменяется текст кнопки открытия', () => {
    setScrollHeight(200);

    renderWithTheme(
      <CollapsibleTypography textShowButton={EXAMPLE_SHOW_TEXT}>
        {EXAMPLE_CONTENT}
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByText(EXAMPLE_SHOW_TEXT);

    expect(controlButton).toBeInTheDocument();
  });

  it('Prop: hideButtonText: Изменяется текст кнопки сокрытия', async () => {
    setScrollHeight(200);

    renderWithTheme(
      <CollapsibleTypography textHideButton={EXAMPLE_SHOW_TEXT}>
        {EXAMPLE_CONTENT}
      </CollapsibleTypography>,
    );

    const showButton = screen.getByText(TEXT_SHOW_BUTTON);

    await userEvents.click(showButton);
    expect(screen.getByText(EXAMPLE_SHOW_TEXT)).toBeInTheDocument();
  });

  it('При нажатии на кнопку "Показать" отображается весь текст', async () => {
    setScrollHeight(200);

    renderWithTheme(
      <CollapsibleTypography rowsCount={1}>
        {EXAMPLE_CONTENT}
      </CollapsibleTypography>,
    );

    const controlButton = screen.getByText(TEXT_SHOW_BUTTON);

    await userEvents.click(controlButton);
    expect(screen.getByText(TEXT_HIDE_BUTTON)).toBeInTheDocument();
  });

  it('Кнопка "показать" скрыта, если контент не переполнен', () => {
    setScrollHeight(200);
    setClientHeight(200);

    renderWithTheme(
      <CollapsibleTypography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
      </CollapsibleTypography>,
    );

    const controlButton = screen.queryByRole('button');

    expect(controlButton).not.toBeInTheDocument();
  });
});
